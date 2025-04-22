import { SignedIn } from "@clerk/react-router";
import { UserButton } from "@clerk/react-router";
import { NavLink,Link } from "react-router";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}




export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <header className="w-full h-24 bg-base-200">
        <nav className="flex items-center justify-between gap-4 py-8 px-4">
          <div>
            <Link className="text-2xl font-bold uppercase" to="/">#Podspace</Link>
          </div>
          <div className="flex items-center justify-center gap-3">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <NavLink 
              to="host"
              style={({isActive}) => isActive ? activeStyle : undefined}
            >Host
            </NavLink>
            <NavLink 
              to="about"
              style={({isActive}) => isActive ? activeStyle : undefined}
            >About
            </NavLink>
            <NavLink 
              to="/pods"
              style={({isActive}) => isActive ? activeStyle : undefined}
            >Pods
            </NavLink>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </nav>
      </header>
    )
}