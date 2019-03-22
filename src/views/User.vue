<template>
  <div>
    <Table :columns="columns" :data="users"></Table>
  </div>
</template>

<script>
import userApi from "@/api/user";
export default {
  name: "User",
  data() {
    return {
      users: [],
      columns: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "性别",
          key: "sex"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "电子邮件",
          key: "email"
        }
      ]
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
