"use server";
import getCollection, { ENTRIES_COLLECTION } from "@/db";
import getProfile from "@/lib/profileLib/getProfile";
import { ProfileEntryProps } from "@/types";

export default async function insertProfile(entry: ProfileEntryProps): Promise<string> {
    const { username, profile } = entry;

    if (!username || !profile || !profile.email || !profile.lastName) {
        return "Username or Password missing";
    }

    const existingProfile = await getProfile(username);
    if (existingProfile) {
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

    return res.acknowledged ? "" : "System error, please try again later.";
}
