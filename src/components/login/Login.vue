<template>
  <div>
    <bg-canvas></bg-canvas>
    <el-card class="login-main">
      <div class="logo"><img src="../../assets/img/logo.png" alt=""></div>
      <p class="login-text">管理后台</p>
      <el-form ref="loginForm" :model="loginModel" :rules="loginRule" @submit.native.prevent="login" style="padding: 0 24px">
        <el-form-item prop="username">
          <span class="label-text">用户</span>
          <el-input class="login-input hvr-shutter-out-horizontal" type="text" v-model="loginModel.username" clearable/>
        </el-form-item>
        <el-form-item prop="password">
          <span class="label-text">密码</span>
          <el-input class="login-input hvr-shutter-out-horizontal" type="password" v-model="loginModel.password"
                 clearable/>
        </el-form-item>
        <el-form-item>
          <div class="label-content">
            <span class="forget-pwd" @click="forgetPassword">忘记密码？</span>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button id="loginBtn" :loading="loading" type="primary" @click="submit">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import { JSEncrypt } from 'jsencrypt';
import bgCanvas from './Canvas';

// 校验规则
const loginRule = {
  username: [{
    required: true,
    message: '请填写您的账号',
    trigger: 'blur'
  }],
  password: [{
    required: true,
    message: '请填写您的密码',
    trigger: 'blur'
  }]
};

export default {
  data() {
    return {
      loading: false,
      loginModel: {
        username: '',
        password: ''
      },
      loginRule: loginRule
    };
  },
  components: {
    bgCanvas
  },
  computed: {},
  beforeMount() {

  },
  mounted() {

  },
  methods: {
    submit(){
      this.$router.push({
        path: '/report/general'
      })
    },
    forgetPassword() {
      console.log('mylog', 2);
    }
  }
};
</script>

<style lang="scss">
  .login-main {
    background: #ffffff;
    position: absolute;
    width: 405px;
    height: 480px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 10px;
    box-shadow: 0 2px 14px 0 rgba(131, 146, 166, 0.5);
    .logo {
      text-align: center;
      margin-top: 38px;
      img {
        width: 100px;
      }
    }
    .login-text {
      text-align: center;
      margin: 0 auto 24px;
      color: #000;
      font-size: 20px;
    }
    .login-input {
      position: relative;
      display: block;
      width: 100%;
    }
    input:-webkit-autofill {
      background-color: #ffffff;
      -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
    .login-input input {
      outline: none;
      border: 0;
      font-size: 16px;
      border-radius: 0;
      border-bottom: 1px solid #d1d1d1;
      padding-left: 50px;
      &:hover, &:focus, &:active {
        box-shadow:none;
        outline:none;
        &:-webkit-autofill {
          background-color: #ffffff;
          -webkit-box-shadow: 0 0 0px 1000px white inset;
        }
      }
    }
    .label-text {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1000;
    }
    .save-login-info {
      float: left;
    }
    .forget-pwd {
      float: right;
      cursor: pointer;
      color: #ff3c00;
      line-height: 20px;
      font-size: 12px;
    }
    #loginBtn {
      width: 100%;
      height: 52px;
      color: #fff;
      padding-left: 20px;
      padding-right: 20px;
      background: #40B783;
      border-radius: 27px;
      outline: none;
      display: block;
      margin: 0 auto;
      box-shadow: 1px 4px 9px rgba(64, 183, 131, 0.18);
      span {
        font-size: 18px;
      }
      &:hover, &:focus, &:active {
        outline: none;
        border-color: rgba(64, 183, 131, 0.18);
      }
    }
  }

  .login-input {
    position: relative;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    &:before {
      content: "";
      width: 100%;
      height: 2px;
      display: block;
      position: absolute;
      top: auto;
      bottom: 0px;
      left: auto;
      right: auto;
      z-index: 1000;
      background: #40B783;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 50%;
      transform-origin: 50%;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    &:hover, &:focus, &:active {
      &:before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
</style>
