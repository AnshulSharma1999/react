import React, { Suspense, lazy, useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
import UserContext from "./utillity/UserContext";
import { Provider } from "react-redux";
import appStore from "./utillity/appStore";
import Cart from "./Component/Cart";

const Grocery = lazy(() => import("./Component/Grocery"));
const About = lazy(() => import("./Component/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Make API Call.
    const data = { name: "Anshul Sharma" };
    setUserName(data?.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider
      value={{ loggedInUser: userName,setUserName }}
    >
      <div className="app">
        <Header />
        <Outlet />
      </div>
     </UserContext.Provider>
     </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
