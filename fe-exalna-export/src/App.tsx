import { Lenis } from '@studio-freight/react-lenis';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from "./router";

const App = () => {
  return (
    <Lenis root>
      <RouterProvider router={router} />
      <ToastContainer />
    </Lenis>
  );
};

export default App;
