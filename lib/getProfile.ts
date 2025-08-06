import getCollection, { ENTRIES_COLLECTION } from "@/db";

export default async function getProfile(uname: string): Promise<string | null> {
    if (!uname) {
        return null;
    }

    const entriesCollection = await getCollection(ENTRIES_COLLECTION);
    const doc = await entriesCollection.findOne({ uname });

    if (!doc) {
        return null;
    } 

    return doc.profile;
}