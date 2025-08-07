import { NextResponse } from "next/server";
import getProfile from "@/lib/profileLib/getProfile";
import insertProfile from "@/lib/profileLib/insertProfile";
import signIn from "@/lib/profileLib/signIn";

export async function POST(request: Request) {
    const { usern, passw, email } = await request.json();
    const profile = await getProfile(usern)
    if ( profile === null) {

        const newProfile = {
            username: usern,
            profile: {
                password: passw,
                email: email,
                firstName: null,
                lastName: null,
                pfp: null,
                favStocks: []
            }
        }

        await insertProfile(newProfile);
        const mes1 = await signIn(usern, newProfile.profile.password);
        return NextResponse.json({ message: mes1 })
    } else {
        const mes2 = await signIn(usern, passw);
        return NextResponse.json({ message: mes2 })
    }
}