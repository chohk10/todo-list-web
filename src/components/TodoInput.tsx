import { css } from '@emotion/react';
import { useState, KeyboardEvent } from 'react';

interface TodoInputProps {
  onAdd: (title: string) => void;
}

const containerStyles = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 0px;
`;

const inputContainerStyles = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 14px;
  padding-top: 0px;
  display: flex;
  gap: 10px;
`;

const inputStyles = css`
  flex: 1;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #2196F3;
  }
`;

const buttonStyles = css`
  width: 46px;
  height: 46px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1976D2;
  }
`;

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div css={containerStyles}>
      <div css={inputContainerStyles}>
        <input
          css={inputStyles}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="새로운 할 일을 입력하세요"
        />
        <button css={buttonStyles} onClick={handleSubmit}>
          +
        </button>
      </div>
    </div>
  );
}; 