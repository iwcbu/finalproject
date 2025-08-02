import allstocks from "../allstocks.json"

export default async function getGalleryStocks(start, end) {

    const apiKey = process.env.FH_KEY
    const stocks = allstocks.slice(start,end)

    return stocks
}