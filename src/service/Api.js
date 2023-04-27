import axios from "axios";
const BASE_URL = "https://my.bamadar.com/api"
const getProducts = async()=>{
    const response = await axios.get(`${BASE_URL}/top_products`)
    return response.data
}
export {getProducts}