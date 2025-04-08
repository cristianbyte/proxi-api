// CommonJS format (no ESM)
module.exports = async (req, res) => {
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
    
    res.setHeader('Content-Type', contentType);
    
    if (contentType.includes('application/json')) {
      const json = await response.json();
      return res.status(200).json(json);
    } else {
      const text = await response.text();
      return res.status(200).send(text);
    }
  } catch (error) {
    console.error('Proxy error:', error.message);
    return res.status(500).json({ 
      error: 'Failed to fetch from target URL',
      message: error.message
    });
  }
};