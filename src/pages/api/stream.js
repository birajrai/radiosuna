export default async function handler(req, res) {
    try {
        const response = await fetch('https://backend.bishestamedia.com.np/api/stream.php');

        // Check if the response is JSON

        if (response.headers.get('content-type')?.includes('application/json')) {
            const data = await response.json();
            res.status(200).json(data);
        } else {
            throw new Error('External API did not return JSON');
        }
    } catch (error) {
        console.error('Error in API route:', error.message);
        res.status(500).json({ message: 'Failed to fetch data from external API', error: error.message });
    }
}
