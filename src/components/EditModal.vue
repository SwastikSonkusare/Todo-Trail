<template>
  <div
    v-if="$store.state.showEdit"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white p-20 rounded-lg shadow-md">
      <h3 class="text-4xl mb-5">Edit Task</h3>
      <div class="flex flex-col sm:flex-row justify-between gap-8">
        <input
          class="p-4 border border-gray-300 text-2xl hover:outline-none"
          v-model="this.editedTask.title"
          type="text"
        />
        <div class="flex gap-3">
          <button
            @click="saveTask"
            class="bg-green-500 text-white px-10 py-2 rounded text-2xl cursor-pointer"
          >
            Save
          </button>
          <button
            @click="closeEditModal"
            class="bg-gray-500 text-white px-10 py-2 rounded text-2xl cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "EditModal",

  data() {
    return {
      editedTask: { ...this.$store.state.editTask },
    };
  },

  methods: {
    ...mapMutations(["updateTask", "closeModal"]),

    saveTask() {
      const newTask = {
        id: this.$store.state.editTask.id,
        title: this.editedTask.title,
        completed: this.$store.state.editTask.completed,
        dueDate: this.$store.state.editTask.dueDate,
      };

      this.updateTask(newTask);
    },

    closeEditModal() {
      this.closeModal();
    },
  },
};
</script>
