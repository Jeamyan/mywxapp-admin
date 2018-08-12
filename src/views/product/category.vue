<template>
    <el-card class="full-card">
      <div slot="header" class="clearfix">
        <span>商品分类列表</span>
      </div>
      <div class="text item">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="categoryId"
            label="品类ID">
          </el-table-column>
          <el-table-column
            prop="categoryName"
            label="品类名称">
          </el-table-column>
          <el-table-column
            prop="categoryDesc"
            label="品类描述">
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
          categoryId: 123,
          categoryName: '生鲜',
          categoryDesc: '速冻食品，海鲜等',
          createTime: 1324543344322
        },
        {
          categoryId: 124,
          categoryName: '快餐',
          categoryDesc: '熟食，外卖',
          createTime: 1324843345322
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
  methods: {}
};
</script>

<style lang="">

</style>
