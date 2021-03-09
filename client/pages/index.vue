<template>
  <div>
    <h1>Users</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        <!-- <NuxtLink
          :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }"
        > -->
        {{ user.name }}, {{ user.age }}
        <!-- </NuxtLink> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $http }) {
    const users = await $http.$get('http://localhost:9000/api/user')
    return { users }
  },
}
</script>
