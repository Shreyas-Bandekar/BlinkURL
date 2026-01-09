"use client";
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState(" ")
    const [shortUrl, setShortUrl] = useState(" ")
    const [generatedUrl, setGeneratedUrl] = useState(false)

    const handleChange = (e) =>{
        setUrl(e.target.value)
    }

    return (
        <div>
            <h1>Generate Short URL</h1>
            <div>
                <input type="text" 
                className="p-4 focus-outline-cyan-500"
                placeholder="Enter your URL" onChange={handleChange} 
                />

                <input type="text" 
                className="p-4 focus-outline-cyan-500"
                placeholder="Enter your preferred short URL" onChange={handleChange} 
                />

                <button>Generate</button>
            </div>
        </div>
    )
}

export default Shorten