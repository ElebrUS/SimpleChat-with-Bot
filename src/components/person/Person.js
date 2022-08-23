import PersonInfo from '../personInfo/PersonInfo';
import PersonContact from '../personContact/PersonContact';

import './person.scss';

const Person = () => {
    return(
        <div className="person">
            <PersonInfo/>
            <PersonContact/>
        </div>
    )
}

export default Person;