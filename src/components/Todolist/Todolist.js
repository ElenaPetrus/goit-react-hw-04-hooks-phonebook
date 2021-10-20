import React from "react";
import PropTypes from "prop-types";
import s from "./Todolist.module.css";

const Todolist = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.Todolist}>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        //   className={classNames('TodoList__item', {
        //     'TodoList__item--completed': completed,
        //   })}
      >
        <input
          type="checkbox"
          className={s.TodoList__checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={s.TodoList__text}>{text}</p>
        <button
          type="button"
          className={s.TodoList__btn}
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

Todolist.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export { Todolist };
