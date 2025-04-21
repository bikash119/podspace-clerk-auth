import { Link } from "react-router";

export function Welcome() {

  return (
    <main className="flex flex-col flex-grow gap-7 items-center justify-center w-full h-full ">
      <h1 className="text-primary-content text-5xl md:text-6xl my-auto font-bold md:py-20 px-4 mx-auto">Your Creative Vision, Our Professional Spaces</h1>
      <p className="text-primary-content text-2xl md:py-10 px-4">From mixing tracks to recording podcasts, find the studio that brings your project to life.</p>
      <Link to="/pods" className="md:mt-33 w-2xl btn btn-primary">Find your space</Link>
    </main>
  );
}

