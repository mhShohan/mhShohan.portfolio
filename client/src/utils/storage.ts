import { JwtPayload, jwtDecode } from "jwt-decode";

interface IUser extends JwtPayload {
  id: number;
  email: string;
  name: string;
  username: string;
  role: 'ADMIN' | 'USER';
}

const key = 'token';

/**
 * set token in local storage
 * @param token 
 * @returns 
 */
const setToken = (token: string) => {
  if (!key || typeof window === "undefined") {
    return;
  }

  if (!token) return;
  return localStorage.setItem(key, token);
};

/**
 * get token from local storage
 * @returns token from local storage
 */
const getToken = () => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

/**
 * remove token from local storage
 * @returns 
 */
const removeToken = () => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.removeItem(key);
};

/**
 * get user from token
 * @returns user
 */
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