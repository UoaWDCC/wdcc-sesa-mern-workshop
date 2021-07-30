import axios from 'axios';

const BASE_URL = "http://localhost:3001";
const API_URL = `${BASE_URL}/api/todos`

export async function getTodos() {
    try {
        const response = await axios.get(API_URL);
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

export async function updateTodo(todo) {
    try {
        const response = await axios.put(API_URL, todo);
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

export async function createTodos(todos) {
    try {
        const response = await axios.post(API_URL, todos);
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

export async function exampleCall() {
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