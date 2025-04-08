export default async function handler(req, res) {
    const targetUrl = req.query.url;
  
    if (!targetUrl || !targetUrl.startsWith('http')) {
      return res.status(400).json({ error: 'Invalid or missing URL' });
    }
  
    try {
      const response = await fetch(targetUrl);
      const data = await response.json();
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch from target URL' });
    }
  }
  