<template>
  <div
    v-if="$store.state.showDelete"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div
      class="bg-white p-20 rounded-lg shadow-md text-center flex flex-col md:flex-row sm:items-center gap-6"
    >
      <h3 class="text-4xl mb-5">Delete Task</h3>
      <p class="text-3xl">Are you sure you want to delete this task?</p>
      <button
        class="bg-red-500 text-white px-10 py-2 rounded text-2xl cursor-pointer"
        @click="deleteTaskById"
      >
        Delete
      </button>
      <button
        class="bg-gray-500 text-white px-10 py-2 rounded text-2xl cursor-pointer"
        @click="closeDeleteModal"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "DeleteModal",

  methods: {
    ...mapMutations(["deleteTask", "closeModal"]),

    deleteTaskById() {
      this.deleteTask(this.$store.state.deleteTaskId);
    },
    closeDeleteModal() {
      this.closeModal("closeModal");
    },
  },
};
</script>
