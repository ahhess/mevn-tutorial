<template>
  <div>
    <h1>Users</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="{ name: 'user', params: { id: user.id } }">
          {{ user.name }}, {{ user.age }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $http, $config: { baseURL } }) {
    const users = await $http.$get(`${baseURL}/user`)
    return { users }
  },
}
</script>
