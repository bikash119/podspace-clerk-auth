import { getStudios, getStudioTypes, searchStudiosByQuery, searchStudiosByType, searchStudiosByTypeAndQuery } from "api/api";
import type { Route } from "./+types/pods";
import { Studio, StudioType } from "../types/studio";
import { z } from "zod";
import { useEffect, useState } from "react";
import {Form, useSearchParams, useNavigation, useSubmit} from "react-router";

type PodsLoaderData = {
    studios: z.infer<typeof Studio>[];
    types: z.infer<typeof StudioType>[];
    q: string;
    error?: string;
};

export async function clientLoader({request,params}: Route.ClientLoaderArgs) {
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
    const q = url.searchParams.get("q");
    let studios: z.infer<typeof Studio>[] = [];

    if(type && q){
        studios = await searchStudiosByTypeAndQuery(type,q);
    }else if(type){
        studios = await searchStudiosByType(type);
    }else if(q){
        studios = await searchStudiosByQuery(q);
    }else {
        studios = await getStudios();
    }
    const parsedStudios = studios.map((studio: z.infer<typeof Studio>) => {
        return Studio.parse(studio);
    });
    const studioTypes = await getStudioTypes();
    return { studios: parsedStudios, types:studioTypes,q:url.searchParams.get("q") };
}

export default function Pods({loaderData}: {loaderData: PodsLoaderData}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigation = useNavigation();
    // the query now needs to be kept in state
    const {studios,types,q} = loaderData;
    const [query, setQuery] = useState(q || "");
    const submit = useSubmit();
    useEffect(() => {
        setQuery(q || "");
    }, [q]);
    const handleFilter = (type: string,value:string) => {
        setSearchParams(prevParams => {
            if(value){
                prevParams.set(type,value);
            }else{
                prevParams.delete(type);
            }
            return prevParams;
        });
    }
    const searching = navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "q",
        );
    const studioElem = studios.map((studio: z.infer<typeof Studio>) => {
        return (
            <div key={studio.id} className="flex border-2 border-gray-300 rounded-md p-4">
                <img src={studio.heroImageUrl} alt={studio.name} className="w-1/3 h-1/3 rounded-md" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">{studio.name}</h1>
                    <p className="text-gray-500">{studio.description}</p>
                    <div className="flex gap-2">
                        {(studio.type as z.infer<typeof StudioType>[]).map((type:z.infer<typeof StudioType>) => {
                            return <span key={type.id} className="badge badge-outline text-gray-500">{type.name}</span>
                        })}
                    </div>
                </div>
            </div>
        );
    });
    const filterElems = types.map((type: z.infer<typeof StudioType>) => {
        const isActive = searchParams.get("type") === type.name;
        return (
            <button 
                key={type.id} 
                className={`cursor-pointer badge badge-outline text-gray-500 ${isActive ? 'bg-gray-200' : ''}`}
                onClick={() => {
                    handleFilter("type", isActive ? "" : type.name);
                }}
            >{type.name}
            {isActive && (
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )}
            </button>

        )
    });
        
    return (
       <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-between pr-4">
            <h1 className="text-2xl font-bold">Explore our pods</h1>
            <Form 
                id="search-form" 
                className="flex gap-2" 
                role="search"
                onChange={(e) => {
                    const isFirstSearch = q === null;
                    submit(e.currentTarget,{replace:!isFirstSearch});
                }}
            >
                <input 
                    type="search" 
                    placeholder="Type here..." 
                    aria-label="Search Pods" 
                    id="q"
                    name="q"
                    onChange={(e) => {
                        setQuery(e.currentTarget.value);
                    }}
                    value={query}
                    className={`input input-ghost ${searching ? "loading loading-spinner loading-xs" : ""}`}
                    />
            </Form>
        </div>
        <div className="flex gap-2">
            {filterElems}
            <button 
                    className="cursor-pointer badge badge-outline text-gray-500"
                    onClick={() => {
                        handleFilter("type","");
                    }}
                >
                    All
                </button>
        </div>
        {studioElem}
       </div>
    );
}