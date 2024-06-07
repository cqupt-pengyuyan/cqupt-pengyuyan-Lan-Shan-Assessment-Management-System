<template>
  <div class="infoList">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="id" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
          <el-button type="primary" size="mini" @click="edit(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加学生信息" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="日期" :label-width="formLabelWidth" prop="date">
          <el-date-picker v-model="form.date" format="yyyy 年 mm 月 dd日" value-format="yyyy-MM-dd" type="date"
            placeholder="选择日期" :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveStudent">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        date: ''
      },
      formLabelWidth: "80px",
      rules: {}
    };
  },
  methods: {
    addStudent() {
      this.form = {
        name: '',
        date: ''
      };
      this.dialogFormVisible = true;
    },
    edit(index) {
      const item = this.tableData[index];
      this.form.date = item.date;
      this.form.name = item.name;
      this.dialogFormVisible = true;
    },
    saveStudent() {
      if (this.form.date && this.form.name) {
        // Check if the form is being edited or added
        const index = this.tableData.indexOf(this.form);
        if (index === -1) {
          // If the form is not in tableData, add it as a new entry
          this.tableData.push(Object.assign({}, this.form));
        } else {
          // If the form is in tableData, update its values
          this.tableData[index] = Object.assign({}, this.form);
        }
        this.dialogFormVisible = false;
      } else {
        this.$message.error('请填写完整信息！');
      }
    },

    del(row) {
      const index = this.tableData.indexOf(row);
      if (index !== -1) {
        this.tableData.splice(index, 1);
      }
    }
  }
}
</script>

<style lang="less"></style>
