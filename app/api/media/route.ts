// R2 media uploads remain disabled until backend/auth migration.
export async function POST() {
  return Response.json(
    { error: 'Subida de archivos no disponible en esta vista de demostración.' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } }
  );
}
