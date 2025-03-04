
import { auth, signIn, signOut } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = async () => {
    const session = await auth()

    return (
        <header className='px-5 py-3 bg-white shadow-sm'>
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/Screenshot 2024-12-17 222513.png" alt='logo' width={40} height={50} />
                </Link>
                <div className='flex items-center gap-5 text-black'>
                    {session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server"
                                await signOut({ redirectTo: "/" });
                            }}>
                                <button className='cursor-pointer' type='submit'>Logout</button>
                            </form>

                            <Link href={`/user/${session?.user?.id}`}>
                                <span>{session?.user?.id}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";

                            await signIn('github')
                        }}>
                            <button className='cursor-pointer' type='submit'>
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav >
        </header >
    )
}

export default Navbar
