<template>
  <div class="page_user">
    <!--表格展示-->
    <Table :columns="columns" :data="users"></Table>
    <!--编辑抽屉-->
    <Drawer
      title="编辑用户"
      v-model="action.edit"
      width="500"
      @on-close="userEditCancel"
    >
      <Form
        ref="editForm"
        :model="user"
        label-position="left"
        :label-width="100"
        :rules="user.rules"
      >
        <FormItem label="姓名">
          <Input v-model="user.name" prop="name" disabled />
        </FormItem>
        <FormItem label="性别">
          <Input v-model="user.sex" prop="sex" disabled />
        </FormItem>
        <FormItem label="年龄" prop="age">
          <Input v-model="user.age" disabled />
        </FormItem>
        <FormItem label="电子邮件" prop="email">
          <Input v-model="user.email" />
        </FormItem>

        <FormItem>
          <Button type="primary" @click="userEditSubmit(user)">确定</Button>
          <Button @click="userEditCancel()" style="margin-left: 8px"
            >取消</Button
          >
        </FormItem>
      </Form>
    </Drawer>
    <!--删除弹框-->
    <Modal v-model="action.delete" title="删除用户">
      <p>
        确认删除<span class="page_user_modal_delete_tip">{{ user.name }}</span
        >吗？
      </p>
      <div slot="footer">
        <Button @click="userDeleteCancel" size="small">取消</Button>
        <Button @click="userDeleteConfirm" size="small" type="error"
          >确定</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
const generateUser = () => ({ id: 0, name: "", age: 0, email: "" });

import userApi from "@/api/user";
export default {
  name: "User",
  data() {
    return {
      users: [],
      user: generateUser(),
      action: {
        edit: false,
        delete: false
      },
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
        },
        {
          title: "操作",
          key: "action",
          width: 180,
          render: (h, params) =>
            h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                    ghost: "true"
                  },
                  on: {
                    click: () => {
                      console.log(params);
                      this.action.edit = true;
                      this.user = params.row;
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                    ghost: "true"
                  },
                  style: {
                    "margin-left": "4px"
                  },
                  on: {
                    click: () => {
                      this.action.delete = true;
                      this.user = params.row;
                    }
                  }
                },
                "删除"
              )
            ])
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
          this.userEditCancel();
          this.readUsers();
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
          this.userDeleteCancel();
          this.readUsers();
        })
        .catch(err => {
          this.$Message.error(err.message);
        });
    },
    userEditSubmit(user) {
      const { id, name, sex, age, email } = user;
      this.updateUser({ id, name, sex, age, email });
    },
    userEditCancel() {
      setTimeout(() => {
        this.user = generateUser();
      }, 1000);
      this.action.edit = false;
    },
    userDeleteConfirm() {
      this.deleteUser({ id: this.user.id });
    },
    userDeleteCancel() {
      setTimeout(() => {
        this.user = generateUser();
      }, 1000);
      this.action.delete = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.page_user_modal_delete_tip {
  font-size: 20px;
  font-weight: bold;
}
</style>
