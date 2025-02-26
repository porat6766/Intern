import { type NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;

        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        if (!response.ok) throw new Error("Failed to fetch post");

        const data = await response.json();
        console.log("Fetched Post:", data);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
    }
}
