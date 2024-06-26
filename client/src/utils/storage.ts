import { JwtPayload, jwtDecode } from "jwt-decode";

interface IUser extends JwtPayload {
  id: number;
  email: string;
  name: string;
  username: string;
  role: 'ADMIN' | 'USER';
}

const key = 'token';

const setToken = (token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};


const getToken = () => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

const removeToken = () => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.removeItem(key);
};

const getUser = () => {
  if (!key || typeof window === "undefined") {
    return null
  }

  const token = localStorage.getItem(key);

  if (token) {
    const user = jwtDecode(token) as IUser;
    return user;
  } else {
    return null;
  }
}

const storage = { getToken, getUser, setToken, removeToken };
export default storage;