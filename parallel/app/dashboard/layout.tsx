export default function Layout({
    children,
    notifications,
    revenue,
    users,
}: {
    children: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    users: React.ReactNode;
}) {
    return <>
        {children}
        {notifications}
        {revenue}
        {users}
    </>;
}