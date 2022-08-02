import toast from "react-hot-toast";

function getrandom() {
    const random_string =
      Math.random().toString(32).substring(2, 4) +
      Math.random().toString(32).substring(2, 4);
    return random_string;
  }

export function add (state, action) {
  const url=action.data.url;
  const iniciales=action.data.iniciales;
  const personalizar=action.data.personalizar;
     const shortUrl= getrandom();
  const temp =[...state?.items]
  if(iniciales&&personalizar){
    const hayPersonalizacion=temp.find(item=>item.shortUrl===iniciales+"-"+personalizar);
    if(hayPersonalizacion){
        toast.error('Ya existe una url con esas iniciales y personalizacion');
        return { items:[...temp]}
    }
    const newItems={
    url:url.toString(),
    views:0,
    shortUrl:iniciales+"-"+personalizar,
  }
  temp.unshift(newItems)
  localStorage.setItem('urls',JSON.stringify(temp))
  return { items:[...temp]}
}  else if(!iniciales&&personalizar){
    const newItems={
      url:url.toString(),
      views:0,
      shortUrl:personalizar,
    }
    temp.unshift(newItems)
    localStorage.setItem('urls',JSON.stringify(temp))
    return { items:[...temp]}
} else if(iniciales&&!personalizar){
    const newItems={
      url:url.toString(),
      views:0,
      shortUrl:iniciales+"-"+shortUrl,
    }
      temp.unshift(newItems)
  localStorage.setItem('urls',JSON.stringify(temp))
  return { items:[...temp]}
}else if(!iniciales&&!personalizar){
    const newItems={
      url:url.toString(),
      views:0,
      shortUrl:shortUrl,
    }
    temp.unshift(newItems)
    localStorage.setItem('urls',JSON.stringify(temp))
    return { items:[...temp]}
}



}

export function load(state,action){
const data=localStorage.getItem('urls');
if(data){ const temp=JSON.parse(data)
return {items:[...temp]}
}
}

export function addView(state,action){
    const data=localStorage.getItem('urls');
    if(data){
        const temp=JSON.parse(data)
        const item=temp.find(item=>item.shortUrl===action.data);
        item.views++
        localStorage.setItem('urls',JSON.stringify(temp))
        return {items:[...temp]}
    }
}

export const delet =(state,action)=>{
    const data=localStorage.getItem('urls');
    if(data){
        const temp=JSON.parse(data)   
        const item=temp.find(item=>item.shortUrl===action.data);
        console.log(temp.findIndex(item=>item.shortUrl===action.data),"y",temp.indexOf(item))
        temp.splice(temp.indexOf(item),1)
        localStorage.setItem('urls',JSON.stringify(temp))
        return {items:[...temp]}
     

    }
}