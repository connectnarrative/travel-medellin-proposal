// Do not accept and silently discard client or partner enquiries.
// This repository is presentation-only until a secure persistent backend exists.
export async function POST() {
  return Response.json(
    { error: 'Vista previa de presentación. Las solicitudes se habilitarán al configurar el sistema de datos.' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } }
  );
}
