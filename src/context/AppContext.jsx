import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider =(props)=>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)

  const getUserData = async () => { 
    try {
        const { data } = await axios.post(backendUrl + '/api/user/data',{}, { withCredentials: true });
        console.log('Fetched User Data:', data);

        if (data.success) {
            setUserData(data.userData);
            console.log(userData)
        } else {
            toast.error(data.message || "Failed to fetch user data");
        }
    } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to fetch user data");
    }
}


    const value= {
        backendUrl, 
        isLoggedIn,setIsLoggedIn,
        userData, setUserData,
        getUserData
    }

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    );
}
