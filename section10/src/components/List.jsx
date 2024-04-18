import { useState, useMemo } from 'react'
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

    // const getAnalyzedData = () => {
    //     console.log("getAnalyzedData 호출!");
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter(
    //         (todo) => todo.isDone
    //     ).length;
    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     }
            // JS 객체 리터럴을 생성할 때 축약된 문법을 사용함
            // 객체 리터럴에서 키는 변수 이름이고, 값은 해당 변수의 값이다.
    // };

    // const {totalCount, doneCount, notDoneCount} =  getAnalyzedData();

    const {totalCount, doneCount, notDoneCount} =
        useMemo(() => {
            console.log("useMemo 호출!");
            const totalCount = todos.length;
            const doneCount = todos.filter(
                (todo) => todo.isDone
            ).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount
            }
            // JS 객체 리터럴을 생성할 때 축약된 문법을 사용함
            // 객체 리터럴에서 키는 변수 이름이고, 값은 해당 변수의 값이다.
    }, [todos]);
    // 의존성 배열 : deps


    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
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