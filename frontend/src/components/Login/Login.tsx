import axios from "axios";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  // const config = {
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
  //   },
  // };

  // useEffect(() => {
  //   if (sessionStorage.getItem("user")) {
  //     if (
  //       JSON.parse(sessionStorage.getItem("user")!).roles[0].name ===
  //       "ROLE_USER"
  //     ) {
  //       nav("user-home");
  //     } else if (
  //       JSON.parse(sessionStorage.getItem("user")!).roles[0].name ===
  //       "ROLE_STAFF"
  //     ) {
  //       nav("/staff-home");
  //     }
  //     nav("/admin-home");
  //   }
  // });

  const [submited, setSubmited] = useState(false);
  const [data, setData] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");
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
              sessionStorage.setItem("user", JSON.stringify(res));
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

    // try {
    //   await fetchDataPost();
    //   nav(`/${navigateText}-home`);
    // } catch (e: any) {
    //   alert(e.message);
    // }

    // if (navigate && navigateText !== "") {
    //   nav(`/${navigateText}-home`);
    // }

    // try {
    //   const { data } = await axios.post(
    //     process.env.REACT_APP_API_URL + "/auth/signin",
    //     {
    //       username,
    //       password,
    //     },
    //     { withCredentials: false }
    //   );

    //   sessionStorage.setItem("token", JSON.stringify(data.token));
    //   sessionStorage.setItem("id", JSON.stringify(data.id));
    //   axios.defaults.headers.common[
    //     "Authorization"
    //   ] = `Bearer ${data["token"]}`;

    //   axios
    //     .get(
    //       process.env.REACT_APP_API_URL +
    //         `/user/${sessionStorage.getItem("id")}`
    //     )
    //     .then((res: any) => {
    //       sessionStorage.setItem("user", JSON.stringify(res.data));
    //       sessionStorage.setItem(
    //         "role",
    //         JSON.stringify(res.data.roles[0].name)
    //       );
    //     });
    // } catch (error: any) {
    //   if (error.response.status === 401) {
    //     alert("Bad credentials");
    //   }
    // }
  };

  // if (navigate) {
  //   return <Navigate to={`/${navigateText}-home`} />;
  // }

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
