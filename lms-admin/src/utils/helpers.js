import { BASE_URL } from "./api";

export function convertJsonToObjectWithGrouping(jsonString) {
    try {
        const jsonObject = JSON.parse(jsonString);
        const groupedObject = {};

        for (const key in jsonObject) {
            const baseKey = key.replace(/[0-9]/g, ''); // Remove numbers from the key
            if (!groupedObject[baseKey]) {
                groupedObject[baseKey] = [];
            }
            groupedObject[baseKey].push(jsonObject[key]);
        }

        return groupedObject;
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
}

export function convertJsonToObject(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
}
