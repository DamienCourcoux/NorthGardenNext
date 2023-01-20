const BASE_URL = "https://north-garden.vercel.app";

// all informations
export const getInformations = async () => {
    const response = await fetch(`/api/informations`);
    const json = await response.json();
    return json;
}

// single information
export const getInformation = async (informationId: any) => {
    const response = await fetch(`/api/informations/${informationId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new information
export async function addInformation(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`/api/informations`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new information
export async function updateInformation(informationId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`/api/informations/${informationId}`, Options);
    const json = await response.json();
    return json;
}

// delete information
export async function deleteInformation(informationId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`/api/informations/${informationId}`, Options);
    const json = await response.json();
    return json;
}