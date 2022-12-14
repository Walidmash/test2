import React, { useState, useContext } from "react";
import "../../style/Userpage.css";
import Axios from "axios";
import { UserContext } from "../UserContext";

function UserPage() {
    const {user, setUser} = useContext(UserContext);
    const emailEdit = user.Email;
    const AdminEdit = user.Admin;
    const [usernameEdit, setUsernameEdit] = useState(user.Username);
    const [imageUpload, _] = useState(null);

    const update = (emailEdit) => {
        Axios.put('http://localhost:3001/update', {
            Email: emailEdit,
            Username: usernameEdit,
        }).then(()=> {
            const userObj = {Email: emailEdit, Username: usernameEdit, Foto: imageUpload, Admin: AdminEdit};
            setUser(userObj);
            console.log(user);
        }); 
    };
/*
    const upload = (emailEdit) => {
        Axios.put('http://localhost:3001/upload', {
            Email: emailEdit,
            Foto: imageUpload,
        }).then((response)=> {
            console.log(response.config);
        });
    };

    <input type="file" name= "Foto" className="btn btn-light" onChange={(event) => {setImageUpload(event.target.files[0])}} />
*/
console.log(user)
    return (
        <div className="container my-5">
            <h2 className="text-center">Your Page</h2>
            <div className="user-card d-flex flex-row">
                <div className="user-card-left">
                    <div className="user-card-in-left d-flex flex-column align-items-center">
                        <img src={user.Foto === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU" : user[0].Foto} className="mb-3" />
                        <h6>{user.Username}</h6>
                        <form method="POST" action="/upload" encType="multipart/form-data" className="text-center my-3">
                            <button type="submit" className="btn btn-light">Change Image</button>
                        </form>
                    </div>
                </div>
                <div className="user-card-info">
                    <div className="user-card-in">
                        <h6 className="b-b-default ">Information</h6>
                        <div className="user-info">
                            <p className="mt-3">Name</p>
                            <div className="mb-4 d-flex flex-row justify-content-between b-b-default">
                                <input className="edit-user-info" placeholder={user.Username} onChange={(e) => {setUsernameEdit(e.target.value);}} ></input>
                                <button type="button" className="btn btn-primary" onClick={()=>update(emailEdit)}>Edit</button>
                            </div>
                            <p>Email</p>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="edit-user-info">{user.Email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;



