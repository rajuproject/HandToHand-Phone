import { useEffect, useState } from "react"

const useAdmin = email =>{

console.log(email)
 
    
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {

        if(email){
            fetch(`https://server-side-rajuproject.vercel.app/dashboard/allUsers/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setIsAdmin(data.isAdmin);
                
            })
        }
    
    }, [email])

    return[isAdmin]
}
export default useAdmin;