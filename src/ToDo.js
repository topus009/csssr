import connect from './connect';
import ToDoComponent from './ToDoComponent';
import {addTodo} from './actions';

const ToDo = connect(todos => ({
    todos,
}), dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
}))(ToDoComponent)

export default ToDo;
