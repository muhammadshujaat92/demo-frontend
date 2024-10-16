import axios from 'axios';
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const imageUrl = () => {
    const url = baseUrl
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