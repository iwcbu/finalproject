import getProfile from "./getProfile";
import fs from 'fs';
import path from "path";


export default async function signIn(username: string, password: string) {

    const p = await getProfile(username);

    console.log("signIn -> This function is running")

    if (p === null) {
        return `Username: ${username} does not exist`
    }

    console.log("signIn -> this is the profile fetched: ",p)
    
    
    console.log("signIn -> iwc's password: ",p.profile.password)
    console.log("signIn -> this is the password given: ",password)
    if (password === p.profile.password) {
        // path.join - joins the relative paths
        // process.cwd() - finds the path to the current project folder
        const filePath = path.join(process.cwd(), 'currentProfile.json');
    
        // stringify - makes the json open into a string: the params null and 2 make it look "pretty"
        const jsonString= JSON.stringify(p, null, 2);
        
        // fs.writeFileSync - overwrites the existing contents entirely 
        fs.writeFileSync(filePath, jsonString, 'utf-8');
        console.log(`${username}'s profile is now active:`)
        
        return `Welcome, ${username}`
    } else {
        return "Username or password were incorrect, please try again."
    }


}