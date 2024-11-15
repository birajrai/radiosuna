// /pages/api/index.js

export default async function handler(req, res) {
    try {
        const response = await fetch('https://backend.bishestamedia.com.np/api/stream.php');
        const data = await response.json();

        // If the fetch fails, throw an error
        if (!response.ok) {
            throw new Error('Failed to fetch data from external API');
        }

        // Return the fetched data
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data' });
    }
}
