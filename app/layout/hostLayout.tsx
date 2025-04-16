import { Outlet } from "react-router";
import HostHeader from "../components/hostHeader";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/react-router";
import { rootAuthLoader } from "@clerk/react-router/ssr.server";
import type { Route } from "./+types/hostLayout";

export async function loader(request:Route.LoaderArgs) {
 return rootAuthLoader(request)
}

export default function HostLayout({loaderData}: {loaderData: Route.ComponentProps}) {
    return (
    <>
        <SignedIn>
            <HostHeader />
            <Outlet />
        </SignedIn>
        <SignedOut>
            <RedirectToSignIn />
        </SignedOut>
    </>
    )
}