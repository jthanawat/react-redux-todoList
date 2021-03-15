import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from './AddTask.elements';
import { Button } from '../../globalStyes';
import { addTask, fetchTasks } from '../../actions/index';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
    } else {
      const task = {
        text,
        checked: false,
      };

      await dispatch(addTask(task));
      setText('');
      await dispatch(fetchTasks());
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task..."
        />
        <Button $background="#000">Submit</Button>
      </Form>
    </>
  );
};

export default AddTask;
