import { useState } from 'react';
import { v4 as uuid } from 'uuid';


const CreateTodoModal = ({ setTodoList }) => {
    const [defaultVal, setDefaultVal] = useState('');
    let obj = {};

    const handleChange = (e) => {
        setDefaultVal(e.target.value);
    }

    const addToTodoList = () => {
        if (defaultVal) {
            obj.name = defaultVal;
            const unique_id = uuid();
            obj.id = unique_id.slice(0, 8);
            obj.state = 'todo';
        }

        if (obj.hasOwnProperty('id')) {
            setDefaultVal('');
            setTodoList(prev => [...prev, obj]);
        }
    }

    return (
        <div className='todo_input_element'>
            <input type='text' name='name' value={defaultVal} placeholder='Enter Your TODO' className='todo_list_input' autoFocus={true} onChange={handleChange}></input>
            <button type="button" className="btn btn-primary" id='todo_add_btn' onClick={addToTodoList}>+ Add Todo</button>
        </div>
    )
}

export default CreateTodoModal;