// index.ts
export default async function handler(request: Request): Promise<Response> {
    const start = performance.now();
  
    const response = {
      timestamp: new Date().toISOString(),
      processingTime: performance.now() - start,
      platform: 'deno-deploy'
    };
  
    return new Response(JSON.stringify(response), {
      headers: { 'content-type': 'application/json' }
    });
  }
  