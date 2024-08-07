import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import { CATEGORIES, TASKS as INITIAL_TASKS } from '../data';

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const filteredTasks =
    selectedCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;


