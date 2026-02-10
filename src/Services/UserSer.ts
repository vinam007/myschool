export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  passwordHash: Uint8Array | null;
  passwordSalt: Uint8Array | null;
};

export interface UserBasic {
  username: string;
  email: string;
  role: string;
  password: string;
};

export interface HttpCustomResponse<T> {
  statusCode: number;
  message: T;
};

export interface GenericResponse<T> {
  message: string;
  responseMessage: HttpCustomResponse<T>;
};


const GetUsers = async () => {
  const res = await fetch("https://localhost:44322/api/User/Users");
  if (!res.ok) {
    throw new Error("Error fetching users");
  }

  const data = await res.json();
  console.log(data);
  return data;
};

const SaveUser = async (user: UserBasic) => {
  const res = await fetch("https://localhost:44322/api/Auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  if (!res.ok) {
    throw new Error("Error saving user");
  }
  const data = await res.json();
  console.log(data);
  return data;
};

export default { GetUsers, SaveUser };