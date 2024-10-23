import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ users, setUsers }) => {
    const navigate = useNavigate();
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    const user = users.find((user) => user.email === loggedInUserEmail);

    const [username, setUsername] = useState(user.username);
    const [phone, setPhone] = useState(user.phone || '');
    const [address, setAddress] = useState(user.address || '');
    const [dob, setDob] = useState(user.dob || '');

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = { ...user, username, phone, address, dob };
        const updatedUsers = users.map((u) => (u.email === user.email ? updatedUser : u));
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        navigate('/profile');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full bg-gray-700 border border-gray-600 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 text-white placeholder-gray-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone:</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="block w-full bg-gray-700 border border-gray-600 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Address:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="block w-full bg-gray-700 border border-gray-600 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth:</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="block w-full bg-gray-700 border border-gray-600 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-500 transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
