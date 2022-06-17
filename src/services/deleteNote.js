const API_URL = 'https://notes-app-backend-1.herokuapp.com'

const deleteNote = async (id) => {
    return fetch(`${API_URL}/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Delete is not ok')
        res.json()
    })
}

export default deleteNote