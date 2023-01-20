const BASE_URL = "https://north-garden.vercel.app";

// all pictures
export const getPictures = async () => {
    const response = await fetch(`/api/pictures`);
    const json = await response.json();
    return json;
}

// single picture
export const getPicture = async (pictureId: string) => {
    const response = await fetch(`/api/pictures/${pictureId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new picture
export async function addPicture(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`/api/pictures`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new picture
export async function updatePicture(pictureId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`/api/pictures/${pictureId}`, Options);
    const json = await response.json();
    return json;
}

// delete picture
export async function deletePicture(pictureId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`/api/pictures/${pictureId}`, Options);
    const json = await response.json();
    return json;
}