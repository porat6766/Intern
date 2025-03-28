import './globals.css';
import Link from "next/link";

export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body>
          <Link href="/dashboard">To dashboard</Link>
          {children}
          {analytics}
          {team}
        </body>
      </html>
    </>
  );
}
