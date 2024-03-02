import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const LiveStream = () => {
    const {user}=useSelector((state)=>state.profile);

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
            user.firstName
        );
        const zp=ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container:element,
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showRoomTimer:true,
            onLeaveRoom:()=>{navigate("/")},
            whiteboardConfig: {
              showAddImageButton: true, // It's set to false by default. To use this feature, activate the File Sharing feature, and then import the plugin. Otherwise, this prompt will occur: "Failed to add image, this feature is not supported."
              showCreateAndCloseButton: true // Whether to display the button that is used to create/turn off the whiteboard. Displayed by default.
            },
            screenSharingConfig: {
              width: 1200,
              height: 800,
    
            } 

        })
    }

  return (
    <div className='zoomCall'>
      <div ref={myMeeting} className='meetingDiv'/>
    </div>
  )
}

export default LiveStream
