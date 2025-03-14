import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    todoForm: {
      title: null,
      userId: 1,
      completed: false
    },
    editId: 0,
    isEdit: false,
  }),

  getters: {

  },
  
  actions: {
    async getAllTodos() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
      // console.log(data);
      this.todos = data;
    },

    async createTodo() {
      const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos', this.todoForm);
      // console.log(data);
      // this.getAllTodos();
      this.todos.push(data);
      this.todos.reverse();
      this.todoForm.title = null;
    },

    async deleteTodo(id) {
      const value = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      // console.log(value);
      this.todos = this.todos.filter(todo => {
        return todo.id !== id;
      });
    },

    async getTodo(id) {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      // console.log(data);
      this.todoForm.title = data.title;
      this.todoForm.userId = data.userId;
      this.todoForm.completed = data.completed;
      this.isEdit = true;
      this.editId = id;
    },

    async updateTodo(id) {
      const { data } = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, this.todoForm);
      // console.log(data);
      this.todos.push(data);
      this.todos.reverse();
      this.todoForm.title = null;
      this.isEdit = false;
    },

  }
})
