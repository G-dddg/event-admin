<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn' // ✅ 确保正确导入
</script>
<template>
  <div>
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style scoped></style>
