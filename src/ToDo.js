import connect from './connect';
import ToDoComponent from './ToDoComponent';
import {addTodo} from './actions';

const ToDo = connect(state => ({
    todos: state,
}), dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
}))(ToDoComponent)

export default ToDo;
