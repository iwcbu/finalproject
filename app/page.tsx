
import HomePopStocks from "@/components/HomePage/HomePopStocks"
import StockDay from "@/components/HomePage/StockDay";

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
