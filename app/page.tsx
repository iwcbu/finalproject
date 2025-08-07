'use client';

import HomePage from "@/components/HomePage/HomePage";
import { useEffect, useRef } from "react";

//Abdallah:
//This function is our Home page.
export default function Home() {

  
  useEffect(() => {
    
      const hasRun = sessionStorage.getItem('hasRun'); 
      //                 sessionStorage - temporary db for web tabs
      //       * When we put in 'hasRun', it initiats a new key 'hasRun' with value null. *
      //                        ex:  { 'hasRun' : null }
      //
      //
      // Because this initiation happens when starting the db for the tab, this will only run once for every tab
      //  - if you refresh the page, it still will hold its value.
      //
      if (hasRun === null) { 
        fetch('/api/startup').then(() => {
          console.log('Guest profile is now active');
        });
        sessionStorage.setItem('hasRun', 'true') // this sets the null to true, preventing the if statement from completing again.
      } else {
        console.log
      }
    }, []);


    return (
      <div>
        <HomePage />
      </div>

    );
}
