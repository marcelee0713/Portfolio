"use client";

//prettier-ignore
import {createContext, useState, ReactNode, useContext} from "react"
import { ThemeProvider } from "next-themes";

export const UserContext = createContext({});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return (
    <UserContext.Provider value={{}}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => useContext(UserContext);
