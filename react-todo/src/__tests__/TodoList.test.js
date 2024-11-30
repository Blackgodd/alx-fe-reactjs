import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better DOM assertions
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the initial todos', () => {
    render(<TodoList />);

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo when the add button is clicked', () => {
    render(<TodoList />);

    fireEvent.click(screen.getByText('Add Todo'));

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles the completion status of a todo when clicked', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo when the delete button is clicked', () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText('Delete')[0]; // Get the delete button for the first todo
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
