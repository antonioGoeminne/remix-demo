import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { Sidebar } from "ui";
import { CubeIcon } from "@radix-ui/react-icons";

const sidebarOptions = [
  { label: "Products", value: "products", href: "/products", Icon: CubeIcon },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Sidebar options={sidebarOptions} />
        <div className="fixed left-[300px]">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
