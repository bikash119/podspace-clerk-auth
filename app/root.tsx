import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useSearchParams,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { rootAuthLoader } from "@clerk/react-router/ssr.server";
import { ClerkProvider } from "@clerk/react-router";
import { useState, createContext } from "react";
import Footer from "./components/footer";


export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },

];


const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
})

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme,setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html lang="en" data-theme={theme}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <Meta />
          <Links />
        </head>
        <body className="flex flex-col min-h-full overflow-hidden">
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export async function loader(request:Route.LoaderArgs) {
  return rootAuthLoader(request)
}

export default function App({loaderData}: {loaderData: Route.ComponentProps}) {
  return (
    <>
      {/* <ClerkProvider loaderData={loaderData}>
        <Outlet />
      </ClerkProvider> */}
      <Outlet />
      <Footer />
    </>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
export { ThemeContext }