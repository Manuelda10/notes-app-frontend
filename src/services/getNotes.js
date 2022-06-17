const API_URL = 'https://notes-app-backend-1.herokuapp.com'

export const getAllNotes = async () => {
    return fetch(`${API_URL}/api/notes/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}

export const getNotesByCategory = async (id) => {

    if (id === 'all') {
        return fetch(`${API_URL}/api/notes/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (!res.ok) throw new Error('Response get notes by category is not ok')
            return res.json()
        })
    }

    return fetch(`${API_URL}/api/categories/${id}/notes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response get notes by category is not ok')
        return res.json()
    })
}

export const getActiveNotes = async () => {

    return fetch(`${API_URL}/api/notes/active`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}

export const getArchivedNotes = async () => {
    return fetch(`${API_URL}/api/notes/archived`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}

export const getActiveNotesByCategory = async (id) => {
    if (id === 'all') {
        return fetch(`${API_URL}/api/notes/active`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (!res.ok) throw new Error('Response get notes by category is not ok')
            return res.json()
        })
    }

    return fetch(`${API_URL}/api/categories/${id}/notes/active`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}

export const getArchivedNotesByCategory = async (id) => {
    if (id === 'all') {
        return fetch(`${API_URL}/api/notes/archived`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (!res.ok) throw new Error('Response get notes by category is not ok')
            return res.json()
        })
    }
    
    return fetch(`${API_URL}/api/categories/${id}/notes/archived`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}