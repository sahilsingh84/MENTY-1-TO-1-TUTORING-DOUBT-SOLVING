import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { Messaging, messaging } from './Firebase';
import { getToken } from "firebase/messaging";

const TakingPermission = () => {
    
    async function requestPermission(){
        const permission=await Notification.requestPermission();
        if(permission==='granted'){
            const token=await getToken(messaging,{vapidKey:"BLcKOWZ2YUu6cjCKRsGcyl2Yhuj6c-7eLq9pG1SaJipLnKvVPCQCmGzEOI7CuzE5oOWVc0Q8HsA2KSj_jyP-b2k"});
            console.log("Token gen: ", token)
        }
        else if(permission==="denied"){
            toast.error("You denied for the permission")
        }
    }

    useEffect(()=>{
        requestPermission();
    },[])


  return (
    <div>
      
    </div>
  )
}

export default TakingPermission
