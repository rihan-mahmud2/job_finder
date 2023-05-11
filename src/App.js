import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Jobs from "./Pages/Jobs";
import Form from "./Pages/Form";
// import Form from "./Pages/Form";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/allJobs",
          element: <Jobs />,
        },
        {
          path: "/addJobs",
          element: <Form />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
