import { css } from '@emotion/react';

interface TodoCardProps {
  title: string;
  isCompleted: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const cardStyles = css`
  background-color: white;
  border-radius: 8px;
  padding: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const contentStyles = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const checkboxStyles = css`
  width: 20px;
  height: 20px;
  border: 2px solid #666;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
`;

const titleStyles = (isCompleted: boolean) => css`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  color: ${isCompleted ? '#999' : '#333'};
  text-decoration: ${isCompleted ? 'line-through' : 'none'};
`;

const deleteButtonStyles = css`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  transition: color 0.2s ease;

  &:hover {
    color: #f44336;
  }
`;

export const TodoCard = ({ title, isCompleted, onToggle, onDelete }: TodoCardProps) => {
  return (
    <div css={cardStyles}>
      <div css={contentStyles}>
        <input
          type="checkbox"
          css={checkboxStyles}
          checked={isCompleted}
          onChange={onToggle}
        />
        <h3 css={titleStyles(isCompleted)}>{title}</h3>
      </div>
      <button css={deleteButtonStyles} onClick={onDelete}>
        ×
      </button>
    </div>
  );
}; 