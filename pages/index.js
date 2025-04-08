export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>API Proxy</h1>
      <p>To use this proxy, make a request to:</p>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '5px', overflow: 'auto', color: '#333' }}>
        /api/proxy?url=https://your-destination-url.com
      </pre>
      <p>Example:</p>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '5px', overflow: 'auto', color: '#333' }}>
        /api/proxy?url=https://jsonplaceholder.typicode.com/todos/1
      </pre>
    </div>
  );
}