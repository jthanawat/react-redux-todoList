import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../actions/index';

import { Header, AddTask, Task } from '../components';
import { Container } from '../globalStyes';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <AddTask />
      {tasks &&
        tasks.tasks &&
        tasks.tasks.length > 0 &&
        tasks.tasks
          .sort((a, b) => a.checked - b.checked)
          .map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
    </Container>
  );
};

export default TodoList;
