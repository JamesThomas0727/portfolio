/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Function to fetch data from back-end side.
 */
import axios from 'axios';
const fetchData = (url) => {
    const data = axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => console.error('Error fetching data:', error));
    return data;
}

export default fetchData;