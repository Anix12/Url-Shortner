import React, { useState } from 'react';
import { createShortUrl } from '../api/shortUrl.api';
import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';

const UrlShortener = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState('');
    const [customUrl, setCustomUrl] = useState("")
    const { isAuthenticated } = useSelector((state) => state.auth)

    const queryClient = useQueryClient();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setCopied(false);
        setShortUrl('');

        try {
            let response;
            if (isAuthenticated && customUrl) {
                response = await createShortUrl(url, customUrl);
            } else {
                response = await createShortUrl(url);
            }
            setShortUrl(response);
            queryClient.invalidateQueries({ queryKey: ['userUrls'] });
        } catch (err) {
            console.error("Error while shortening URL:", err);
            setError(err.response?.data?.message || "An unexpected error occurred.");
        }
    };

    const handleCopy = () => {
        if (shortUrl) {
            navigator.clipboard.writeText(shortUrl)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch(err => {
                    console.error("Clipboard write failed: ", err);
                    setError("Failed to copy. Please try again.");
                });
        }
    };

    return (
        <div className="min-h-full flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
                    🔗 URL Shortener
                </h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="url"
                        required
                        placeholder="Paste a long URL here..."
                        className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                    >
                        Shorten URL
                    </button>
                </form>

                {error && (
                    <p className="mt-4 text-sm text-red-500 text-center">
                        {error}
                    </p>
                )}
                {isAuthenticated && (
                    <div className="mt-4">
                        <label htmlFor="customUrl" className="block text-sm font-medium text-gray-700 mb-1">
                            Custom URL (optional)
                        </label>
                        <input
                            type="text"
                            id="customUrl"
                            value={customUrl}
                            onChange={(event) => setCustomUrl(event.target.value)}
                            placeholder="Enter custom slug"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                )}
                {shortUrl && (
                    <div className="mt-6 bg-gray-50 border border-gray-200 rounded-md p-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Your shortened URL</h2>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
                            <input
                                type="text"
                                readOnly
                                value={shortUrl}
                                className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-r-none focus:outline-none"
                            />
                            <button
                                onClick={handleCopy}
                                className={`mt-2 sm:mt-0 sm:ml-2 px-4 py-2 rounded-md sm:rounded-l-none transition duration-300 text-white ${copied ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'}`}
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UrlShortener;
