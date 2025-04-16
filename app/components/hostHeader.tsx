import { Link,NavLink } from "react-router";
import { Outlet } from "react-router";
export default function Host() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }
    return (
    <header>
        <nav>

            <NavLink
                end
                to="/host" 
                style={({isActive}) => isActive ? activeStyles : undefined}>Dashboard
            </NavLink>
            <NavLink 
                to="/host/income" 
                style={({isActive}) => isActive ? activeStyles : undefined}>Income
            </NavLink>
            <NavLink 
                to="/host/pods" 
                style={({isActive}) => isActive ? activeStyles : undefined}>Pods
            </NavLink>
            <NavLink 
                to="/host/reviews" 
                style={({isActive}) => isActive ? activeStyles : undefined}>Reviews
            </NavLink>
        </nav>
    </header>
    )
}