import axios from "axios";
const BASE_URL = 'https://my.bamadar.com/api'
const getShProducts = async()=>{
    const response = await axios.get(`${BASE_URL}/get_promotions`)
    return response.data
}
export {getShProducts}