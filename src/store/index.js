// // store/index.js
// import Vue from "vue";
// import Vuex from "vuex";

import { createStore } from "vuex";

// Vue.use(Vuex);

const store = createStore({
  state: {
    tasks: [],
    showEdit: false,
    showDelete: false,
    editTask: { id: null, title: "", completed: false, dueDate: null },
    deleteTaskId: null,
  },
  mutations: {
    addTask(state, task) {
      state.tasks = [task, ...state.tasks];
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = { ...updatedTask };
        state.showEdit = false;
      }
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.tasks.splice(index, 1);
        state.showDelete = false;
      }
    },

    closeModal(state) {
      state.showEdit = false;
      state.showDelete = false;
      state.editTask = { id: null, title: "", completed: false, dueDate: null };
      state.deleteTaskId = null;
    },

    markComplete(task) {
      task.completed = true;
    },
    showEditModal(state, task) {
      state.showEdit = true;
      state.editTask = { ...task };
    },

    duplicateTask(state, task) {
      const duplicateTask = { ...task, id: Date.now() };

      state.tasks.push(duplicateTask);
    },

    showDeleteModal(state, task) {
      state.showDelete = true;
      state.deleteTaskId = task.id;
    },

    // isPastDue(state, task) {
    //   // console.log(task.completed);
    //   console.log(task);

    //   console.log(pastDueTask.completed);

    //   if (pastDueTask.dueDate && pastDueTask.completed == false) {
    //     const dueDate = new Date(pastDueTask.dueDate);
    //     const currentDate = new Date();
    //     console.log(dueDate < currentDate);
    //     console.log(currentDate);
    //     if (dueDate < currentDate) return true;
    //   }
    //   return false;
    // },
  },
  getters: {
    isTaskPastDue: (state) => (task) => {
      const pastDueTask = state.tasks.find((t) => t.id === task.id);

      if (pastDueTask.dueDate && !pastDueTask.completed) {
        const dueDate = new Date(pastDueTask.dueDate);
        const currentDate = new Date();
        return dueDate < currentDate;
      }
      return false;
    },
  },
});

export default store;
