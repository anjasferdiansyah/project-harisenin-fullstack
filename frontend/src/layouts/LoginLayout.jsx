import { useState } from "react";
import Navbar from "../components/organisems/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bcrypt from 'bcryptjs';


function LoginLayout(){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            const storedEmail = userData.email;
            const storedPassword = userData.password;

            if (email === storedEmail && bcrypt.compareSync(password, storedPassword)) {
                toast.success('Login successful!');
                console.log('Login successful!');
            } else {
                toast.error('Invalid email or password.');
            }
        } else {
            toast.error('User not found. Please register first.');
        }
    };

    return (
        <>
            <Navbar />
            <ToastContainer />
            <main className="flex flex-col md:flex-row h-screen text-[#213775] items-center justify-center font-futura">
                <div className="w-full items-center justify-center p-5 h-[50%]">
                    <h1 className="text-3xl pb-8 font-extrabold md:text-5xl">Customer Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="font-semibold text-xs">E-mail address</div>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange}
                            className="border border-[#213775] w-full p-2 mb-4" />
                        <div className="font-semibold text-xs text-x">Password</div>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange} 
                            className="border border-[#213775] w-full p-2" />
            
                        <div className="text-center pt-4 pb-8 font-extrabold text-xs hover:text-blue-600">
                            <a href="#">OOPS! I FORGOT MY PASSWORD</a>
                        </div>
                        <button type="submit" className="border text-white text-xs uppercase font-extrabold tracking-[0.18em] bg-[#213775] w-full p-3 relative overflow-hidden transition-all duration-200 ease-in-out hover:text-[#213775] hover:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f6ddda] before:to-[#f6ddda] before:transition-all before:duration-200 before:ease-in-out before:z-[-1] hover:before:left-0  ">
                            Login
                        </button>
                    </form>
            
                </div>
                <div className="bg-[#dcf6da] w-full h-[50%] md:h-full flex flex-col items-center justify-center p-5">
                    <h1 className="text-3xl pb-8 font-extrabold md:text-5xl w-full">New Customer</h1>
                    <p className="w-full text-sm md:text-md font-medium">Creating an account has many advantages: a faster ordering process, tracking orders and more.</p>
            
                    <a href="/register" className="mt-4 border p-3 flex justify-center bg-[#213775] text-white text-xs uppercase tracking-[0.18em] w-full relative overflow-hidden transition-all duration-200 ease-in-out hover:text-[#213775] hover:scale-100  before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f6ddda] before:to-[#f6ddda] before:transition-all before:duration-200 before:ease-in-out before:z-[-1] hover:before:left-0">Create An Account</a>
            </div>
        </main>
        </>
    )
}

export default LoginLayout