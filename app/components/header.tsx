import { SignedIn } from "@clerk/react-router";
import { UserButton } from "@clerk/react-router";
import { NavLink,Link } from "react-router";
const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

export default function Header() {
  return (
       <header>
            <nav className="flex items-center justify-between gap-4 py-8 px-4 bg-indigo-500">
            <div>
                <Link to="/">#Podspace</Link>
            </div>
            <div className="flex items-center justify-center gap-4">
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
                    to="pods"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >Pods
                </NavLink>
            </div>
            </nav>
      </header>
  )
}