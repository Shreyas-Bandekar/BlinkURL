# BlinkURL

A simple, privacy-first URL shortener built with Next.js, React, and MongoDB.

## Features
- Responsive design
- Custom short URLs
- Copy button for quick sharing
- No tracking, no ads

## Usage
1. Install dependencies: `npm install`
2. Set up `.env.local` with your MongoDB URI
3. Start: `npm run dev`
4. Go to `/shorten` to create and copy short URL

## Environment Variables Setup

Create a `.env.local` file in the project root with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=https://your-domain.com  # e.g. http://localhost:3000 for local
```

Replace `your_mongodb_connection_string` with your actual MongoDB URI. Set `NEXT_PUBLIC_HOST` to your deployed domain or `http://localhost:3000` for local development.

---
Made with ❤️ by BlinkURL.
