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
          <FormItem prop="account" class="form_item">
            <Input
              type="text"
              v-model="loginForm.info.account"
              placeholder="用户名"
            >
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password" v-if="loginForm.type === 'PASSWORD'">
            <Input
              type="password"
              v-model="loginForm.info.password"
              placeholder="密码"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <!--<FormItem prop="CAPTCHA" v-if="loginForm.type === 'CAPTCHA'">-->
          <FormItem prop="CAPTCHA" v-show="loginForm.type === 'CAPTCHA'">
            <Input
              type="password"
              v-model="loginForm.info.CAPTCHA"
              placeholder="验证码"
            >
              <Icon type="ios-phone-portrait" slot="prepend" />
              <a slot="append" @click="CAPTCHAGetter">获取验证码</a>
            </Input>
          </FormItem>
          <FormItem prop="CAPTCHA" style="margin-bottom:0">
            <a style="float: left" @click="weChatLoginTrigger">微信登录</a>
            <a
              v-if="loginForm.type === 'CAPTCHA'"
              style="float: left;margin-left:2px;"
              @click="loginForm.type = 'PASSWORD'"
              >密码登录</a
            >
            <a
              v-if="loginForm.type === 'PASSWORD'"
              style="float: left;margin-left:2px;"
              @click="loginForm.type = 'CAPTCHA'"
              >验证码登录</a
            >
            <a style="float: right" @click="accountRegister">注册账号</a>
          </FormItem>
          <FormItem>
            <Button type="primary" style="width: 100%" @click="loginGuard"
              >登录</Button
            >
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
        type: "PASSWORD", // 密码登录:'PASSWORD', 微信登录: 'WECHAT', 验证码:'CAPTCHA'
        info: {
          account: "",
          password: "",
          CAPTCHA: ""
        },
        rules: {
          account: [
            { required: true, message: "请输入用户名", trigger: "blur" }
          ],
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
  },
  methods: {
    weChatLoginTrigger() {
      // 调用微信OAUTH登录SDK
    },
    CAPTCHAGetter(phoneNumber) {
      // 通过手机号获取验证码 服务端需要存一份
    },
    accountRegister() {
      // 注册账号，需要在用户表中增加唯一id，手机号以及密码
    },
    loginGuard() {
      // 通过密码，验证码登录需要调用此方法；微信登录会自动登录
      // 登录以后服务端生成一定有效期的cookie，前端存储后若登录失效返回401重定向到登录页，之后的每个请求都直接从服务端直接带cookie，不用前端带
    }
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
      display: flex;
      align-items: center;
      justify-content: center;
      .form_item {
        width: 300px;
      }
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
