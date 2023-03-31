
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <>
            <body>

            <Navbar></Navbar>
                {children}
                
            <Footer></Footer>
            </body>

        </>    
    );
}
