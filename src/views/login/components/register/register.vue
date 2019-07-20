<template>
  <Drawer
    title="注册账号"
    v-model="registerModel"
    width="400"
    @on-close="registerReset"
  >
    <Form
      ref="register"
      :model="registerForm"
      label-position="left"
      :label-width="40"
    >
      <FormItem label="手机号">
        <Input type="text" v-model="registerForm.phone" />
      </FormItem>
      <FormItem label="密码">
        <Input type="text" v-model="registerForm.password" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="registerConfirm">确定</Button>
        <Button @click="registerReset" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Form>
  </Drawer>
</template>

<script>
const generateRegisterForm = () => ({
  phone: null,
  password: null
});

export default {
  name: "register",
  data() {
    return {
      registerModel: false,
      registerForm: generateRegisterForm()
    };
  },
  methods: {
    registerReset() {
      this.registerModel = false;
      this.registerForm = generateRegisterForm();
    },
    registerConfirm() {
      this.registerReset();
    },
  }
};
</script>

<style scoped></style>
