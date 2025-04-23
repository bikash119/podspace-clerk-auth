import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layout/layout.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
        route("sign-up", "routes/auth/sign-up.tsx"),
        route("pods","routes/pods.tsx"),
        route("pods/:podId","routes/podDetails.tsx"),
        route("host", "layout/hostLayout.tsx", [
            index("routes/host/dashboard.tsx"),
            route("income","routes/host/income.tsx"),
            route("pods","routes/host/hostPods.tsx"),
            route("reviews","routes/host/reviews.tsx")
        ])
    ]),
] satisfies RouteConfig;
