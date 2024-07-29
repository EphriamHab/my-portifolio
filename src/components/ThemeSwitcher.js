import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";



const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(()=>{
      setMounted(true)
    },[]);
    if(!mounted) return null;

    const handleThemes = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return(
      <button onClick={handleThemes}>
      {theme === "light" ? (
        <FaMoon className="w-6 h-6 text-gray-600" />
      ) : (
        <MdSunny className="w-6 h-6 text-gray-100" />
      )}
    </button>
    )

}

export default ThemeSwitcher;