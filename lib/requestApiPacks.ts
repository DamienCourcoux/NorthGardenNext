const BASE_URL = "https://north-garden.vercel.app";

// all packs
export const getPacks = async () => {
    const response = await fetch(`/api/packs`);
    const json = await response.json();
    return json;
}

// single pack
export const getPack = async (packId: string) => {
    const response = await fetch(`/api/packs/${packId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new pack
export async function addPack(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`/api/packs`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new pack
export async function updatePack(packId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`/api/packs/${packId}`, Options);
    const json = await response.json();
    return json;
}

// delete pack
export async function deletePack(packId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`/api/packs/${packId}`, Options);
    const json = await response.json();
    return json;
}