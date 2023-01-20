const BASE_URL = "http://localhost:3000";

// all clients
export const getClients = async () => {
    const response = await fetch(`${BASE_URL}/api/clients`);
    const json = await response.json();
    return json;
}

// single client
export const getClient = async (clientId: string) => {
    const response = await fetch(`${BASE_URL}/api/clients/${clientId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new client
export async function addClient(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/clients`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new client
export async function updateClient(clientId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`${BASE_URL}/api/clients/${clientId}`, Options);
    const json = await response.json();
    return json;
}

// delete client
export async function deleteClient(clientId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`${BASE_URL}/api/clients/${clientId}`, Options);
    const json = await response.json();
    return json;
}

// // sendEmail
// export async function sendEmail(formData: Object) {
//     try {
//         const Options = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         }
//         const response = await fetch(`${BASE_URL}/api/clients/sendemail`, Options);
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         return error;
//     }
// }