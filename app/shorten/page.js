"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    if (!url || !shorturl) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, shorturl }),
      });

      // 🔥 IMPORTANT PART
      if (!res.ok) {
        const text = await res.text();
        console.error("Server Error:", text);
        alert("Server error. Check console.");
        return;
      }

      const result = await res.json();

      setGenerated(
        `${process.env.NEXT_PUBLIC_HOST || window.location.origin}/${shorturl}`
      );
      setUrl("");
      setShorturl("");
      alert(result.message);

    } catch (error) {
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
          value={shorturl}
          className="px-4 py-4 focus:outline-cyan-600 rounded-md"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShorturl(e.target.value)}
        />

        <button
          onClick={generate}
          className="bg-cyan-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white"
        >
          Generate
        </button>
      </div>

      {generated && (
        <>
          <span className="font-bold text-lg">Your Link</span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default Shorten;
