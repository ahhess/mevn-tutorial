<template>
  <div>
    <h1>Projects</h1>

    <ul>
      <li v-for="project in projects" :key="project.id">
        <NuxtLink :to="{ name: 'project', params: { id: project.id } }">
          {{ project.projectNumber }} : {{ project.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $http }) {
    const projects = await $http.$get('http://localhost:9000/api/project')
    return { projects }
  },
}
</script>
