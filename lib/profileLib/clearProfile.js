import fs from 'fs'; // fs - file sync
import path from 'path';


// The default guest profile
const guest = {
    "username": "guest",
    "profile": {
        "password": null,
        "email": null,
        "firstName": null,
        "lastName": null,
        "pfp": null, 
        "favStocks": [] 
    }
}
      

export function clearProfile() {
    // path.join - joins the relative paths
    // process.cwd() - finds the path to the current project folder
    const filePath = path.join(process.cwd(), 'currentProfile.json');

    // stringify - makes the json open into a string: the params null and 2 make it look "pretty"
    const jsonString= JSON.stringify(guest, null, 2);
    
    // fs.writeFileSync - overwrites the existing contents entirely 
    fs.writeFileSync(filePath, jsonString, 'utf-8');
    console.log("Guest profile is active:")
}
