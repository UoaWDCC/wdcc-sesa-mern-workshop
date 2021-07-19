import axios from 'axios';

const BASE_URL = "http://localhost:3001";

async function exampleCall() {
    const url = `${BASE_URL}/api`;

    try {
        const response = await axios.get(url);
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        if (error.response) {
            return {
                success: false,
                error: error.response.data
            }
        } else {
            return {
                success: false,
                error: `Unknown error: ${JSON.stringify(error)}`
            }
        }
    }
}

export default exampleCall;