"use client";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setError("");
    setGeneratedUrl("");
    if (!url) {
      setError("Please enter a long URL.");
      return;
    }
    if (!shortUrl) {
      setError("Please enter a custom short URL.");
      return;
    }
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shortUrl })
      });
      const data = await res.json();
      if (data.success) {
        setGeneratedUrl(`${window.location.origin}/${shortUrl}`);
      } else {
        setError(data.message || "Failed to generate short URL.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-50 ">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Generate Short URL
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2">
          Paste a long URL and get a short one instantly
        </p>

        <div className="flex flex-col gap-5 mt-8">
          
          <input
            type="text"
            value={url}
            placeholder="Enter your long URL"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            type="text"
            value={shortUrl}
            placeholder="Enter custom short URL (optional)"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onChange={(e) => setShortUrl(e.target.value)}
          />

          <button
            className="mt-2 w-full py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200 active:scale-95"
            onClick={handleGenerate}
          >
            Generate Short Link
          </button>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-300 rounded-lg text-center text-red-700">
              {error}
            </div>
          )}
          {generatedUrl && (
            <div className="mt-4 p-3 bg-green-50 border border-green-300 rounded-lg text-center text-green-700">
              🎉 Your short URL: <a href={generatedUrl} className="underline text-cyan-700" target="_blank" rel="noopener noreferrer">{generatedUrl}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shorten;
