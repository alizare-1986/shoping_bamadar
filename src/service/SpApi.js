import axios from "axios";
const BASE_URL = 'https://my.bamadar.com/api'
const getSpProducts = async()=>{
    const response = await axios.get(`${BASE_URL}/get_specials`)
    return response.data
}
export {getSpProducts}