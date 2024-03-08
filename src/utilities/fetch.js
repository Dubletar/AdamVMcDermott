
export const getService = async (url) => {
    try {
        const request = await fetch(url);
        const result = request.json();

        return result;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const postService = async (url, requestObject) => {
    try {
        const defaultType = 'application/json';

        const request = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": defaultType,
                "Content-Type": defaultType,
                ...requestObject?.headers
            },
            body: {
                ...requestObject.body
            }
        })
    } catch (e) {
        console.log(e);
        return false;
    }
}