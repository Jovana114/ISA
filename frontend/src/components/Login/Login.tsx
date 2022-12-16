import axios from "axios";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const [submited, setSubmited] = useState(false);
  const [data, setData] = useState([]);

  const fetchDataPost = async () => {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
      withCredentials: false,
    };
    try {
      const fetchResponse = await fetch(
        process.env.REACT_APP_API_URL + "/auth/signin",
        settings
      );
      const data = await fetchResponse.json();
      return data;
    } catch (e) {
      return e;
    }
  };

  const fetchData = async (id: any, token: string) => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/user/${id}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    if (submited)
      fetchDataPost()
        .then((res) => {
          setData(res);
          // console.log(res);
          if (res.token) {
            sessionStorage.setItem("token", JSON.stringify(res.token));
            sessionStorage.setItem("id", JSON.stringify(res.id));
            sessionStorage.setItem("role", JSON.stringify(res.roles[0].name));
            nav(
              `/${res.roles[0].name.replace("ROLE_", "").toLowerCase()}-home`
            );
          } else {
            alert(res.message);
          }

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.token}`;

          fetchData(res.id, res.token)
            .then((res) => {
            })
            .catch((e) => {
              console.log(e.message);
              setSubmited(false);
            });
        })
        .catch((e) => {
          console.log(e.message);
          setSubmited(false);
        });
  }, [submited]);

  const submit = async (e: any) => {
    e.preventDefault();
    setSubmited(true);
  };

  return (
    <>
      <form className="login-form" onSubmit={submit} autoComplete="off">
        <h1>Login</h1>
        <div className="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autoComplete="new-password"
            required
            className="form-control-material"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="new-password"
            required
            className="form-control-material"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit" className="btn btn-ghost">
          Login
        </button>
      </form>
    </>
  );
};
