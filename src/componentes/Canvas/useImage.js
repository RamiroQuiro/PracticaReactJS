import { useState } from "react";
import { useEffect } from "react";





export default function useImage(fil) {

    const [previewURL, setPreviewURL] = useState(false)
    const [file, setFile] = useState(false)
    setFile(fil)
    
    
    useEffect(() => {
        if (!fil) {
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewURL(reader.result);
        };
        reader.readAsDataURL(file);
    }, [fil]);





  return [
   previewURL,
   setFile(fil)
  ]
}
