import "react-photo-view/dist/react-photo-view.css";

import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
        </div>
    );
}

export default App;
