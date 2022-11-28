import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false);

    const [isSeller, setIsSeller] = useState(false)
    useEffect(() => {

        if(email){
            fetch(`http://localhost:5000/dashboard/allUsers/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setIsAdmin(data.isAdmin);
                setIsSeller(data.isSeller)
            })
        }
    
    }, [email])

    return[isAdmin, isSeller]
}
export default useAdmin;