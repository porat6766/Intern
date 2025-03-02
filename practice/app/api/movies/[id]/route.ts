import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    console.log("Fetching movie with ID:", id);

    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=9b097cebaa8eaf684959db8072f31e9f`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Movie not found (Status: ${response.status})`);

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching movie:", error);
        return NextResponse.json({ error: "Failed to fetch movie" }, { status: 500 });
    }
}
