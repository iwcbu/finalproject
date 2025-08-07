import { clearProfile } from '@/lib/clearProfile';


clearProfile();

export async function GET() {
    return new Response('Start has already been run.', { status: 200 });
}