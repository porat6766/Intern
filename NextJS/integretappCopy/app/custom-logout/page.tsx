'use client'

import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "../../AppConfig/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../AppConfig/components/ui/card";
import { LogOut } from "lucide-react";

export default function LogoutPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <CardHeader className="text-center">
                    <LogOut className="w-12 h-12 mx-auto text-red-500" />
                    <CardTitle className="mt-4 text-xl font-semibold text-gray-800">
                        ?בטוח שאתה רוצה להתנתק
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 mt-4">
                    <Button
                        className="bg-red-600 hover:bg-red-700 text-white w-full"
                        onClick={() => signOut({ callbackUrl: "/" })}
                    >
                        התנתקות
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/">ביטול</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
