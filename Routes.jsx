import { useRoutes } from "react-router-dom";

function Home() {
  return <h1 className="text-2xl font-bold">Zerclix App Running</h1>;
}

export default function ProjectRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> }
  ]);
}
