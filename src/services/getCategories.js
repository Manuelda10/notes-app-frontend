const API_URL = 'https://notes-app-backend-1.herokuapp.com'

export const getAllCategories = async () => {
    return fetch(`${API_URL}/api/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}

export const getCategoriesById = async (id) => {
    return fetch(`${API_URL}/api/notes/${id}/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}