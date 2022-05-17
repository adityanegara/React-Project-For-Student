// TODO: answer here
import { useState } from "react"
import { createPost } from "../api/post";


export default function UploadForm({onSubmit}) {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  
  const handleSubmitAPI = async (e) =>{
    e.preventDefault();
    const formData = new FormData()
    formData.append("file", file)
    formData.append("content", caption)
    const response = await createPost(caption, file)
    const {image, content} = await response.data
    onSubmit({image, content})
  }

  const handleChangeCaption = (value) =>{
    setCaption(value);
  }

  const handleChangeFile = (file) =>{
    setFile(file);
  }
  

  return(
      <form aria-label="Upload Form" onSubmit={(e)=>{handleSubmitAPI(e)}}>
        <input type='text'onChange={(e)=>{handleChangeCaption(e.target.value)}} aria-label="Caption Input"/>
        <input type='file' onChange={(e)=>{handleChangeFile(e.target.files[0])}} accept="image/png, image/jpg, image/gif" aria-label="Image Input"/>
        <button type="submit" aria-label="Submit Button">Submit</button>
      </form>
  )
}