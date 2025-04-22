import { Outlet } from "react-router";
import Header from "../components/header";
import {useNavigation} from "react-router";

export default function Layout() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        {navigation.state === "loading" && (
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        )}
      </div>
      <Outlet />
    </>
  )
}