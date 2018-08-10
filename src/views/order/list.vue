<template>
  <el-card class="full-card">
    <div slot="header" class="clearfix">
      <span>订单列表</span>
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
          prop="orderNo"
          label="订单编号">
        </el-table-column>
        <el-table-column
          label="下单时间"
          width="180">
          <template slot-scope="scope">
            {{scope.row.createTime | getTime('yyyy/MM/dd hh:mm')}}
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="goodsList"
          label="商品">
        </el-table-column>
        <el-table-column
          prop="orderPrice"
          label="订单总价">
        </el-table-column>
        <el-table-column
          prop="address"
          label="收货地址">
        </el-table-column>
        <el-table-column
          label="订单状态">
          <template slot-scope="scope">
            {{scope.row.orderStatus | getStatus}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="checkDetail(scope.row)">查看详情</el-button>
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
          id: 12,
          orderNo: '23ccdvs2323',
          createTime: 1243341133448,
          name: '王小虎',
          phone: '15011720123',
          goodsList: [
            {
              goods_id: 1223,
              goods_name: '鎏金榴莲4kg-5kg/个',
              goods_price: 49.9,
              goods_img: '2323.jpg',
              amount: 1
            }
          ],
          orderPrice: 98.32,
          address: '上海市普陀区金沙江路 1518 弄',
          orderStatus: 1,
        }
      ]
    };
  },
  filters :{
    getStatus(status) {
      let str = '';
      switch (status){
        case 1:  str = '已付款';break;
        case 2:  str = '待付款';break;
        case 3:  str = '已取消';break;
        case 4:  str = '已退款';break;
        case 5:  str = '退款中';break;
        default: str='已取消';
      }
      return str;
    }
  },
  components: {},
  computed: {},
  beforeMount() {

  },
  mounted() {

  },
  methods: {
    checkDetail(item){
      console.log('mylog', item);
    }
  }
};
</script>

<style lang="">

</style>
