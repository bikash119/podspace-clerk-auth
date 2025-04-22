
const BASE_URL = "https://my-json-server.typicode.com/bikash119/podspace-clerk-auth";
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getStudios() {
    try {
        // await sleep(3000);
        const response = await fetch(`${BASE_URL}/studios`);
        const studios = await response.json();
        return studios;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function searchStudiosByType(type: string) {
    try {
        // await sleep(3000);
        const response = await fetch(`${BASE_URL}/studios?type=${type}`);
        const studios = await response.json();
        return studios;
    } catch (error) {
        console.error(error);
        return [];
    }
}
export async function searchStudiosByQuery(q: string) {
    try {
        // await sleep(3000);
        const response = await fetch(`${BASE_URL}/studios?q=${q}`);
        const studios = await response.json();
        return studios;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function searchStudiosByTypeAndQuery(type: string,q: string) {
    try {
        // await sleep(3000);
        const response = await fetch(`${BASE_URL}/studios?type=${type}&q=${q}`);
        const studios = await response.json();
        return studios;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getStudioTypes() {
    try {
        // await sleep(3000);
        const response = await fetch(`${BASE_URL}/types`);
        const studioTypes = await response.json();
        return studioTypes;
    } catch (error) {
        console.error(error);
        return [];
    }
}

