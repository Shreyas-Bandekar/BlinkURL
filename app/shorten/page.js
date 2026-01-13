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
    <div className="mx-auto max-w-lg bg-white shadow-2xl my-16 p-8 rounded-2xl flex flex-col gap-6 border border-cyan-100">
      <h1 className="font-extrabold text-3xl text-cyan-700 text-center mb-2">Shorten Your URL</h1>
      <p className="text-center text-gray-500 mb-4">Paste a long URL and get a short one instantly. You can also customize your short link!</p>
      <form className="flex flex-col gap-5" onSubmit={e => {e.preventDefault(); generate();}}>
        <label className="font-semibold text-cyan-700" htmlFor="long-url">Long URL</label>
        <input
          id="long-url"
          type="url"
          value={url}
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="https://your-long-url.com"
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <label className="font-semibold text-cyan-700" htmlFor="custom-url">Custom Short URL <span className="text-gray-400 font-normal">(optional)</span></label>
        <input
          id="custom-url"
          type="text"
          value={shortUrl}
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="your-custom-link"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 rounded-lg shadow-lg py-3 font-bold text-white mt-2 transition duration-200"
        >
          Generate Short Link
        </button>
      </form>
      {error && (
        <div className="mt-2 p-3 bg-red-50 border border-red-300 rounded-lg text-center text-red-700">
          {error}
        </div>
      )}
      {generatedUrl && (
        <div className="mt-4 p-3 bg-green-50 border border-green-300 rounded-lg text-center text-green-700 flex flex-col gap-2 items-center">
          <span className="font-semibold">🎉 Your short URL:</span>
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-center items-center">
            <a href={generatedUrl} className="underline text-cyan-700 break-all font-semibold" target="_blank" rel="noopener noreferrer">{generatedUrl}</a>
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
