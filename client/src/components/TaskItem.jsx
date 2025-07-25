import {Button} from "../components/ui/button"

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-2 border rounded">
      <div
        onClick={onToggle}
        className={`flex-1 cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </div>
      <Button
      variant="destructive"
      onClick={onDelete}  
      className="text-red-100 hover:underline ml-4 mr-2">
        Delete
      </Button>
      <Button 
      onClick={onToggle} 
      variant="default"
      
      >Completed</Button>
    </li>
  );
}

export default TaskItem;
