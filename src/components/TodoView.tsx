import React from "react";
import styled from "styled-components";
import { Todo } from "../types/types";

const Id = styled.span`
  margin-right: ${(props) => props.theme.Margin.m};
  color: ${(props) => props.theme.GrayScale.l5};
`;
const TodoText = styled.span`
  margin-right: ${(props) => props.theme.Margin.m};
  color: ${(props) => props.theme.MainColor.violet};
`;
const Dates = styled.span`
  margin-right: ${(props) => props.theme.Margin.m};
  color: ${(props) => props.theme.GrayScale.l3};
  font-size: ${(props) => props.theme.fontSize.xs};
  letter-spacing: -0.05rem;
`;
const Btn = styled.button`
  margin-right: ${(props) => props.theme.Margin.xs};
  background-color: ${(props) => props.theme.MainColor.purple};
  color: ${(props) => props.theme.MainColor.snow};
  border: none;
  &.completed {
    background-color: ${(props) => props.theme.MainColor.kobi};
    color: ${(props) => props.theme.MainColor.snow};
    text-decoration: line-through;
  }
`;

interface Props {
  todo: Todo;
  onDeleteTodo: React.MouseEventHandler<HTMLButtonElement>;
  onCompletedTodo: React.MouseEventHandler<HTMLButtonElement>;
}

const TodoView: React.FC<Props> = ({ todo, onDeleteTodo, onCompletedTodo }) => {
  return (
    <li key={todo.id}>
      <Id>{todo.id}</Id>

      <TodoText>{todo.todo}</TodoText>
      <Dates>{todo.created}</Dates>
      {todo.completed ? (
        <Btn className="completed">처리완료</Btn>
      ) : (
        <Btn data-id={todo.id} onClick={onCompletedTodo}>
          완료하기
        </Btn>
      )}
      <Btn data-id={todo.id} onClick={onDeleteTodo}>
        삭제
      </Btn>
    </li>
  );
};

export default TodoView;
