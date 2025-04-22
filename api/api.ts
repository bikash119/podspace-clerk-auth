
const BASE_URL = "https://my-json-server.typicode.com/bikash119/podspace-clerk-auth";
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export async function getStudios() {
    try {
        await sleep(3000);
        const response = await fetch(`${BASE_URL}/studios`);
        const studios = await response.json();
        return studios;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function searchStudios(query: string) {
    try {
        await sleep(3000);
        const response = await fetch(`${BASE_URL}/studios?q=${query}`);
        const studios = await response.json();
        return studios;
    } catch (error) {
        console.error(error);
        return [];
    }
}