"use client";

import { css } from '@emotion/react';
import { TodoCard } from '@/components/TodoCard';
import { useState } from 'react';

const containerStyles = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
`;

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "첫 번째 할 일",
      isCompleted: false
    },
    {
      id: 2,
      title: "두 번째 할 일",
      isCompleted: true
    }
  ]);

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  return (
    <div css={containerStyles}>
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
          onToggle={() => handleToggle(todo.id)}
        />
      ))}
    </div>
  );
}
