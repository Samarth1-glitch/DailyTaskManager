export default function TaskCard({ task, toggleComplete }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-3 flex justify-between items-center">
      <div>
        <h3 className={`font-bold ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">Due: {task.date}</p>
      </div>
      <button
        onClick={() => toggleComplete(task.id)}
        className="text-sm bg-green-500 text-white px-3 py-1 rounded"
      >
        {task.completed ? 'Undo' : 'Done'}
      </button>
    </div>
  );
}
