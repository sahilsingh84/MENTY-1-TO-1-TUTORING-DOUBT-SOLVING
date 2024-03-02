import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useNavigate, useParams } from 'react-router-dom'

const LiveStream = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const myMeeting=async (element)=>{
        const appId=1172215896;
        const serverSecret="d6648538db2eaaedfd3e4bbaa438b083";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            id,
            Date.now().toString(),
            "Sahil"
        );
        const zp=ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container:element,
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showRoomTimer:true,
            onLeaveRoom:()=>{navigate("/")}

        })
    }

  return (
    <div className='zoomCall'>
      <div ref={myMeeting} className='meetingDiv'/>
    </div>
  )
}

export default LiveStream
