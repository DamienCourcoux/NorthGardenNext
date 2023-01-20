const BASE_URL = "https://north-garden.vercel.app";

// all admins
export const getAdmins = async () => {
    const response = await fetch(`/api/admins`);
    const json = await response.json();
    return json;
}

// single admin
export const getAdmin = async (adminId: string) => {
    const response = await fetch(`/api/admins/${adminId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new admin (signUp)
export async function signUpAdmin(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`/api/admins/signup`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// connect a new admin (signIn)
export async function signInAdmin(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`/api/admins/signin`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new admin
export async function updateAdmin(adminId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`/api/admins/${adminId}`, Options);
    const json = await response.json();
    return json;
}

// delete admin
export async function deleteAdmin(adminId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`/api/admins/${adminId}`, Options);
    const json = await response.json();
    return json;
}