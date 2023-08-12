<template>
  <ul class="list-none flex flex-col gap-10">
    <li
      v-for="task in filteredTasks"
      :key="task.id"
      :class="[
        'flex justify-around items-center text-2xl no-underline  p-3 gap-8',
        {
          'border-solid border-red-500 border-2':
            isTaskPastDue(task) && !task.completed,
        },
      ]"
    >
      <input
        type="checkbox"
        v-model="task.completed"
        @change="markCompleteTask(task)"
      />
      <h1 class="text-3xl text-white w-[max-content]">
        {{ task.title }}
      </h1>

      <div
        class="flex flex-col items-end sm:flex-row justify-start sm:items-center gap-8"
      >
        <button
          class="bg-blue-500 text-white px-5 py-3 rounded text-3xl cursor-pointer"
          @click="editModal(task)"
        >
          Edit
        </button>
        <button
          class="bg-red-500 text-white px-5 py-3 rounded text-3xl cursor-pointer"
          @click="deleteModal(task)"
        >
          Delete
        </button>
        <button
          class="bg-green-500 text-white px-5 py-3 rounded text-3xl cursor-pointer"
          @click="duplicate(task)"
        >
          Duplicate
        </button>
        <span v-if="task.dueDate" class="text-3xl text-white w-[max-content]"
          >Due: {{ task.dueDate }}</span
        >
      </div>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TaskList",
  props: ["filteredTasks"],

  methods: {
    ...mapMutations([
      "markComplete",
      "showEditModal",
      "duplicateTask",
      "showDeleteModal",
    ]),

    editModal(task) {
      this.showEditModal(task);
    },

    deleteModal(task) {
      this.showDeleteModal(task);
    },

    duplicate(task) {
      this.duplicateTask(task);
    },
    isPastDueTask(task) {
      this.isPastDue(task);
    },

    markCompleteTask(task) {
      this.markComplete(task);
    },
  },

  computed: {
    ...mapGetters(["isTaskPastDue"]),
  },
};
</script>
