"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    setError("");
    setGeneratedUrl("");
    if (!url || !shortUrl) {
      setError("Please fill all fields");
      return;
    }
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, shorturl: shortUrl })
      });
      if (!res.ok) {
        const text = await res.text();
        setError("Server error. Check console.");
        console.error("Server Error:", text);
        return;
      }
      const result = await res.json();
      setGeneratedUrl(`${process.env.NEXT_PUBLIC_HOST || window.location.origin}/${shortUrl}`);
      setUrl("");
      setShortUrl("");
    } catch (error) {
      setError("Fetch error. Check console.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-cyan-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          value={url}
          className="px-4 py-4 focus:outline-cyan-600 rounded-md"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          value={shortUrl}
          className="px-4 py-4 focus:outline-cyan-600 rounded-md"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-cyan-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white"
        >
          Generate
        </button>
      </div>
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-300 rounded-lg text-center text-red-700">
          {error}
        </div>
      )}
      {generatedUrl && (
        <div className="mt-4 p-3 bg-green-50 border border-green-300 rounded-lg text-center text-green-700 flex flex-col gap-2 items-center">
          <span>🎉 Your short URL:</span>
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-center items-center">
            <a href={generatedUrl} className="underline text-cyan-700 break-all" target="_blank" rel="noopener noreferrer">{generatedUrl}</a>
            <button
              className="bg-cyan-600 hover:bg-cyan-700 text-white rounded px-4 py-2 font-semibold transition duration-200"
              onClick={() => {
                navigator.clipboard.writeText(generatedUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorten;
