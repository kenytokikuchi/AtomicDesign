import React, { createContext, useState } from "react";

// グローバル変数を作成する→createContext内は指定した変数を使用できる
export const UserContext = createContext({});

export const UserProvider = props => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
