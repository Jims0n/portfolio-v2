// Centralized navigation links
export const navLinks = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "works",
        path: "/works",
    },
    {
        name: "contact",
        path: "/contact",
    },
] as const;

export type NavLink = (typeof navLinks)[number];
