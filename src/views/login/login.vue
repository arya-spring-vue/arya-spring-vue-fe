<template>
  <article class="page_login">
    <section class="page_login_section">
      <header>
        <section class="page_login_header_logo">
          <img :src="header.logoImg" />
        </section>
        <section class="page_login_header_badge">
          <img :src="header.badgeSvg" />
        </section>
      </header>
      <main>
        <Form
          ref="loginForm"
          :model="loginForm.info"
          :rules="loginForm.rules"
          width="300"
        >
          <FormItem prop="user">
            <Input
              type="text"
              v-model="loginForm.info.user"
              placeholder="用户名"
            >
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="loginForm.info.password"
              placeholder="密码"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="auth" style="margin-bottom:0">
            <Input
              type="password"
              v-model="loginForm.info.auth"
              placeholder="验证码"
            >
              <Icon type="ios-phone-portrait" slot="prepend" />
              <a slot="append">获取验证码</a>
            </Input>
          </FormItem>
          <FormItem prop="auth" style="margin-bottom:0">
            <a style="float: left">微信登录</a>
            <a style="float: right">注册账号</a>
          </FormItem>
          <FormItem>
            <Button type="primary" style="width: 100%">登录</Button>
          </FormItem>
        </Form>
      </main>
      <footer>
        <p>
          <a :href="footer.projectUrl">{{ footer.projectUrl }}</a>
        </p>
        <p>
          这是一个半吊子前端基于Spring全家桶+Vue技术栈创建的项目集，可以称之为“啊呀
          spring vue”，arya是权利的游戏里的二丫，也是维护者的第一只猫的名字
        </p>
      </footer>
    </section>
  </article>
</template>

<script>
const badgeSvg =
  "https://img.shields.io/badge/arya--spring--vue--fe-v0.1.0-yellowgreen.svg";
const projectUrl = "https://github.com/arya-spring-vue/arya-spring-vue-fe";
import logoImg from "@screenshot/arya-spring-vue-fe.png";
export default {
  name: "Login",
  data() {
    return {
      header: {
        logoImg,
        badgeSvg
      },
      footer: { projectUrl },
      loginForm: {
        info: {
          user: "",
          password: "",
          auth: ""
        },
        rules: {
          user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            {
              type: "string",
              min: 6,
              message: "密码长度不能小于6个字符",
              trigger: "blur"
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.page_login {
  .page_login_section {
    display: flex;
    flex-flow: column wrap;
    header {
      flex: 80px;
      background: #314659;
      display: flex;
      align-items: center;
      box-shadow: 0 1px 10px #e3e3e3;
      .page_login_header_logo {
        display: flex;
        align-items: center;
        margin-left: 10px;
        img {
          width: 300px;
          border-radius: 5px;
        }
      }
      .page_login_header_badge {
        display: flex;
        align-self: flex-end;
        img {
          margin: 0 0 12px 4px;
        }
      }
    }
    main {
      flex: 500px;
      background: rgba(0, 11, 2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    footer {
      flex: 80px;
      background: #314659;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
