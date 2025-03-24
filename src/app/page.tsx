"use client";

import { css } from '@emotion/react';
import { TodoCard } from '@/components/TodoCard';
import { TodoInput } from '@/components/TodoInput';
import { useState, useEffect } from 'react';

const containerStyles = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const listStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const STORAGE_KEY = 'todos';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 초기 데이터 로드
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // 로컬 스토리지에서 데이터 확인
        const savedTodos = localStorage.getItem(STORAGE_KEY);
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos));
          return;
        }

        // 로컬 스토리지에 데이터가 없으면 API에서 가져오기
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const data = await response.json();
        const newTodos = data.map((todo: any) => ({
          id: todo.id,
          title: todo.title,
          isCompleted: todo.completed
        }));
        setTodos(newTodos);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
      } catch (error) {
        console.error('할 일을 불러오는데 실패했습니다:', error);
      }
    };

    fetchTodos();
  }, []);

  // todos가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const handleAdd = (title: string) => {
    const newTodo: Todo = {
      id: Math.max(...todos.map(todo => todo.id), 0) + 1,
      title,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div css={containerStyles}>
      <div css={listStyles}>
        {todos.map(todo => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            onToggle={() => handleToggle(todo.id)}
          />
        ))}
      </div>
      <TodoInput onAdd={handleAdd} />
    </div>
  );
}
