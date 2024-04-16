import { useState } from 'react'
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        } else {
            return todos.filter(todo => todo.content.toLowerCase().includes(search.toLowerCase()));
        }
    };

    const filteredData = getFilteredData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input
                value={search}
                onChange={onChange}
                placeholder="검색어를 입력하세요" />
            <div className="todos_wrapper">
            {filteredData.map((todo) => {
                return <TodoItem 
                            {...todo}
                            key={todo.id}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
            })}
            </div>
        </div>
    );
};

export default List;