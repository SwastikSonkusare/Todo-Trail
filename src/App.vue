<template>
  <div class="relative bg-cover bg-no-repeat bg-center h-96 main-wrapper">
    <div
      class="p-8 px-0 flex flex-col gap-12 min-h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8 max-w-60rem"
    >
      <h1 class="text-center text-7xl text-gray-300 w-[max-content] sm:w-full">
        To Do List
      </h1>

      <Form />

      <TaskList :filteredTasks="filteredTasks" />

      <!-- Completed Tasks -->
      <h2 class="text-center text-5xl text-gray-300">Completed Tasks</h2>
      <ul class="list-none flex flex-col gap-10">
        <li
          class="items-start text-4xl no-underline text-white"
          v-for="task in completedTasks"
          :key="task.id"
        >
          {{ task.title }}
        </li>
      </ul>

      <EditModal @update="updateTask" @close="closeModal" />

      <DeleteModal @delete="deleteTask" @close="closeModal" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Form from "./components/Form.vue";
import TaskList from "./components/TaskList.vue";
import EditModal from "./components/EditModal.vue";
import DeleteModal from "./components/DeleteModal.vue";

export default {
  name: "App",
  components: {
    Form,
    TaskList,
    EditModal,
    DeleteModal,
  },

  computed: {
    ...mapState(["tasks"]),

    filteredTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter((task) => task.completed);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: "Josefin Sans", sans-serif;
}

html {
  min-height: 100vh;
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #161722;
}

.main-wrapper {
  position: relative;
  background-image: url("./assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 300px;
}
</style>
