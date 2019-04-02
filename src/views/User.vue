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
    this.createUser({
      name: "kai",
      sex: "man",
      age: 24,
      email: "kk@gmail.com"
    });
    this.readUsers();
    this.updateUser({
      id: 1,
      name: "kai",
      sex: "man",
      age: 24,
      email: "kk@gmail.com"
    });
    this.deleteUser({
      id: 2
    });
  },
  methods: {
    createUser(obj) {
      userApi
        .createUser(obj)
        .then(data => {
          this.users = data;
        })
        .catch(err => {
          this.$Message.error(err.message);
        });
    },
    readUsers() {
      userApi
        .readUsers()
        .then(data => {
          this.users = data;
        })
        .catch(err => {
          this.$Message.error(err.message);
        });
    },
    updateUser(req) {
      console.log(req);
      userApi
        .updateUser(req)
        .then(data => {
          this.$Message.success(data);
        })
        .catch(err => {
          this.$Message.error(err.message);
        });
    },
    deleteUser(req) {
      console.log(req);
      userApi
        .deleteUser(req)
        .then(data => {
          this.$Message.success(data);
        })
        .catch(err => {
          this.$Message.error(err.message);
        });
    }
  }
};
</script>

<style scoped></style>
