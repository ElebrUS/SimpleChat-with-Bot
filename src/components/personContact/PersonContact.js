import { useSelector } from 'react-redux';

import { useGetPersonQuery } from '../../api/apiSlice';
import ContactItem from '../contactItem/ContactItem';

import Spinner from '../spinner/Spinner';
import './personContact.scss';

const PersonContact = () => {

    const {
        data: persons = [],
        isLoading,
        isError
    } = useGetPersonQuery();

    const {filterPerson} = useSelector(state => state.person)
    
    const filteredPerson = (str) => {
        const filteredPerson = persons.slice();
        if(str === '') {
            return filteredPerson
        }else {
            return filteredPerson.filter(item => {
                const reg = new RegExp(str, 'gi')
                return item.name.search(reg) > -1
            })
        }
    }

    const filteredPersonArr = filteredPerson(filterPerson);

    const renderItems = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Contact пока нет</h5>
        }

        return arr.map(({ id, ...props }) => {
            return <ContactItem
                key={id}
                id={id}
                {...props}
                 />
        })
    }
    const items = renderItems(filteredPersonArr);

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <h5>Ошибка загрузки</h5>
    }

    return (
        <div className="personContact">
            <h3 className='personContact_title'>Chats</h3>
            <ul className='personContact_list'>
                {items}
            </ul>
        </div>
    )
}
export default PersonContact;