import React from "react";
import { Button } from "reactstrap";
import { deleteUser } from "../../js/actions/gettingActions";
import { useDispatch } from "react-redux";

function ProfileCard({ user }) {
  // delete user
  const dispatch = useDispatch();
  const deleteUserFunc = () => {
    console.log(user._id);
    const formData = { userId: user._id };
    dispatch(deleteUser(formData));
  };
  return (
    <div>
      <div className="col-md-4 animated fadeIn">
        <div
          className="card"
          style={{
            width: "200px",
            height: '280px',
            boxShadow: "0 0 2px 2px rgba(0,0,0,.2)",
            marginTop: "30px",
          }}
        >
          <div className="card-body">
            <div className="avatar">
              <img
                src="https://lh3.googleusercontent.com/proxy/uX8QQemoV3GFrKwC61haw75WuI2K_0cGa__zv1ukeG-Me1Ht0TIsYbAwMKr7fMpxjhhc1zB9DzNrPkIxHRWGwTk0HEGXfZKVweImHovT81eIbmX-N0I-xM2Eb_La"
                className="card-img-top"
                alt="profile photo"
              />
            </div>
            <h5 className="card-title"> {`${user.name} ${user.lastName}`}</h5>
            <p className="card-text">{user.email}</p>
          </div>
          <Button color="danger" onClick={deleteUserFunc}>
            Delete User
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
