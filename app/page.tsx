
import HomePopStocks from "@/components/HomePopStocks"


import {Container} from "@/components/GlobalStyledComponents";
import StockGridFetch from "@/app/StockGridFetch";
import StockDay from "@/components/StockDay";

//Abdallah:
//This function is our Home page.
export default function Home() {

  return (
    <>
      
      <HomePopStocks />
    </>

      <Container>
          <StockDay/>

          <StockGridFetch/>


      </Container>

  );
}
