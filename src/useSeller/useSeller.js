import { useEffect, useState } from "react"

const useSeller = email =>{


    console.log(email)
    
    const [isSeller, setIsSeller] = useState(false);


    useEffect(() => {

        if(email){
            fetch(`https://server-side-rajuproject.vercel.app/allSeller/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setIsSeller(data.isSeller);
                
            })
        }
    
    }, [email])

    return[isSeller]
}
export default useSeller;