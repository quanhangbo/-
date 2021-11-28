<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="登录" prop="name">
        <el-input type="text" placeholder="请输入账号" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          name: '',
          password: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem('isLogin','true');   //设置session
            this.$store.dispatch("asyncUpdateUser",{name:this.form.name})   //这里存入对象 */
            console.log(this.$store.dispatch("asyncUpdateUser",{name:this.form.name}))
            this.$router.push({name:'Main',params:{name:this.form.name}});
          } else {
            this.$message({
                      message: '请输入用户名或者密码',
                      type: 'warning'
                    });
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    width: 350px; //宽度
    margin: 150px auto; //外边距,auto设置浏览器边距,左右平分结果依赖浏览器,
    border: 1px solid #DCDFE6; //边框,实线,颜色
    padding: 10px; //内边距,内边距外是边框,边框外是外边距
    border-radius: 5px; //边框圆角
    box-shadow: 0 0 10px #DCDFE6;
    //盒子的阴影,默认是外阴影盒子包括内边距,边框,外边距,
    //前两个是阴影相对于盒子的偏移位置,第三个是阴影大小
  }

  .login-title {
    //文本居中
    text-align: center;
  }
</style>
