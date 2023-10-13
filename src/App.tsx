import { Outlet } from "react-router-dom";
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <div className='main'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
