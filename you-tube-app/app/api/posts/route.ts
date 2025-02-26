export const GET = async () => {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
            },
        });
    } catch (error) {
        console.error('Fetch error:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
