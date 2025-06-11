import React, { useEffect, useState } from 'react'

 function useFetch() {
    
   const [post ,setPost] = useState();
   async function useFetch1(){
    const response  = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setPost(data);
   }

   useEffect(()=>{
    useFetch1();
   },[])
   return (
    <div>
        {post}
    </div>
   )
  
}

export default useFetch