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
    this.updateUser({
      id: 1,
      name: "kai",
      sex: "man",
      age: 24,
      email: "kk@gmail.com"
    });
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
    },
    updateUser(req) {
      console.log(req);
      userApi
        .updateUser(req)
        .then(data => {
          // this.users = data;
          this.$Message.success(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
