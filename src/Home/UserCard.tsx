import "../CSS/UserCard.css";
import GetUsers, { GenericResponse, User } from "../Services/UserSer";
import avatar  from "../../src/imgs/blankProfile.png";
type UserCardProps={
  user:User;
  kumar:number;
  PushData: (user:User)=>void;
  myClickChild: (strin:string)=>void;
}

function handleClick() {
  console.log("UserCard clicked!");
}

const UserCard = ({ user 
  ,PushData,myClickChild
}: UserCardProps) => {
  return (
    <div className="user-card" onClick={()=>{myClickChild("UserCard clicked!")}} >
      <img src={avatar} alt={user.username} className="avatar" />

      <div className="info">
        <h3>{user.username}</h3>
        <p className="email">{user.email}</p>
        <p className="role">{user.role}</p>

        <button onClick={()=>{PushData(user)}} >View Profile</button>
      </div>
    </div>
  );
}
export default   UserCard;
