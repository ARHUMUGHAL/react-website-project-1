import Homepage from "./Pages/Homepage";
import DigitalTech from "./Pages/WhyDigitalTech"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/why-adroll-digital-marketing-platform",
      element: <DigitalTech/>,
    },
  ]);

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
