import { NextResponse } from "next/server";
import getProfile from "@/lib/profileLib/getProfile";    // Function to get profile by username from DB
import insertProfile from "@/lib/profileLib/insertProfile";  // Function to insert a new profile into DB
import signIn from "@/lib/profileLib/signIn";            // Function to handle sign-in logic

// POST request handler for sign-up/sign-in endpoint
export async function POST(request: Request) {
    // Parse JSON body from the incoming request
    const { usern, passw, email } = await request.json();

    // Try to find existing profile by username
    const profile = await getProfile(usern);

    if (profile === null) {
        // If profile doesn't exist, create a new profile object
        const newProfile = {
            username: usern,
            profile: {
                password: passw,
                email: email,
                firstName: null,   // Placeholder, can be updated later
                lastName: null,    // Placeholder
                pfp: null,         // Profile picture placeholder
                favStocks: []      // Empty favorite stocks list initially
            }
        };

        // Insert the new profile into the database
        await insertProfile(newProfile);

        // Automatically sign in the new user using their username and password
        const obj1 = await signIn(usern, newProfile.profile.password);
        const { success, message } = obj1;

        // Return a JSON response with sign-in result for the new user
        return NextResponse.json({ success, message });
    } else {
        // If profile already exists, try to sign in using provided credentials
        const obj2 = await signIn(usern, passw);
        const { success, message } = obj2;

        // Return JSON response with the sign-in result for existing user
        return NextResponse.json({ success, message });
    }
}
