import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    let error = null;
    let doc = null;
    try {
        const shorturl = params.shorturl;
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");
        doc = await collection.findOne({ shorturl });
        if (doc) {
            redirect(doc.url);
        } else {
            error = "Short URL not found.";
        }
    } catch (e) {
        error = "Server/database error. Please try again later.";
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            {error ? (
                <>
                    <span className="text-lg text-red-600 font-semibold mb-2">{error}</span>
                    <a href={process.env.NEXT_PUBLIC_HOST || "/"} className="text-cyan-700 underline mt-2">Go to Home</a>
                </>
            ) : (
                <span className="text-lg text-gray-700">Redirecting...</span>
            )}
        </div>
    );
}