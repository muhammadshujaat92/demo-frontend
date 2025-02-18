import { notFound } from "next/navigation";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const imageUrl = () => baseUrl;

export const fetchData = async (endpoint) => {
    try {
        const url = `${apiUrl}/${endpoint}`;
        const response = await fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            next: { revalidate: 5 }
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        return notFound()
    }
};