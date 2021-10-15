import axios from 'axios'
import React from 'react'
import { Command, CommandContainer, TrashIcon, UpdateIcon } from './styles/CommandNav.style'

const CommandNav = ({item}) => {
    
    const handleDelete = () => {
        axios.delete('/food', {
            data: item
        }).catch(err => console.log(err.body))
    }
    
    return (
        <CommandContainer>
            <Command >
                <UpdateIcon/>
            </Command>
            <Command onClick={handleDelete}>
                <TrashIcon/>
            </Command>
        </CommandContainer>
    )
}

export default CommandNav
