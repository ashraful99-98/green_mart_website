import { useContext } from "react"
import { AuthContext } from "../Component/Context/AuthProvider";


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;