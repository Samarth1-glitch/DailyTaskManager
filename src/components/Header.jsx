import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">📝 Task Manager</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/add">Add Task</Link>
        <Link to="/tasks">All Tasks</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}
