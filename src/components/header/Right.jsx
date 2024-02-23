import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import { logoutUser } from "../../redux/apiCalls/authApiCall";
const Right = () => {
  const [dropdwon, setDropdwon] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch=useDispatch();
// logout Handler
const logoutHandler=()=>{
  setDropdwon(false);
  dispatch(logoutUser())
}

  return (
    <div className="header-right">
      {user ? (
        <>
          <div className="header-right-user-info">
            <span
              onClick={() => setDropdwon((prev) => !prev)}
              className="header-right-username"
            >
              {user?.username}
            </span>
            <img
              src={user?.profilePhoto.url}
              alt=""
              className="header-right-user-photo"
            />
            {dropdwon && (
              <div className="header-right-dropdwon">
                <Link
                  to={`/profile/${user?._id}`}
                  className="header-dropdwon-item"
                  onClick={() => setDropdwon(false)}
                >
                  <i className="bi bi-person"></i>
                  <span>Profile</span>
                </Link>
                <div onClick={logoutHandler} className="header-dropdwon-item">
                  <i className="bi bi-box-arrow-in-left"></i>
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <Link to="/login" className="header-right-link">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </Link>
          <Link to="register" className="header-right-link">
            <i className="bi bi-person-plus"></i>
            <span>Register</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default Right;
