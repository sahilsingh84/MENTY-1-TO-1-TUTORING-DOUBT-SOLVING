import { useForm } from "react-hook-form"
import { useSelector } from "react-redux";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {instructorInfo} from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

// import useSelector
function InstructorInfo(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }, } = useForm();
    const {userId}=useSelector((state)=>state.auth);
    function submitData(data){
        const std = [];
  
    for (const key in data) {
        if(key=="subjectSpecification")
            continue;
        if (data.hasOwnProperty(key) && data[key]) {
        std.push(data[key]);
        }
    }
    try{
        dispatch(instructorInfo(userId,data.subjectSpecification,std,navigate));
    }catch(err){
        console.log(err);
    }
    }
    return(
        <div className="customBoxShadow min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(submitData)} className="w-[400px] subCustomBoxShadow flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                    <label htmlFor="Standard" className="lable-style">Subject Specification</label>
                    <input  type="text"  name="Standard"  id="Standard" placeholder="Enter your subject specification" className="form-style"  {...register("subjectSpecification", { required: true })} />           
                    {errors.std && ( <span className="-mt-1 text-[12px] text-yellow-100">  Please enter your standard. </span> )}
                    </div>
                    <div className="grid grid-cols-2 ">
                    <div className="flex flex-row gap-2">
                    <label htmlFor="ninth" className="label-style">9</label>
                    <input type="checkbox" name="std"  id="ninth" value="9" {...register("9")}></input>
                    </div>
                    <div className="flex flex-row gap-2">
                    <label htmlFor="tenth" className="label-style">10</label>
                    <input type="checkbox" name="std"  id="tenth" value="10" {...register("10")}></input>
                    </div>
                    <div className="flex flex-row  gap-2">
                    <label htmlFor="eleventh" className="label-style">11</label>
                    <input type="checkbox" name="std"  id="eleventh" value="11" {...register("11")}></input>
                    </div>
                    <div className="flex flex-row gap-2">
                    <label htmlFor="eleventh" className="label-style">12</label>
                    <input type="checkbox" name="std"  id="eleventh" value="12" {...register("12")}></input>
                    </div>
                    <div className="flex flex-row  gap-2">
                    <label htmlFor="eleventh" className="label-style">First Year</label>
                    <input type="checkbox" name="std"  id="eleventh" value="fy" {...register("fy")}></input>
                    </div>
                    <div className="flex flex-row gap-2">
                    <label htmlFor="eleventh" className="label-style">Second Year</label>
                    <input type="checkbox" name="std"  id="eleventh" value="sy" {...register("sy")}></input>
                    </div>
                    <div className="flex flex-row gap-2">
                    <label htmlFor="eleventh" className="label-style">Third Year</label>
                    <input type="checkbox" name="std"  id="eleventh" value="ty" {...register("ty")}></input>
                    </div>
                    <div className="flex flex-row gap-2">
                    <label htmlFor="eleventh" className="label-style">Fourth Year</label>
                    <input type="checkbox" name="std"  id="eleventh" value="fry" {...register("fry")}></input>
                    </div>
                    </div>
                    <button  className="commonButton" type="submit">Submit Details</button>
            </form>

        </div>
    )
};
export default InstructorInfo;