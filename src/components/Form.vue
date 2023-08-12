<template>
  <form
    class="flex justify-start flex-wrap md:flex-nowrap sm:justify-around sm:items-center gap-10"
    @submit="onSubmit"
  >
    <input
      v-model="task.title"
      type="text"
      placeholder="Enter a new task"
      required
      class="p-6 border border-gray-300 text-2xl hover:outline-none"
    />
    <input
      v-model="task.dueDate"
      type="date"
      class="p-6 text-2xl hover:outline-none"
    />

    <button
      class="p-6 bg-blue-300 text-black border-none cursor-pointer text-2xl w-[max-content]"
      type="submit"
    >
      Add Task
    </button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",

  data() {
    return {
      task: { title: "", completed: false, dueDate: null },
    };
  },

  methods: {
    ...mapMutations(["addTask"]),

    onSubmit(e) {
      e.preventDefault();

      if (this.task.title.trim() !== "" && this.task.dueDate !== null) {
        const newTask = {
          id: Math.floor(Math.random() * 10 + 1),
          title: this.task.title,
          completed: this.task.completed,
          dueDate: this.task.dueDate,
        };

        this.task.title = "";
        this.task.completed = false;
        this.task.dueDate = null;

        this.addTask(newTask);
      } else {
        alert("Title or DueDate is missing");
      }
    },
  },
};
</script>
