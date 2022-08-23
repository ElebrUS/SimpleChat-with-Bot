import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useHttp } from '../../hooks/http.hook';
import { useGetOnePersonQuery, useCreateMessageMutation } from '../../api/apiSlice';

import './chatForm.scss';

const ChatForm = () => {

    const { request } = useHttp();
    const [createMessage] = useCreateMessageMutation();

    const setDate = () => {
        const MyDate = new Date();
        let MyDateString;

        MyDate.setDate(MyDate.getDate());

        MyDateString = ('0' + MyDate.getDate()).slice(-2) + '/'
            + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '/'
            + MyDate.getFullYear() + ' ' + ('0' + MyDate.getHours()).slice(-2) + ':'
            + ('0' + MyDate.getMinutes()).slice(-2);

        return MyDateString;
    }

    const [persMes, setPers] = useState({
        "text": "",
        "sender": "me",
        "date": setDate()
    });

    const body = {
        "message": []
    };

    const { activePerson } = useSelector(state => state.person);
    
    const {
        data,
        isFetching,
        isError
    } = useGetOnePersonQuery(activePerson);

    if (isFetching) {
        return <h5>Загрузка</h5>;
    } else if (isError) {
        return <h5>Ошибка загрузки</h5>
    }

    const cloneData = JSON.parse(JSON.stringify(data));
    const { message } = cloneData;

    const onValueChange = (e) => {
        setPers(() => ({ ...persMes, text: e.target.value }))
    }

    const answerChatBot = async () => {
        const answer = await request('https://api.chucknorris.io/jokes/random')
            .then(data => ({
                "text": data.value,
                "sender": "other",
                "date": setDate()
            }));
        message.push(answer);
        body.message = message;
        createMessage({
            mess: body,
            id: activePerson
        });
    }


    const onSubmit = (e) => {
        e.preventDefault();
        setPers(() => ({ ...persMes, date: setDate() }))
        message.push(persMes);
        body.message = message;
        createMessage({
            mess: body,
            id: activePerson
        });
        setPers({
            "text": "",
            "sender": "me",
            "date": setDate()
        });
        setTimeout(answerChatBot, 10000);
    }

    return (
        <div className="chatForm">
            <form className="chatForm_form"
                onSubmit={onSubmit}>
                <div className="chatForm_form-input">
                    <input
                        type="text"
                        placeholder='Type your message'
                        value={persMes.text}
                        onChange={onValueChange} />
                    <button type="submit" />
                </div>
            </form>
        </div>
    )
}

export default ChatForm;