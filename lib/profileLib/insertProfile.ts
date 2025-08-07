"use server";
import getCollection, { ENTRIES_COLLECTION } from "@/db";
import getProfile from "@/lib/profileLib/getProfile";
import { ProfileEntryProps } from "@/types";
import { profile } from 'console';

export default async function insertProfile(entry: ProfileEntryProps): Promise<string> {
    const username = entry.username;
    const profile = entry.profile;

    console.log("insertProfile -> start of function");
    console.log("insertProfile -> username: ", username);
    console.log("insertProfile -> profile: ", profile);

    if (!username || !profile || !profile.email || !profile.password) {
        

        return "Username or Password missing";
    }

    const existingProfile = await getProfile(username);
    if (existingProfile) {
        console.log("insertProfile -> Profile already exists.");
        return "Profile already exists."
    }

    const entriesCollection = await getCollection(ENTRIES_COLLECTION);
    
    const res = await entriesCollection.insertOne({
        username: username,
        profile: profile,
        time: new Intl.DateTimeFormat("en-US", {
            timeZone: "America/New_York",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        }).format(new Date()),
    });

    console.log("insertProfile -> res: ", res.acknowledged)
    return res.acknowledged ? "" : "System error, please try again later.";
}
