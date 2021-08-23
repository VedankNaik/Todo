import * as api from "../api";
export const readTodos = async () => {
  try {
    const { data } = await api.readTodos();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = async (todo) => {
  try {
    const { data } = await api.createTodo(todo);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (id, todo) => {
  try {
    const { data } = await api.updateTodo(id, todo);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await api.deleteTodo(id);
    return data;
  } catch (error) {
    console.error(error);
  }
};
