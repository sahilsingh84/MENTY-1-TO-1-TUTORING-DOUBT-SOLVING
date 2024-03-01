import { Slide } from "react-awesome-reveal";
function Secction3Card({img,text1,text2,idx}){
    return(
        
        <div className="w-full flex flex-col gap-6 lg:flex-row justify-around items-center p-6 ">
            <div className="w-full lg:w-1/2">
                <div className="flex items-start gap-10">
                    <div className="p-8 aspect-square overflow-y-hidden rounded-full flex justify-center items-center   bg-[#1356c5] text-white font-bold text-4xl">{idx}</div>
                     <div>
                     <p className="text-[50px] font-bold font-inter text-[#1356c5]">{text1}</p>
                     <div className=" overflow-hidden text-[40px] p-2 font-bold leading-10 mt-5">{text2}</div>
                     </div>
                </div>    
            </div>
            <Slide direction="right">
                <div className="rounded-2xl">
                    <img src={img} className="w-[600px] h-[350px] rounded-2xl shadow-lg  shadow-gray-500/90"></img>
                </div>
            </Slide>
        </div>
       
    )
};
export default Secction3Card;