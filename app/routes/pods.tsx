import { Studio } from "../types/studio";
import { z } from "zod";
import type { Route } from "./+types/pods";

export async function clientLoader({request}: Route.ClientLoaderArgs) {
    console.log("clientLoader")
}

export default function Pods({loaderData}: {loaderData: Route.ComponentProps}) {
    return (
       <div>
        <h1>Pods listing here</h1>
       </div>
    );
}