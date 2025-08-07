import getProfile from "./getProfile";
import fs from 'fs';
import path from "path";


export default async function signIn(username: string, password: string) {

    const p = await getProfile(username);
    if (p === null) {
        return {success: false, message:`Username: ${username} does not exist`};
    }    
    
    console.log("signIn -> password given: ",password)
    console.log("signIn -> iwc's password: ",p.profile.password)
    if (password === p.profile.password) {
        // path.join - joins the relative paths
        // process.cwd() - finds the path to the current project folder
        const filePath = path.join(process.cwd(), 'currentProfile.json');
    
        // stringify - makes the json open into a string: the params null and 2 make it look "pretty"
        const jsonString= JSON.stringify(p, null, 2);
        
        // fs.writeFileSync - overwrites the existing contents entirely 
        fs.writeFileSync(filePath, jsonString, 'utf-8');
        console.log(`${username}'s profile is now active:`)
        return { success: true, message: `Welcome, ${username}`};
    } else {
        return {success: false, message: "Username or password were incorrect, please try again."}
    }


}