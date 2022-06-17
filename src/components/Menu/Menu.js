import React, {useEffect, useState} from 'react'
import Modal from '../Modal/Modal'
import { NoteCreate } from '../NoteEditCreate/NoteEditCreate'
import { getAllCategories } from '../../services/getCategories'
import { ReactComponent as AddIcon } from '../../assets/add.svg'
import { ReactComponent as ArchivedIcon } from '../../assets/archived.svg'
import { ReactComponent as UnarchivedIcon } from '../../assets/unarchived.svg'
import './index.css'

const Menu = ({handleCreateNote, handleNotes, handleNotesByCategory, active, handleActive}) => {
    const [showModal, setShowModal] = useState(false)
    const [categories, setCategories] = useState([])

    const handleFilters = () => {
      getAllCategories().then(data => setCategories(data))
    }
    
    const handleOpenModal = () => {
        setShowModal(true)
    } 
    const handleCloseModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        handleFilters() //Get all filters updated
    }, [handleNotes, handleNotesByCategory])

    return (
        <div className='menu'>
            {active === true ? <h2>Active notes</h2> : <h2>Archived notes</h2>}

            <div className='menu-controllers'>
                <div className='menu-buttons'>
                    <button className='menu-btn archive-btn' onClick={() => handleActive(!active)}>{
                        active === true
                            ? 'See archived notes'
                            : 'See active notes'
                    } {
                        active === true
                            ? <ArchivedIcon className='icon icon-archive'></ArchivedIcon>
                            : <UnarchivedIcon className='icon icon-archive'></UnarchivedIcon>
                    }
                    </button>
                    {
                        active && <button className='menu-btn add-btn' onClick={handleOpenModal}>Create new note <AddIcon className='icon icon-add' ></AddIcon> </button>
                    }
                    
                </div>
                
                <div className='manu-filter'>
                    <label>Category filter: </label>
                    <select name='filter'
                        onChange={e => handleNotesByCategory(e.target.value, active)}
                        className='filter'
                        defaultValue='all'>
                        <option value='all'>All</option>
                        {
                            categories.map(cat => {
                                return (<option key={cat.id} value={cat.id} >{cat.name}</option>)
                            })
                        }
                    </select>
                </div>
            </div>
            
            {showModal && <Modal><NoteCreate handleCreateNote={handleCreateNote} onClose={handleCloseModal}></NoteCreate> </Modal>}
        </div>
    )
}

export default Menu