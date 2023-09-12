import { RouterProvider, createHashRouter } from "react-router-dom";
import { LoginPage, MainPage } from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  const routes = createHashRouter([
    { index: true, element: <LoginPage /> },
    { path: "main", element: <MainPage /> },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
