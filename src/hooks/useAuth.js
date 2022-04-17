import React, { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const authContext = createContext();

export function useAuth() {
  const [authed, setAuthed] = useState(false);

  const login = (e) => {
    login();
  };

  const logout = () => {
    return new Promise(() => {
      setAuthed(false);
    });
  };

  return { authed, login, logout };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}

export function RequireAuth({ children }) {
  const token = useSelector((state) => state.persist.user.token);
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

export function RedirectHome({ children }) {
  const token = useSelector((state) => state.persist.user.token);
  const location = useLocation();

  return children;
  // return token ? (
  //   <Navigate to="/" replace state={{ path: location.pathname }} />
  // ) : (
  //   children
  // );
}
