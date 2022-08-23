import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterPerson } from '../person/personSlice';

import person from '../../assets/img/person.png';
import './personInfo.scss';

const PersonInfo = () => {

    const [filterText, setFilterText] = useState('');
    const dispatch = useDispatch();

    const onValueChange = (e) => {
        setFilterText(() => (e.target.value));
        dispatch(filterPerson(e.target.value));
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="person-info" onSubmit={onSubmit}>
            <div className="person-info_img">
                <img src={person} alt="Person" />
            </div>
            <form action="#" className="person-info_form">
                <div className="castom-input">
                    <input 
                    type="text" 
                    placeholder='Search or start new chat'
                    value={filterText}
                    onChange={onValueChange} />
                </div>
            </form>
        </div>
    )
}

export default PersonInfo;