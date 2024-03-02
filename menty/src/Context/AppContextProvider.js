import { createContext ,useState,useMemo, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
export const AppContext=createContext();

function AppContextProvider({children}) {
  
  const [notification,setNotification]=useState([])
  const {user}=useSelector((state)=>state.profile)
  const url=process.env.REACT_APP_BACKEND_URL||"http://localhost:4000/";

      const socket=useMemo(()=>io(url),[]);
      // useMemo(()=>{socket.emit("join-room",user._id);
      // console.log("room joined",user._id)},[]);
    //   useMemo(()=>{
    //       fetchData();
    //       socket.emit("join-room",roomId);},[roomId]);
      const value={
            socket,
            notification,
            setNotification
        }

      return (
        <AppContext.Provider value={value}>
          {children}
        </AppContext.Provider>
      );
    }
export default AppContextProvider;