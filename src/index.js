import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ToDo from './ToDo';
import createStore from './createStore';
import reducer from './reducer';
import Provider from './Provider';

ReactDOM.render(
    <Provider store={createStore(reducer, [])}>
        <ToDo title='Список задач'/>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
