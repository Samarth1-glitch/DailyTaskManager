import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

export default function Home() {
  const { tasks, toggleComplete } = useTasks();
  const today = new Date().toISOString().split('T')[0];
  const todaysTasks = tasks.filter(t => t.date === today);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Today's Tasks</h2>
      {todaysTasks.length ? todaysTasks.map(task => (
        <TaskCard key={task.id} task={task} toggleComplete={toggleComplete} />
      )) : <p>No tasks for today!</p>}
    </div>
  );
}
