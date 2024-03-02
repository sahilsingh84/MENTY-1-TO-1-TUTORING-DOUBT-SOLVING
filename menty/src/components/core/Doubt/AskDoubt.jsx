import {useState} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {toast} from 'react-hot-toast';
function AskDoubt(){
    const {token}=useSelector((state)=>state.auth);
   const [imageFile, setImageFile] = useState(null);
   const [description,setDescription]=useState("");
  const [previewSource, setPreviewSource] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if(file){
      setImageFile(file)
      previewFile(file)
    }
  };
  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  async function submitDoubt(e){
    e.preventDefault();
    const formData=new FormData();
    formData.append("file",imageFile);
    formData.append("description",description);
    console.log(process.env.REACT_APP_BASE_URL);
    const toastId=toast.loading("Loading...");
    try{
        const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/doubt/create-doubt`,formData,
           { 
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':`Bearer ${token}`,
              }
            }
            );
        console.log(response);
        toast.success("Doubt Created Successfully");
    }catch(err){
        console.log(err);
    }
    toast.dismiss(toastId);
  }

    return(
        <div className=" mx-auto customBoxShadow min-h-screen bg-gray-500 flex justify-center items-center">
            <div className='flex flex-col gap-5'> 
                <p>Ask Your Doubt</p>
                <form onSubmit={submitDoubt} className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <label>Get Image of your Doubt</label>
                        <input type="file" onChange={handleFileChange}></input>
                    </div>
                    <img src={previewSource} alt="Doubt Image"></img>
                    <div className='flex flex-col gap-2'>
                        <label>Description</label>
                        <input className="w-[200px] form-style" type="text" placeholder='Type Description' onChange={(e)=>{setDescription(e.target.value)}}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
};
export default AskDoubt;