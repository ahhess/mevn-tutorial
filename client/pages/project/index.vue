<template>
  <div>
    <h1>Projects</h1>

    <ul>
      <li v-for="project in projects" :key="project._id">
        <NuxtLink :to="`/project/${project._id}`">
          {{ project.projectNumber }} : {{ project.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $http, $config: { baseURL } }) {
    const projects = await $http.$get(`${baseURL}/project`)
    return { projects }
  },
}
</script>
