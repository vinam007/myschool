import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UserService, { GenericResponse, User } from "../Services/UserSer";
import UserCard from "./UserCard";
import "../CSS/UserCard.css";
import UserDetails from "./UserDetails";
import DebouseFn from "../Debounse/debouceEx";
const Users = () => {

  const [users, setUsers] = useState<GenericResponse<User[]> | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);


  const { isLoading, error, data } = useQuery<GenericResponse<User[]>, Error>({
    queryKey: ["users"],
    queryFn: UserService.GetUsers,
    enabled: true,
    staleTime: 500 * 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,

  });

  const CallService = async () => {
    try {
      const UsersData = await UserService.GetUsers();
      setUsers(UsersData);
    } catch (err) {
      console.error(err);
    }
  }
  const Row = ({ index, style, data }: any) => {
    return <div style={style}>Row {data[index]}</div>;
  };
  const CollectFromChild = (user: User) => {
    setSelectedUser(user);
  }
  if (isLoading) return <p><button onClick={CallService}>Show Data in Console</button> Loading...</p>;
  if (error instanceof Error) return <p><button onClick={CallService}>Show Data in Console</button>{error.message}</p>;
  const items = Array.from({ length: 1000 }, (_, i) => i);
  const myClickParent = (data1: User) => {
    console.log("Users data:", data1);
  };
  return (
    <div>
      <h1>Users List({data?.responseMessage.message.length})</h1>

      <div>

        <div style={{ float: "right" }}>
          <UserDetails data={selectedUser}  />
        </div>


        <div className="cards-container" >
          {data && data.responseMessage.message.map((user1: User) => (
            <><UserCard  myClickChild={()=>{CollectFromChild(user1)}}     PushData={() => { CollectFromChild(user1) }} user={user1} kumar={2} /></>
          ))}

          <button onClick={CallService}>Show Data in Console</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
