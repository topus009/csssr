import React from 'react';

  class ToDoComponent extends React.Component {
    state = {
      todoText: ''
    }

    render() {
      return (
        <div>
          <label>{this.props.title || 'Без названия'}</label>
          <div>
            <input
              value={this.state.todoText}
              placeholder="Название задачи"
              onChange={this.updateText}
            />
            <button onClick={this.addTodo}>Добавить</button>
            <ul>
              {this.props.todos.map((todo, idx) => <li>{todo}</li>)}
            </ul>
          </div>
        </div>
      )
    }

    updateText(e) {
      const { value } = e.target
      this.state.todoText = value;
    }

    addTodo() {
      this.props.addTodo(this.state.todoText)
      this.state.todoText = '';
    }
  }

export default ToDoComponent;
