// import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import Root from "./routes/Root";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Testimonials from "./pages/Testimonials";
import { system } from "./theme/theme";
import CollisionProvider from "./context/collision-provider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider system={system}>
      <CollisionProvider>
        <RouterProvider router={router} />
      </CollisionProvider>
    </Provider>
  );
}

export default App;
