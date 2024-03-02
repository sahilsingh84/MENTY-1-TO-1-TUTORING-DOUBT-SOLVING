import React, { useEffect, useState } from 'react'
import {gettingDoubtImage} from "../services/operations/showingImageFromDoubt";
import { useNavigate, useParams } from 'react-router';

const AttendQuestionPage = () => {
    const [doubtDetails,setDoubtDetails]=useState(null);
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        gettingDoubtImage(params,setDoubtDetails);
    },[])

  return(
     <div>
        {
            doubtDetails?(<div className='spinner'></div>):( <div>
                <div><img src={doubtDetails.image}></img></div>
                <div>
                    <button>Take Question</button>
                    <button onClick={()=>{navigate("/")}}>Cancel</button>
                </div>
            </div>)
        }
     </div>    
  )
}

export default AttendQuestionPage
