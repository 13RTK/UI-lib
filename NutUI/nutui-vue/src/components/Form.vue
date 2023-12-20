<template>
  <nut-form>
    <nut-form-item label="姓名">
      <nut-input
        v-model="basicData.name"
        class="nut-input-text"
        placeholder="请输入姓名"
        type="text"
      />
    </nut-form-item>
    <nut-form-item label="年龄">
      <nut-input
        v-model="basicData.age"
        class="nut-input-text"
        placeholder="请输入年龄"
        type="text"
      />
    </nut-form-item>
    <nut-form-item label="联系电话">
      <nut-input
        v-model="basicData.tel"
        class="nut-input-text"
        placeholder="请输入联系电话"
        type="text"
      />
    </nut-form-item>
    <nut-form-item v-model="basicData.address" label="地址">
      <nut-input class="nut-input-text" placeholder="请输入地址" type="text" />
    </nut-form-item>
    <nut-form-item label="备注">
      <nut-textarea placeholder="请输入备注" type="text" />
    </nut-form-item>

    <nut-cell>
      <nut-button size="small" style="margin-right: 10px">添加</nut-button>
      <nut-button size="small">重置提示状态</nut-button>
    </nut-cell>
  </nut-form>
</template>
<script setup>
import { reactive } from "vue";
const basicData = reactive({
  name: "",
  age: "",
  tel: "",
  address: "",
});
</script>
