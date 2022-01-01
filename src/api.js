const API_URL=process.env.REACT_APP_API_URL;

export const getImages=async (location,next_cursor)=>{
    try{
        const params=new URLSearchParams();
        params.append('prefix',location)
        if(next_cursor){
            params.append('next_cursor',next_cursor)
        }
        const response=await fetch(`${API_URL}/api/photo?${params}`);
        const responseJSON=await  response.json()
        return responseJSON
    }catch(e){
        return {error:"server down"}
    }
    
}
export const getImagesWithTag=async (location,tag)=>{
    try{
       const params=new URLSearchParams();
        params.append('prefix',location)
        params.append('userTag',tag)
        const response=await fetch(`${API_URL}/api/photoWithTag?${params}`);
        const responseJSON=await  response.json()
        return responseJSON
    }catch(e){
        return {error:"server down"}
    }
}

export const getTags=async(location)=>{
    try{
        const params=new URLSearchParams();
        params.append('prefix',location)
        
        const response=await fetch(`${API_URL}/api/tags?${params}`);
        const responseJSON=await  response.json()
        return responseJSON
    }catch(e){
        return {error:"server down"}
    }
}

