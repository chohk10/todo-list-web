import { css } from '@emotion/react';

interface TodoCardProps {
  title: string;
  isCompleted: boolean;
  onToggle: () => void;
}

const cardStyles = css`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const checkboxStyles = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #666;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
`;

const titleStyles = (isCompleted: boolean) => css`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${isCompleted ? '#999' : '#333'};
  text-decoration: ${isCompleted ? 'line-through' : 'none'};
`;

export const TodoCard = ({ title, isCompleted, onToggle }: TodoCardProps) => {
  return (
    <div css={cardStyles}>
      <input
        type="checkbox"
        css={checkboxStyles}
        checked={isCompleted}
        onChange={onToggle}
      />
      <h3 css={titleStyles(isCompleted)}>{title}</h3>
    </div>
  );
}; 