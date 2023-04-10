import { createContext, useEffect, useState } from "react";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext({
  ...initialState,
  logIn: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const res = await axios.get(`/api/user/info`);
        axios.defaults.headers.common["x-auth-token"] = token;

        setState({
          ...state,
          isAuthenticated: true,
          user: res.data.user,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }
  };

  // verify user on reducer state init or changes
  useEffect(() => {
    if (!state.user) {
      getUserInfo();
    }
  }, [state]);

  const logIn = async (email, password) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const body = JSON.stringify({ email, password });
    console.log("Login function called 2");
    try {
      const res = await axios.post(`http://localhost:8082/api/user/login`, body, config);
      localStorage.setItem("token", res.data.token);
      getUserInfo();
      console.log("Login function called");
    } catch (err) {
      console.error(err);
    }
  };

  const register = async (email, password) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(`/register`, body, config);
      localStorage.setItem("token", res.data.token);
      getUserInfo();
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      localStorage.removeItem("token");
      setState({
        isAuthenticated: false,
        user: null,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, logIn, register, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
