import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ users }) => {
    const navigate = useNavigate();
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    const user = users.find((user) => user.email === loggedInUserEmail);

    // State for toggling password visibility
    const [showPassword, setShowPassword] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUserEmail');
        navigate('/');
    };

    // Check if user data exists
    if (!user) {
        return <div className="text-white">User not found. Please log in.</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Profile</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Username:</label>
                    <p className="block text-sm text-gray-400">{user.username}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email:</label>
                    <p className="block text-sm text-gray-400">{user.email}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Password:</label>
                    <div className="flex items-center">
                        <p className="block text-sm text-gray-400">
                            {showPassword ? user.password : '********'}
                        </p>
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="ml-2 text-blue-500 hover:underline"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                {/* Additional Profile Fields */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone:</label>
                    <p className="block text-sm text-gray-400">{user.phone || 'Not provided'}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Address:</label>
                    <p className="block text-sm text-gray-400">{user.address || 'Not provided'}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth:</label>
                    <p className="block text-sm text-gray-400">{user.dob || 'Not provided'}</p>
                </div>

                {/* Edit Profile Button */}
                <button
                    onClick={() => navigate('/edit-profile')} // Add navigation to edit profile page
                    className="w-full bg-yellow-600 text-white font-bold py-2 rounded hover:bg-yellow-500 transition mb-2"
                >
                    Edit Profile
                </button>

                <button
                    onClick={handleLogout}
                    className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-500 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
