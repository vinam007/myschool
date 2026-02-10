import React, { useCallback, useEffect } from "react";

export const UserCB = () => {

    const selectUser = useCallback((id:any) => {
    console.log("Selected", id);
  },[]);
    const userData = [{ Id: 1, Name: "John" }, { Id: 2, Name: "Jane" }, { Id: 3, Name: "Doe" }];
    return (<div><ul>{userData.map((user) => <Row1 onSelect={selectUser} user={user} key={user.Id} ></Row1>)}</ul></div>);
}

 

export const Row1 = React.memo(({user, onSelect}: any) => {
     console.log("Row render:", user.Id);
    useEffect(() => {
        // console.log("User data in Row1:", user);
    }, [user]);
    return (<li  onClick={() => onSelect(user.id)}>{user?.Name}-----{user?.Id}</li>);
});


