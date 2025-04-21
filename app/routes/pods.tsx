import { Studio } from "../types/studio";
import { z } from "zod";
import type { Route } from "./+types/pods";



export default function Pods({loaderData}: {loaderData: Route.ComponentProps}) {

    return (
       <div>
        <h1>Pods</h1>
       </div>
    );
}