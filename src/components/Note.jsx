import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import binicon from '../assets/static/trashbin.png';
import notesimg from '../assets/static/notes.png';
import { NotesApp } from './styled/notestyle';
import { Title } from './styled/notestyle';
import { DeleteButton } from './styled/notestyle';
import { Textarea } from './styled/notestyle';
import { Form } from './styled/notestyle';
import { Notes } from './styled/notestyle';
import { List } from './styled/notestyle';
import { AddButton } from './styled/notestyle';

const Note = () => {
    const [note, setNote] = useState([ {text: ''}]);
    const [noteValue, setNoteValue] = useState('');

    useEffect(() => {
        const data = localStorage.getItem('notes');
        if (data != null) {
            setNote(JSON.parse(data));
        } else {
            setNote([])
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(note))
    }, [note]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(noteValue);
        setNoteValue('');
    }
    
    const addNote = (text) => {
        const updatedNote = [...note, { text }];
        setNote(updatedNote);
    }

    const handleDelete = (notes) => {
        const filterNote = note.filter(currentNote => ( 
        currentNote !== notes ));
        setNote(filterNote);
    }


    
    return (
        

        <NotesApp>
            <Title>Notes
                <img src={notesimg} alt="delete" style={{height: '35px'}}></img>
            </Title>
            <Form onSubmit={handleSubmit}>
                <Textarea
                        placeholder='Type new note here' 
                        value={noteValue} 
                        onChange={key => setNoteValue(key.target.value)}
                />

                <AddButton type='submit'>Add</AddButton>
            </Form>
            <List>
                {
                    note.map((notes, index) => (
                        <Notes key={index}>
                            <span>{notes.text}</span>
                            <DeleteButton onClick={() => handleDelete(notes)}>
                                <img src={binicon} alt="delete" style={{height: '15px'}}></img>
                            </DeleteButton>
                        </Notes>
                    ))
                }
            </List>
        </NotesApp>
    )
}



export default Note;