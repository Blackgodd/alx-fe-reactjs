import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './components/TodoList';

test('renders the initial todos', () => {
  render(<TodoList />);

  // Verify initial todos are displayed
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);

  // Simulate adding a new todo
  const input = screen.getByPlaceholderText('Add a new todo...');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  // Verify new todo is displayed
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo completion status', () => {
  render(<TodoList />);

  // Find and toggle the first todo
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);

  // Verify the todo is marked as completed
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  // Toggle it back to incomplete
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);

  // Delete the first todo
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);

  // Verify the todo is removed
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

export default App