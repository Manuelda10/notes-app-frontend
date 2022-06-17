const ENDPOINT = 'https://notes-app-backend-1.herokuapp.com'

const updateNote = async (id, { note }) => {
    return fetch(`${ENDPOINT}/api/notes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(res => {
        if (!res.ok) throw new Error('Update is not ok')
        res.json()
    })
}

export default updateNote