export default async function handler(req, res) {
    try {
        // Fetch data from the external API
        const response = await fetch('https://backend.bishestamedia.com.np/api/stream.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check if the response from the external API is successful
        if (!response.ok) {
            console.error(`External API error: ${response.statusText}`);
            return res.status(response.status).json({
                message: `Failed to fetch data: ${response.statusText}`,
            });
        }

        const data = await response.json();

        // Return the fetched data as JSON
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in API route:', error.message);
        res.status(500).json({
            message: 'An error occurred while fetching data.',
            error: error.message,
        });
    }
}
