
import HomePopStocks from "@/components/HomePopStocks"


import {Container} from "@/components/GlobalStyledComponents";
import StockDay from "@/components/StockDay";

//Abdallah:
//This function is our Home page.
export default function Home() {

  return (
    <div>
      <StockDay/>
      <HomePopStocks />
    </div>

  );
}
