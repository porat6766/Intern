import Link from "next/link";

Link
export default function Page() {
    return (
        <div className="bg-green-400 min-h-10 min-w-10 flex flex-col items-center justify-center p-4 rounded-lg">
            F1 PAGE
            <Link href="/f1/f2">LETS GO TO F2</Link>
        </div>
    );
}