import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [firstRegister, setFirstRegister] = useState(false);
  const [chosenRole, setChosenRole] = useState("");

  //   useEffect(() => {
  //     const loadUser = async () => {
  //       const storedUser = await AsyncStorage.getItem("user");
  //       if (storedUser) {
  //         setUser(JSON.parse(storedUser));
  //       }
  //     };
  //     loadUser();
  //   }, []);

  //   const signIn = async (userData) => {
  //     setUser(userData);
  //     await AsyncStorage.setItem("user", JSON.stringify(userData));
  //   };

  //   const signOut = async () => {
  //     setUser(null);
  //     await AsyncStorage.removeItem("user");
  //   };

  return (
    <AuthContext.Provider
      value={{
        user,
        // signIn,
        // signOut,
        isLogin,
        setIsLogin,
        firstRegister,
        setFirstRegister,
        chosenRole,
        setChosenRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
