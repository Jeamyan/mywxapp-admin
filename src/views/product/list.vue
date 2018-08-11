<template>
  <el-card class="full-card">
    <div slot="header" class="clearfix">
      <span>商品列表</span>
    </div>
    <div class="text item">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="订单ID">
        </el-table-column>
        <el-table-column
          prop="goodsNo"
          label="商品编号">
        </el-table-column>
        <el-table-column
          prop="goodsDesc"
          label="商品描述">
        </el-table-column>
        <el-table-column
          prop="goodsImg"
          label="商品图片">
          <template slot-scope="scope">
            <img class="goodsImg" :src="scope.row.goodsImg" alt=""/>
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          width="180">
          <template slot-scope="scope">
            {{scope.row.createTime | getTime('yyyy/MM/dd hh:mm')}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
            <el-button size="mini" type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 123,
          goodsNo: 'fdds234433w',
          goodsName: '麻辣小龙虾',
          goodsImg: '323.jpg',
          goodsDesc: 'sa度快圣诞礼物',
          goodsPrice: 39.9,
          createTime: 1324543344322
        }
      ]
    };
  },
  components: {},
  computed: {},
  beforeMount() {

  },
  mounted() {

  },
  methods: {
    handleDelete(id) {
      console.log('mylog', id);
    },
    handleEdit(id) {
      console.log('mylog', id);
    }
  }
};
</script>

<style lang="scss">
  .goodsImg {
    width: 100px;
    height: 80px;
    display: block;
    border:1px solid #f2f2f2;
  }
</style>
