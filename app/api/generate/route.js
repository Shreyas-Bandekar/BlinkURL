import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    let client = await clientPromise;
    let db = client.db("blinkurl");
    const collection = db.collection("urls");

    // Check if the short url exists
    

  return new Response('Generate API is working!');
}