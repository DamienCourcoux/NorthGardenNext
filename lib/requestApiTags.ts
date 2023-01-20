const BASE_URL = "http://localhost:3000";

// all tags
export const getTags = async () => {
    const response = await fetch(`${BASE_URL}/api/tags`);
    const json = await response.json();
    return json;
}

// single tag
export const getTag = async (tagId: string) => {
    const response = await fetch(`${BASE_URL}/api/tags/${tagId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new tag
export async function addTag(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/tags`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new tag
export async function updateTag(tagId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`${BASE_URL}/api/tags/${tagId}`, Options);
    const json = await response.json();
    return json;
}

// delete tag
export async function deleteTag(tagId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`${BASE_URL}/api/tags/${tagId}`, Options);
    const json = await response.json();
    return json;
}