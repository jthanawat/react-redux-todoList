import styled from 'styled-components';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

export const TasksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TaskWrapper = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding: 10px 20px;
  border-bottom: 1px solid #a8a8a8;
  color: #000;
  white-space: wrap;
  word-break: break-all;
  width: 600px;

  @media screen and (max-width: 768px) {
    width: 450px;
  }
`;

export const InputChecked = styled.input`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${({ $checked }) => ($checked ? '#000' : 'red')};
  border-radius: 3px;
  margin-right: 10px;
`;

export const TaskList = styled.div``;

export const ActionWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
export const EditTask = styled(FaRegEdit)`
  width: 20px;
  height: 20px; ;
`;
export const DeleteTask = styled(FaTrashAlt)`
  width: 20px;
  height: 20px; ;
`;
