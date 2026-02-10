import { useEffect, useState } from "react";
import "./../CSS/UserDetails.css";
import UserService, { GenericResponse, User, UserBasic } from "../Services/UserSer";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import InputValidator from "../Customhook/Validator";
const UserDetails = (UserDetails: { data: User | null }) => {
  const username = InputValidator("","text");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [Password, setPassword] = useState("Active");
  const queryClient = useQueryClient();
  const mymute = useMutation({
    mutationFn: (newUser: UserBasic) => {
      return UserService.SaveUser(newUser);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log("User saved successfully:", data);
    },
    onError: (error) => {
      console.error("Error saving user:", error);
    }

  });


  useEffect(() => {
    console.log(username.value);
  }, [username.value]);



  const SaveAction = (e: any) => {
    if (!name || !email || !role || !Password) {
      alert("Please fill all fields");
      return;
    }
    mymute.mutate({ username: name, email: email, role: role, password: Password });
  }
  return (<>

    <div className="user-details-card">

      <h3>User Details</h3>
      {name && <p>Name: {name}</p>}
      <div className="field">
        <p>{username.value} {username.reset}  </p>
        
        <input   {...username} />
        <button onClick={username.reset}>Reset</button> 
        <label>Name</label>
        <input type="text" value={UserDetails.data?.username} onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
      </div>

      <div className="field">
        {email && <p>Email: {email}</p>}
        <label>Email</label>
        <input type="email" value={UserDetails.data?.email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
      </div>

      <div className="field">
        {role && <p>Password: {role}</p>}
        <label>Password</label>
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password" />
      </div>

      <div className="field">
        <label>Role</label>
        <p>Role: {role}</p>
        <select onChange={(e) => { setRole(e.target.value) }} value={UserDetails.data?.role} >
          <option>Admin</option>
          <option>IT</option>
        </select>
      </div>

      <div className="actions">
        <button className="primary" onClick={SaveAction} >Save</button>
        <button className="secondary">Cancel</button>
      </div>
    </div>

  </>);
}

export default UserDetails;