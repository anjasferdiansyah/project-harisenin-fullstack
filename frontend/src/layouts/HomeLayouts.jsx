import Navbar from "../components/organisems/Navbar";
import Footer from "../components/organisems/Footer";

function HomeLayouts({ children }) {
    return ( 
        <>
            <Navbar/> 
            {children}
            <Footer />
        </>
     );
}

export default HomeLayouts;