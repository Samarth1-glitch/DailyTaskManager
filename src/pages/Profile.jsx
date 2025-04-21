import { useTasks } from '../context/TaskContext';

export default function Profile() {
  const { tasks } = useTasks();
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">👤 Your Profile</h2>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {tasks.length - completed}</p>
    </div>
  );
}
