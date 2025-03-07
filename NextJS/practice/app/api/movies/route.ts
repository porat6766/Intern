export async function GET() {
    const API_URL =
        "https://api.themoviedb.org/3/movie/popular?api_key=9b097cebaa8eaf684959db8072f31e9f&page=1";

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: "Failed to fetch movies" }, { status: 500 });
    }
}
