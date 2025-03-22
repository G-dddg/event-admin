<script setup>
import { getChannelListService } from '@/api/article'
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import ChannelEdit from './components/ChannelEdit.vue'
import { delChannelService } from '@/api/article'
const channelList = ref([])

const loading = ref(false)
const dialog = ref()
const getChannelList = async () => {
  loading.value = true
  const res = await getChannelListService()
  channelList.value = res.data
  loading.value = false
}
getChannelList()
const onEditChannel = (row) => {
  dialog.value.open(row)
}
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确认要删除该分类么', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await delChannelService(row.id)
  ElMessage.success('删除成功')
  getChannelList()
}
const onAddChannel = () => {
  dialog.value.open({})
}
const onSuccess = () => {
  getChannelList()
}
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">添加分类</el-button>
    </template>

    <el-table v-loading="loading" :data="channelList" stripe style="width: 100%">
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button
            plain
            type="primary"
            circle
            :icon="Edit"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            plain
            type="danger"
            circle
            :icon="Delete"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty disctription="暂无数据"></el-empty>
      </template>
    </el-table>
    <ChannelEdit @success="onSuccess" ref="dialog"></ChannelEdit>
  </PageContainer>
</template>

<style lang="scss" scoped></style>
