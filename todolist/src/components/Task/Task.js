import React from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, deleteTask, fetchTasks } from '../../actions/index';
import {
  TasksContainer,
  TaskWrapper,
  TaskList,
  ActionWrapper,
  EditTask,
  DeleteTask,
  TaskItem,
  InputChecked,
} from './Task.elements';
import { Button } from '../../globalStyes';

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleEditTask = async (index, id) => {
    const updatedTask = { ...tasks[index] };
    const prompt = await Swal.fire({
      title: 'Edit your task',
      input: 'text',
      inputValue: updatedTask.text,
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#ff6666',
      confirmButtonText: 'OK',
    });
    if (prompt.value) {
      Swal.fire('Success!', 'Your task has been edited.', 'success');
      const updatedTasks = { ...tasks[index], text: prompt.value };

      await dispatch(editTask(updatedTasks, id));
      await dispatch(fetchTasks());
    } else {
      return;
    }
  };

  const handleDeleteTask = async (id) => {
    const alert = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#ff6666',
      confirmButtonText: 'Yes, delete it!',
    });
    if (alert.isConfirmed) {
      Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
      const updatedTasks = await tasks.filter((task) => task.id !== id);
      await dispatch(deleteTask(updatedTasks, id));
      await dispatch(fetchTasks());
    } else {
      return;
    }
  };

  const handleCheckChange = async (e, index, id) => {
    const updatedTasks = { ...tasks[index], checked: !tasks[index].checked };

    await dispatch(editTask(updatedTasks, id));
    await dispatch(fetchTasks());
  };

  return (
    <>
      <TasksContainer>
        <TaskWrapper>
          <TaskItem>
            <TaskList>
              <InputChecked
                type="checkbox"
                $checked={task.checked}
                checked={task.checked}
                onChange={(e) => handleCheckChange(e, index, task.id)}
              />
              {task.text}
            </TaskList>
            <ActionWrapper>
              <Button $background="#9eb1bb" $margin="0 5px">
                <EditTask onClick={() => handleEditTask(index, task.id)} />
              </Button>
              <Button $background="#f98d85" $margin="0 5px">
                <DeleteTask onClick={() => handleDeleteTask(task.id)} />
              </Button>
            </ActionWrapper>
          </TaskItem>
        </TaskWrapper>
      </TasksContainer>
    </>
  );
};

export default Task;
