import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Spinner from "../Components/Spinner/Spinner/Spinner"
import { AuthContext } from "../contexts/AuthProvider"
import useSeller from "../useSeller/useSeller"



const SellerRoute = ({ children }) => {

   
    
    const { user, loading } = useContext(AuthContext)


    const [isSeller] = useSeller(user.email)
    const location = useLocation()
    console.log(loading)
    if (loading) {
      return <Spinner></Spinner>
    }
  
    if (user && isSeller) {
      return children
    }
    return <Navigate to='/' state={{ from: location }} replace />
  }
  
  export default SellerRoute