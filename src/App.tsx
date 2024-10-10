import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import Login from "./pages/login/Login";
import { Therapies } from "./pages/therapies/Therapies.tsx";
import Medication from "./pages/medications/Medication";
import Dashboard from "./pages/Dashboard";
import TherapyDetails from "./pages/therapyDetails/TherapyDetails.tsx"
import AddEditTherapie from "./pages/addEditTherapy/AddEditTherapy.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/",
    loader: () => redirect("/login"),
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/medications",
        element: <Medication />,
      },
      {
        path: "/Therapies",
        children: [
          {
            path: "",
            element: <Therapies />,
          },
          {
            path: "details",
            element: <TherapyDetails />
          },
          {
            path: "edit",
            element: <AddEditTherapie />
          },
          {
            path: "add",
            element: <AddEditTherapie />
          }
        ]
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
