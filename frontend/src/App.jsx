import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Startupathon from "./pages/Startupathon";
import Admin from "./pages/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Outlet></Outlet>
        </>
      }
    >
      <Route path="" element={<Startupathon />} />
      <Route path="/admin-dashboard" element={<Admin />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
