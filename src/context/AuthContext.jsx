import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { baseURL } from "../constants/constants";
import { getRequest, postRequest } from "../services";
import { convertRole } from "../utils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isShowLogo, setIsShowLogo] = useState(true);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [firstRegister, setFirstRegister] = useState(false);
  const [chosenRole, setChosenRole] = useState("");

  const loadUser = async () => {
    try {
      const storedToken = await SecureStore.getItem("token");

      if (storedToken) {
        const userData = await getUserProfile(storedToken);

        if (userData) {
          setChosenRole(convertRole(userData.roleId));
          setToken(storedToken);
          setUser(userData);
          return userData;
        }

        return null;
      } else {
        console.log("Token Not Valid");
        return null;
      }
    } catch (error) {
      console.error("Failed to load user", error);
      return null;
    }
  };

  const getUserProfile = async (accessToken) => {
    try {
      const res = await getRequest(`${baseURL}/User/get-profile`, accessToken);

      if (res?.statusCode >= 200 && res?.statusCode < 300) {
        const isValidRole = checkUserRole(convertRole(res.data.roleId));

        if (isValidRole) {
          setUser(res.data);
          await SecureStore.setItem("user", JSON.stringify(res.data));
          return res.data;
        } else {
          return null;
        }
      } else {
        console.log("Get User Fail", res);
      }

      return null;
    } catch (error) {
      console.error("Error when get user profile: ", error);
    }
  };

  const login = async (body) => {
    try {
      const res = await postRequest(
        `${baseURL}/Authentication/login`,
        body,
        null
      );

      if (res?.statusCode >= 200 && res?.statusCode < 300) {
        const userData = await getUserProfile(res.data);

        if (userData) {
          setToken(res.data);
          await SecureStore.setItem("token", res.data);
          return res.data;
        } else {
          return null;
        }
      } else {
        console.log("Login Fail");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const checkUserRole = (userRole) => {
    if (userRole !== chosenRole) {
      return false;
    }

    return true;
  };

  const signOut = async () => {
    setUser(null);
    setToken(null);
    setIsLogin(false);
    setFirstRegister(false);
    setChosenRole("");
    await SecureStore.deleteItemAsync("user");
    await SecureStore.deleteItemAsync("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signOut,
        isLogin,
        setIsLogin,
        firstRegister,
        setFirstRegister,
        chosenRole,
        setChosenRole,
        token,
        setToken,
        isShowLogo,
        setIsShowLogo,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
