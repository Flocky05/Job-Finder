import { createContext, useState } from "react";

export const Context=createContext({});

const JobContext=({children})=>{
    const[jobs,setJob]=useState([]);
    console.log("JobCntext section",jobs);
    return(
        <Context.Provider value={{jobs,setJob,test:'more'}}>
            {children}
        </Context.Provider>
    );
};

export default JobContext;