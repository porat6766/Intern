import Link from "next/link";
export default function Page() {
    return (
        <div className="bg-green-400 min-h-10 min-w-10 flex flex-col items-center justify-center p-4 rounded-lg">
            F2 PAGE
            <Link href="/f1">LETS GO HOME</Link>
        </div>
    );
}