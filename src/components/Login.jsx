import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ users }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verify login credentials against registered users
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            console.log('User logged in:', email);
            localStorage.setItem('loggedInUserEmail', email); // Store logged-in user's email
            navigate('/profile'); // Redirect to the Profile page
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full bg-gray-700 border border-gray-600 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 text-white placeholder-gray-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full bg-gray-700 border border-gray-600 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 text-white placeholder-gray-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-500 transition"
                    >
                        Login
                    </button>
                </form>
                <div className='text-right text-sm hover:text-blue-500 text-gray-300 mt-2'>
                    <span>Forgot password?</span>
                </div>
                <div className="mt-3 text-center text-gray-300">
                    <span>Don't have an account? </span>
                    <button
                        onClick={() => navigate('/register')}
                        type="button"
                        className="hover:text-blue-500"
                    >
                        Register here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
