'use client'
import { ThemeProvider } from "next-themes"
import React, { useState, useEffect } from "react"

const Providers = ({ children }) => {  
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[]);
    
    if(!mounted) return <>{children}</>;
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
 }

 export default Providers;