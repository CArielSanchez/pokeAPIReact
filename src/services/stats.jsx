import axios from "axios";

export async function getStats() {
    try {
        const info = (url) => {
            return axios.get(url).then(res => res)
        }
        const response = await axios.get(
            `${import.meta.env.VITE_APP_API_URL
            }/stat`
        );
        let stats = []
        for (let i = 0; i < response.data.count; i++) {
            let url = response.data.results[i].url
            let stat = await info(url)
            stats.push(stat.data)
        }
        response.data.results = stats
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
