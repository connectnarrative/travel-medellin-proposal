// Vercel presentation uses checked-in public demo assets.
// Private R2 objects are not available on this host.
export async function GET() {
  return new Response('Media no disponible en esta vista de demostración.', {
    status: 404, headers: { 'Cache-Control': 'no-store' }
  });
}
