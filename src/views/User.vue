<template>
  <div>
    <ul v-for="{ age, email, name, sex, id } in users" :key="id">
      <li>{{ name }}</li>
      <li>{{ sex }}</li>
      <li>{{ age }}</li>
      <li>{{ email }}</li>
    </ul>
  </div>
</template>

<script>
import userApi from "@/api/user";
export default {
  name: "User",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.readUsers();
  },
  methods: {
    readUsers() {
      userApi
        .readUsers()
        .then(data => {
          this.users = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
