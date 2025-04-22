import { getStudios, searchStudios } from "api/api";
import type { Route } from "./+types/pods";
import { Studio } from "../types/studio";
import { z } from "zod";

type PodsLoaderData = {
    studios: z.infer<typeof Studio>[];
};

export async function clientLoader({request,params}: Route.ClientLoaderArgs) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    if(q){
        const studios = await searchStudios(q);
        return { studios };
    }
    const studios = await getStudios();
    return { studios };
}

export default function Pods({loaderData}: {loaderData: PodsLoaderData}) {
    console.log(loaderData);
    const studioElem = loaderData.studios.map((studio) => {
        return (
            <div key={studio.id} className="flex border-2 border-gray-300 rounded-md p-4">
                <img src={studio.heroImageUrl} alt={studio.name} className="w-1/3 h-1/3 rounded-md" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">{studio.name}</h1>
                    <p className="text-gray-500">{studio.description}</p>
                    {studio.type}
                </div>
            </div>
        );
    });
    return (
       <div>
        <h1>Pods listing here</h1>
        {studioElem}
       </div>
    );
}