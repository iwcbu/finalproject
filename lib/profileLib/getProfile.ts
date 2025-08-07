import getCollection, { ENTRIES_COLLECTION } from "@/db";
import { ProfileEntryProps } from "@/types";

export default async function getProfile(usern: string): Promise<ProfileEntryProps | null> {
    if (!usern) {
        return null;
    }

    const entriesCollection = await getCollection(ENTRIES_COLLECTION);
    const doc = await entriesCollection.findOne({ usern });

    if (!doc) {
        return null;
    } 

    return doc?.profile ?? null;
}