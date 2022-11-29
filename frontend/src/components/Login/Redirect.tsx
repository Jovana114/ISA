import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Redirect() {
  const [navigateUser, setNavigateUser] = useState(false);
  const [navigateStaff, setNavigateStaff] = useState(false);
  const [navigateAdmin, setNavigateAdmin] = useState(false);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("role")) {
      // console.log(JSON.parse(sessionStorage.getItem("role")!));

      if (JSON.parse(sessionStorage.getItem("role")!) === "ROLE_USER")
        setNavigateUser(true);
      else if (JSON.parse(sessionStorage.getItem("role")!) === "ROLE_STAFF")
        setNavigateStaff(true);
      else if (JSON.parse(sessionStorage.getItem("role")!) === "ROLE_ADMIN")
        setNavigateAdmin(true);
    }
  }, [navigateUser, navigateStaff, navigateAdmin]);

  if (navigateUser) return <Navigate to="/user-home" />;
  if (navigateStaff) return <Navigate to="/staff-home" />;
  if (navigateAdmin) return <Navigate to="/admin-home" />;

  return <></>;
}
