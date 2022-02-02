import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import styled from "styled-components";
import { Todo } from "../types/types";
import TodoView from "../components/TodoView";

const StyledForm = styled.div`
  background-color: "red";
  form {
    display: inline-flex;
    height: 2rem;
    input[type="text"] {
      padding: 0 2rem 0 0.5rem;
    }
    button {
      background-color: ${(props) => props.theme.MainColor.violet};
      color: ${(props) => props.theme.MainColor.snow};
      border: none;
    }
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
  }
`;

const TodeView = styled.ul`
  padding: 0;
  li {
    margin-bottom: ${(props) => props.theme.Margin.xs};
    list-style: none;
  }
`;

function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const IdRef = useRef<number>(0);
  // Todo 추가
  const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    todo &&
      setTodoList([
        ...todoList,
        {
          id: IdRef.current,
          todo: todo,
          completed: false,
          created: `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date()
            .getSeconds()
            .toLocaleString("ko-kr")}`,
        },
      ]);
    inputRef.current?.focus();
    setTodo("");
    IdRef.current++;
  };
  // Todo 삭제
  const onDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const targetId = Number(e.currentTarget.dataset.id);
    const filterdList = todoList.filter((todo) => todo.id !== targetId);
    setTodoList(filterdList);
  };
  // Todo 완료처리
  const onCompletedTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const targetId = Number(e.currentTarget.dataset.id);
    const completedList = [...todoList];
    completedList.forEach((todo) => {
      if (todo.id === targetId) {
        todo.completed = true;
      }
    });
    setTodoList(completedList);
  };
  // 완료항목만 보기
  const onCheckedInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <StyledForm>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            value={search}
            placeholder="검색어를 입력해주세요"
          />
        </form>
      </StyledForm>

      <CheckBox>
        <label htmlFor="completedCheck">완료된 항목만 보기</label>
        <input type="checkbox" onChange={onCheckedInput} id="completedCheck" />
      </CheckBox>

      <TodeView>
        {checked
          ? todoList
              .filter((e) => e.completed === true)
              .map((el) => {
                return <TodoView key={el.id} todo={el} onDeleteTodo={onDeleteTodo} onCompletedTodo={onCompletedTodo} />;
              })
          : todoList
              .filter((todo) => {
                if (search === "") {
                  return todo;
                } else if (todo.todo.toLowerCase().includes(search.toLowerCase())) {
                  return todo;
                } else {
                  return null;
                }
              })

              .map((el: Todo) => {
                return <TodoView key={el.id} todo={el} onDeleteTodo={onDeleteTodo} onCompletedTodo={onCompletedTodo} />;
              })}
      </TodeView>

      <StyledForm>
        <form onSubmit={onSubmitTodo}>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
            ref={inputRef}
            value={todo}
            placeholder="할 일을 입력해주세요"
          />
          <button type="submit">추가</button>
        </form>
      </StyledForm>
    </>
  );
}

export default TodoList;
