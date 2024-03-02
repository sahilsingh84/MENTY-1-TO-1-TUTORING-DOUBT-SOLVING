import { createContext ,useState,useMemo, useEffect} from 'react';
import { io } from 'socket.io-client';
export const AppContext=createContext();
function AppContextProvider({children}) {
const url=process.env.REACT_APP_BACKEND_URL||"http://localhost:4000/";

      const socket=useMemo(()=>io(url),[]);

    //   useMemo(()=>{
    //       fetchData();
    //       socket.emit("join-room",roomId);},[roomId]);
      const value={
            socket
        }

      return (
        <AppContext.Provider value={value}>
          {children}
        </AppContext.Provider>
      );
    }
export default AppContextProvider;