import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bcrypt from 'bcryptjs';
import Navbar from "../components/organisems/Navbar";

function RegsiterLayouts() {
    const[formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleRegister = (e) => {
        e.preventDefault();
        const { password, confirmPassword, ...otherData } = formData;
        
        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        localStorage.setItem('userData', JSON.stringify({ ...otherData, password: hashedPassword }));

        toast.success('Registration successful!');
    };


    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="font-sans text-blue-900">
                <div className="flex flex-col md:flex-row m-auto">
                    <div className="flex-1 md:w-1/2 px-14 mt-5 mb-10 mb:mr-12">
                        <h1 className="text-6xl font-bold mb-5">Welcome on board!</h1>
                        <p className="text-sm">Welcome to your account</p>
                    </div>

                    <div
                        className="md:w-3/4 p-8 md:p-20 bg-green-100 items-center justify-center h-max md:h-screen"
                    >
                        <form
                            onSubmit={handleRegister}
                            method="post"
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            <h1 className="text-3xl font-bold mb-8 md:col-span-2">
                                Create my account
                            </h1>

                            <div className="mb-4">
                                <label htmlFor="f-name" className="block text-xs font-medium">FIRST NAME</label>
                                <input
                                    type="text"
                                    id="f-name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="l-name" className="block text-xs font-medium">LAST NAME</label>
                                <input
                                    type="text"
                                    id="l-name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="e-mail" className="block text-xs font-medium">E-MAIL ADDRESS</label>
                                <input
                                    type="email"
                                    id="e-mail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border border-blue-900"
                                    required
                                />
                            
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-xs font-medium">PHONE</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border border-blue-900"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-xs font-medium">PASSWORD</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Minimum 8 characters"
                                    className="mt-1 p-2 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="confirmpass" className="block text-xs font-medium">CONFIRM PASSWORD</label>
                                <input
                                    type="password"
                                    id="confirmpass"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm your password"
                                    className="mt-1 p-2 mb-10 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="text-white bg-blue-900 px-7 py-2 font-bold"
                                >
                                    <p>CREATE A NEW ACCOUNT</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegsiterLayouts;