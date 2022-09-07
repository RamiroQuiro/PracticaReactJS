import { useEffect, useState } from "react";

export default function UseFetch(url, type) {
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   
        const fetchData = async () => {
            try{
                setIsLoading(true);
                const res =await fetch(url);
                setResponse(res)

                switch (type) {
                    case "text":
                        const text = await res.text();
                        setData(text);
                        setIsLoading(false);
                        break;
                        case "json":
                            const json =await res.json();
                            setData(json);
                        setIsLoading(false);
                        break;
                        default:
                }
            }catch(error){
                setIsLoading(false);
            }
        }
        fetchData();

  }, [url]);

  return [response, data, isLoading];
}