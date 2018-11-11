import React from 'react';
import PropTypes from 'prop-types';

  class ToDoComponent extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
            todoText: ''
          }
      }
    render() {
        const {
            title,
            todos,
        } = this.props;
        const {todoText} = this.state;
      return (
        <div>
          <label>{title || 'Без названия'}</label>
          <div>
            <input
              value={todoText}
              placeholder="Название задачи"
              onChange={this.updateText}
            />
            <button onClick={this.addTodo}>Добавить</button>
            <ul>
              {
                  todos.map((todo, idx) =>
                    <li key={`key_${idx}`}>{todo}</li>
                    )
              }
            </ul>
          </div>
        </div>
      )
    }

    updateText = (e) => {
      const {value: todoText} = e.target;
      this.setState({todoText});
    }

    addTodo = () => {
      this.props.addTodo(this.state.todoText);
      this.setState({todoText: ''});
    }
  }

ToDoComponent.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
};

export default ToDoComponent;
