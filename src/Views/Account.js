import { Avatar } from "@mui/material";
import { useAuth } from "../Components/AuthContext";

const Account = () => {
  const { logout, currentUser } = useAuth();
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          backgroundColor: "#0e7b65",
          width: "100%",
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: "1000",
          padding: "5px 0px",
          textAlign: "center",
          borderLeft: '1px solid #0e7b65',
          marginTop: "1px"
        }}
      >
        <p style={{fontSize: "22px", color: "white"}}>Account</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={currentUser?.photoURL}
            />
          </div>
          <p style={{ fontWeight: "700", fontSize: "18px" }}>
            {currentUser?.displayName}
          </p>
          <small>{currentUser?.email}</small> <br />
          <button
            onClick={logout}
            style={{
              backgroundColor: "#009788",
              padding: "10px 20px",
              borderRadius: "20px",
              fontSize: "16px",
              color: "white",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
