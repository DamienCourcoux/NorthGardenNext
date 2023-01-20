const BASE_URL = "https://north-garden.vercel.app";

// all formules
export const getFormules = async () => {
    const response = await fetch(`/api/formules`);
    const json = await response.json();
    return json;
}

// single formule
export const getFormule = async (formuleId: string) => {
    const response = await fetch(`/api/formules/${formuleId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new formule
export async function addFormule(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`/api/formules`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new formule
export async function updateFormule(formuleId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`/api/formules/${formuleId}`, Options);
    const json = await response.json();
    return json;
}

// delete formule
export async function deleteFormule(formuleId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`/api/formules/${formuleId}`, Options);
    const json = await response.json();
    return json;
}