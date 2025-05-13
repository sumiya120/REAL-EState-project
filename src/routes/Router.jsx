import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/layout"; // Ensure correct path
import Home from "../Home"; // Ensure correct path
import PropertyDetails from "../sections/PropertyDetails";
import Payment from "../sections/Payment";
import PaymentSuccess from "../sections/PaymentSuccess";

// Main routes
const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <PropertyDetails />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/success",
    element: <PaymentSuccess />,
  },
];

// Parent routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: mainRoutes, // Pass the mainRoutes as children
  },
]);

export default router;
