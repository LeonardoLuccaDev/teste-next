import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "./Context/Global";
import { Router } from "./Routes";
import { api } from "./Services";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const token = localStorage.getItem('@CRUDusers:token');
    
    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`
    };

    return (
        <GlobalProvider>
            <div className="font-body"><Router /></div>
            <ToastContainer autoClose={3000} className="toast-container" />
        </GlobalProvider>
    );
}

export default App;
