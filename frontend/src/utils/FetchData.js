/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Function to fetch data from back-end side.
 */

const fetchData = (url) => {
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error('HTTP error: ' + res.status);
            }
            return res.json();
        })
        .then((data) => (data))
        .catch((err) =>
            console.error("Fetch data from back-end side: " + err));
}

export default fetchData;