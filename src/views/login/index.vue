<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="../../assets/logo.png" align="center"> -->
    <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
      <a-form-item>
        <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名!' }] },
        ]" placeholder="用户名">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] },
        ]" type="password" placeholder="密码" autocomplete>
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]">
          记住我
        </a-checkbox>
        <a class="login-form-forgot" href="">
          忘记密码
        </a>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
        或
        <a href="">
          现在注册!
        </a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
        this.$router.push('/')
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    width: 380px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#components-form-demo-normal-login {
    .login-form {
        max-width: 300px;
    }
    .login-form-forgot {
        float: right;
    }
    .login-form-button {
        width: 100%;
    }
}
</style>