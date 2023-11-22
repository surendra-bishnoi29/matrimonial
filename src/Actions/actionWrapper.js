const Token =''
const helpers = {
    async httpGet (url) {
        try {
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Token ${Token}`
                }
            });
            return await data.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    },
    async httpPost (url, data) {
        try {
            const DATA = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Token ${Token}`
                },
                body: JSON.stringify(data),
            });
            return await DATA.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }
};
export default helpers;