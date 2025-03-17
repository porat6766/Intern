import { getServerSession } from 'next-auth';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import { Button } from '../../AppConfig/components/ui/button';

const ProfilePage = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user) {
        return (
            <div className="text-center p-4">
                <h1 className="text-xl font-semibold">You are not logged in</h1>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-2xl font-semibold mb-6">User Profile</h1>
            <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-blue-500 text-white flex items-center justify-center mb-4">
                    {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                </div>
                <div className="text-lg font-medium mb-2">
                    <span>Name: {user.name || user.email.split('@')[0]}</span>
                </div>
                <div className="text-sm text-gray-500 mb-6">
                    <span>Email: {user.email}</span>
                </div>

                <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Edit Profile
                </Button>
            </div>
        </div>
    );
};

export default ProfilePage;
