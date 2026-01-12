import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const shorturl = params.shorturl;
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");
    const doc = await collection.findOne({ shorturl });
    if (doc) {
        redirect(doc.url);
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }
    // fallback for SSR, not shown but keeps page valid
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <span className="text-lg text-gray-700">Redirecting...</span>
        </div>
    );
}