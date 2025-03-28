import Link from 'next/link';
export default function Page() {
    return (
        <div className="bg-yellow-400 min-h-10 min-w-10 flex flex-col items-center justify-center p-4 rounded-lg">
            <Link href="/dashboard/archived">Archived</Link>
            Notification slot
        </div>
    );
}