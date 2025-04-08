# API Proxy

A simple API proxy built with Next.js to avoid CORS issues when making requests to external APIs from frontend applications.

## Description

This project provides a proxy endpoint that allows your frontend applications to make requests to external APIs without worrying about CORS (Cross-Origin Resource Sharing) restrictions. The proxy receives the target URL as a parameter and returns the response from the target server.

## Features

- Avoids CORS issues in frontend applications
- Compatible with JSON and plain text responses
- Built-in error handling
- Easily deployed on Vercel

## Installation

1. Clone this repository:
```bash
git clone https://github.com/your-username/my-proxy-app.git
cd my-proxy-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

### Basic URL structure

```
https://your-domain.com/api/proxy?url=TARGET_URL
```

### Examples

To request data from a public API:
```
https://your-domain.com/api/proxy?url=https://jsonplaceholder.typicode.com/todos/1
```

To search using the Deezer API:
```
https://your-domain.com/api/proxy?url=https://api.deezer.com/search?q=yellow
```

### Usage in Frontend code

```javascript
const fetchSuggestions = async (query) => {
  try {
    const response = await fetch(`https://your-domain.com/api/proxy?url=https://api.deezer.com/search?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return { data: [] };
  }
};
```

## Deployment

The project is optimized to be deployed on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Connect it to your Vercel account
3. Vercel will automatically detect that it's a Next.js project and configure it correctly

Alternatively, you can use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Limitations

- Some APIs have restrictions that prevent their use from servers
- There are limits on Vercel's free plans (execution time, bandwidth, etc.)
- The proxy doesn't hide API keys if they are included in the URL

## License

[MIT](https://choosealicense.com/licenses/mit/)