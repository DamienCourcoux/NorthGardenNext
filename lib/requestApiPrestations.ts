const BASE_URL = "https://north-garden.vercel.app";

// all prestations
export const getPrestations = async () => {
    const response = await fetch(`/api/prestations`);
    const json = await response.json();
    return json;
}

// single prestation
export const getPrestation = async (prestationId: string) => {
    const response = await fetch(`/api/prestations/${prestationId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new prestation
export async function addPrestation(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`/api/prestations`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new prestation
export async function updatePrestation(prestationId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`/api/prestations/${prestationId}`, Options);
    const json = await response.json();
    return json;
}

// delete prestation
export async function deletePrestation(prestationId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`/api/prestations/${prestationId}`, Options);
    const json = await response.json();
    return json;
}