import Chat from '../chat/Chat';
import Person from '../person/Person';

import './app.scss';

function App() {
    return (
        <div className="app">
            <Person/>
            <Chat/>
        </div>
    );
}

export default App;
