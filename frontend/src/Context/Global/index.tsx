import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../../Services';

interface IGlobalContextData{
  token: string | null;
  setToken(data: string | null): void;
}

interface Props{
  children: ReactNode;
}

const GlobalContext = createContext<IGlobalContextData>({} as IGlobalContextData);

const GlobalProvider:React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('@CRUDusers:token');
    return token;
  });

  useEffect(() => {
    if(token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
    };
  }, [token])

  return (
    <GlobalContext.Provider value={{token,setToken}}>
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobal(): IGlobalContextData {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within an GlobalProvider');
  }

  return context;
}

export { GlobalProvider, useGlobal };