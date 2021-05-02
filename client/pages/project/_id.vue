<template>
  <div>
    <h1>Project</h1>
    <form>
      <div>
        <label for="nr">Project Nr.:</label>
        <input id="nr" v-model="project.nr" />
      </div>
      <div>
        <label for="name">Project Name:</label>
        <input id="name" v-model="project.name" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  async asyncData({ $http, route, $config: { baseURL } }) {
    const project = await $http.$get(`${baseURL}/project/${route.params.id}`)
    return { project }
  },
}
</script>
