<template>
  <div>
    <h1>Project</h1>
    <form>
      <label for="name">Project Name:</label>
      <input id="name" v-model="project.name" />
    </form>
  </div>
</template>
<script>
export default {
  async asyncData({ $http, id }) {
    const project = await $http.$get('http://localhost:9000/api/project/', id)
    return { project }
  },
}
</script>
