<template>
  <el-card class="full-card">
    <div slot="header" class="clearfix">
      <span>新增/编辑商品</span>
    </div>
    <div class="text item">
      <el-form ref="form" :model="form" label-width="80px" style="width: 500px">
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <div class="illustrate">
            <div class="imgbox">
              <div class="inputImg">
                <input class="input" type="file" name="file" ref="file" accept="image/png,image/jpeg,image/jpg"
                       multiple="multiple"/>
              </div>
              <div id="images">
                <div class="img_item" v-for="(img, index) in uploadImages" :key="index">
                  <img :src="form.goodsImg" alt="">
                  <i class="icon_del" @click="delImage(index)">×</i>
                </div>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="商品类别">
          <el-select v-model="form.type" placeholder="请选择商品类别">
            <el-option label="水果" value="fruits"></el-option>
            <el-option label="零食" value="foods"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        desc: '',
        goodsImg: '',
        price: '',
        type: ''
      },
      uploadImages: []
    };
  },
  components: {},
  computed: {},
  beforeMount() {

  },
  mounted() {

  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    onSubmit() {
      console.log('mylog', 1);
    },
    delImage() {

    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/mixin";

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 88px;
    height: 88px;
    line-height: 88px;
    text-align: center;
  }

  .avatar {
    width: 88px;
    height: 88px;
    display: block;
  }

  .illustrate {
    margin-top: 20px;
    .inputImg {
      width: 100px;
      height: 100px;
      margin: 5px 4px 4px;
      @include bgSet("../../assets/img/uploadImg.png", contain);
      input[type=file] {
        width: 100px;
        height: 100px;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer;
        font-size: 12px;
        outline: none;
      }
    }
    .imgbox {
      width: 100%;
      #images {
        max-height: 400px;
        overflow-x: hidden;
        overflow-y: auto;
        .img_item {
          width: 100px;
          position: relative;
          overflow: hidden;
          float: left;
          img {
            width: 100px;
            height: 100px;
            display: block;
            margin: 4px 4px;
          }
          .icon_del {
            width: 16px;
            height: 16px;
            line-height: 14px;
            text-align: center;
            background: #ffffff;
            color: #430303;
            font-style: normal;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0;
          }
        }
      }
    }

  }
</style>
