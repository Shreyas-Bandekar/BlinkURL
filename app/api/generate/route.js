import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json(); // ✅ await

    const client = await clientPromise;
    const db = client.db("blinkurl");
    const collection = db.collection("urls");

    const result = await collection.insertOne({ // ✅ correct method
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date()
    });

    return NextResponse.json({
      success: true,
      error: false,
      message: "URL generated successfully"
    }, { status: 200 });

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json({
      success: false,
      error: true,
      message: error.message
    }, { status: 500 });
  }
}
