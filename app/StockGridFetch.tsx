import type {Stock} from "@/interface/StockType";
import StockGrid from "@/components/StockGrid";

//Abdallah:
//This function does server side fetching using our API and then passes props to StockGrid
//This function is being ultimately rendered in page.tsx which is our HomePage
export default async function StockGridFetch() {

    const rawData=await fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.FINNHUB_API_KEY}`);
    const data:Stock[]=await rawData.json();


    return <StockGrid stocks={data}/>
}