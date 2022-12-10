import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import "./Center.css";

interface CenterProps {
  open: boolean;
  onClose: () => void;
  // data: any;
}

interface Center {
  id: number
  name: string
  address: string
  description: string
  averageRating: number
}

// export default function EditProfile({ open, onClose, data }: EditProfileProps) {
export default function Center({ open, onClose }: CenterProps) {

  // const [dataUser, setDataUser] = useState()
  let user = JSON.parse(sessionStorage.getItem("user")!);
  let id = JSON.parse(sessionStorage.getItem("id")!);

  const [centreData, setCentreData] = useState([])
  const [centreId, setCentreId] = useState(0)

  const token = JSON.parse(sessionStorage.getItem("token")!);
  // const centerId = JSON.parse(sessionStorage.getItem("centerId")!);

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [averageRating, setAverageRating] = useState(0);

  let centreDataFiltrated: any

  const getCentreData = (id: number) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (id !== undefined || null) {


      fetch(
        process.env.REACT_APP_API_URL + `/user/getCentreByUserId/${id}`,
        requestOptions
      ).then(response => {
        return response.json()
      }).then(data => {
        // console.log(data);
        
        setCentreData(data)
        
      setName(data.name)
      setAddress(data.address)
      setDescription(data.description)
      setAverageRating(data.averageRating)
      setCentreId(data.id)
      
      sessionStorage.setItem("centerId", JSON.stringify(data.id));
      })
    }
  }

  useEffect(() => {
    getCentreData(id)
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleEditCenterProfile = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        process.env.REACT_APP_API_URL +
        `/centerProfile/updateCenterProfile/${centreId}`,
        {
          name,
          address,
          description,
          averageRating
        },
        config
      );

      sessionStorage.setItem("center_profile", JSON.stringify(data));

      alert("Update successful!");
      onClose();
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Error: Failed to update user");
      }
    }
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <>
          <DialogTitle>Update profile center</DialogTitle>
            <div className="Auth-form-container dialog">
              <form className="Auth-form" onSubmit={handleEditCenterProfile}>
                <div className="Auth-form-content">
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Name</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Address</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter address"}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Description</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter description"}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ textTransform: "capitalize" }}>Average rating</label>
                      <input
                        required
                        type="text"
                        className="form-control mt-1"
                        placeholder={"Enter averageRating"}
                        value={averageRating}
                        onChange={(e) => setAverageRating(Number(e.target.value))}
                      />
                    </div>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </>
      </Dialog>
    </>
  );
}