import React from 'react';
import UrlShortener from '../Components/UrlForm.jsx';
import UserUrl from '../Components/userUrl.jsx';

function DashBoard() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center mt-20 p-4">
            <div className="bg-white -mt-20 p-8 rounded-lg shadow-md w-full max-w-4xl">
                <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
                <UrlShortener />
                <UserUrl />
            </div>
        </div>
    )
}
export default DashBoard;