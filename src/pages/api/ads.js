export default async function handler(req, res) {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_ADS_URL);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching ads:', error);
        res.status(500).json({ error: 'Failed to fetch ads' });
    }
}

