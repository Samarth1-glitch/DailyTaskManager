import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

export default function AllTasks() {
  const { tasks, toggleComplete } = useTasks();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Tasks</h2>
      {tasks.length ? tasks.map(task => (
        <TaskCard key={task.id} task={task} toggleComplete={toggleComplete} />
      )) : <p>No tasks available!</p>}
    </div>
  );
}
