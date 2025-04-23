import type { Route } from "./+types/podDetails";
import { Studio, StudioType } from "../types/studio";
import { z } from "zod";
import { getPod } from "api/api";

type PodDetailsLoaderData = {
    pod: z.infer<typeof Studio>;
    error?: string;
}

export async function loader({params}: Route.LoaderArgs) {

    const podDetails = await getPod(params.podId);
    return {pod: Studio.parse(podDetails)}
}

export default function PodDetails({loaderData}: {loaderData: PodDetailsLoaderData}) {
  const {pod} = loaderData; 
  const imgCarousel = <>
                        <div className="carousel w-full">
                          {pod.imageUrls?.map((url, index) => (
                            <div id={`item${index}`} key={index} className="carousel-item w-full">
                                <img
                                    src={url}
                                    className="w-full" />
                            </div>
                          ))}
                        </div>
                        <div className="flex w-full justify-center gap-2 py-2">
                          {pod.imageUrls?.map((url, index) => (
                            <a href={`#item${index}`} key={index} className="btn btn-xs">{index + 1}</a>
                          ))}
                        </div>
                      </>
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {imgCarousel}
      <div className="card-body">
        <h2 className="card-title">{pod.name}</h2>
        <p>{pod.description}</p>
        <p>${pod.pricePerHour}/hour</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
  </div>
  );
}
