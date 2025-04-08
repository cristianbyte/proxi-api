export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const targetUrl = req.query.url;

  if (!targetUrl || !targetUrl.startsWith('http')) {
    return res.status(400).json({ error: 'Invalid or missing URL' });
  }

  try {
    const response = await fetch(targetUrl);
    const contentType = response.headers.get('content-type') || 'application/json';
    const body = await response.text();

    res.setHeader('Content-Type', contentType);
    return res.status(200).send(body);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch from target URL' });
  }
}

  