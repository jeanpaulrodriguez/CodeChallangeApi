import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const {createTask} = useTasks()


  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <div className="bg-zinc=800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title")}
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Description"
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("description")}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
