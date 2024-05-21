import authAPI from "../api/authApi";

const authUtils = {
    isAuthenticated: async () => {
        const token = localStorage.getItem('token');
        if(!token)
            return false;
        try{
            const res =  await authAPI.verifyToken()
            return res.user;
        } catch{
            return false;
        } 
    }
}

export default authUtils;