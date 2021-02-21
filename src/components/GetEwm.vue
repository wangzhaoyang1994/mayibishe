<template>
  <div class="createEwm">
    <el-upload
      class="upload-demo"
      name="userImg"
      :limit="1"
      :action="uploadUrl()"
      :on-success="successHandle"
      :before-upload="beforeUpload2"
      accept="image/jpeg, image/jpg, image/png"
      ref="uploadpic"
      :show-file-list="false"
    >
      <div class="img">
        <img :src="imgShow" width="200px" />
      </div>
      <div class="button">
        <el-button type="primary">
          <i class="el-icon-upload el-icon--left"></i>生成二维码
        </el-button>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgShow: "",
    };
  },
  methods: {
    uploadUrl() {
      var uUrl = process.env.BASE_API + "/ewm/upload";
      return uUrl;
    },
    successHandle(res, file) {
      if (file.response.code == 200) {
        this.$toast("二维码生成成功");
        this.imgShow = file.response.path;
      }
    },
    beforeUpload2(file) {
      const isLt2M = file.size < 1024 * 1024 * 50;
      if (!isLt2M) {
        this.$toast("上传文件大小不能超过 50MB!");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .createEwm {
  display: flex;
}
.img{
  flex-direction:row
}
.button{
  flex-direction:row
} */
</style>
