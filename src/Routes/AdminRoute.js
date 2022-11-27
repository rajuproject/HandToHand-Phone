import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Spinner from "../Components/Spinner/Spinner/Spinner"
import { AuthContext } from "../contexts/AuthProvider"
import useAdmin from "../useAdmin/useAdmin"

const AdminRoute = ({ children }) => {

   
    
    const { user, loading } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const location = useLocation()
    console.log(loading)
    if (loading) {
      return <Spinner></Spinner>
    }
  
    if (user && isAdmin) {
      return children
    }
    return <Navigate to='/' state={{ from: location }} replace />
  }
  
  export default AdminRoute