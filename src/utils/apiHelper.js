import axios from 'axios';
const apiUrl = process.env.API_URL;

export const imageUrl = () => {
    const url = "https://admin.indiayaatra.com"
    return url
}

export const fetchData = async (endpoint) => {
    try {
        const url = `${apiUrl}/${endpoint}`;
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        throw new Error('Internal Server Error');
    }
};

export const postData = async (endpoint, data) => {
    try {
        const url = `${apiUrl}/${endpoint}`;
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error(`Error posting data: ${error.message}`);
        throw new Error('Internal Server Error');
    }
};