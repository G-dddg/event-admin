<script setup>
import { ref } from 'vue'
import { getChannelListService } from '@/api/article'
const channelList = ref([])
const getChannelList = async () => {
  const res = await getChannelListService()
  channelList.value = res.data
}
const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})
getChannelList()
</script>
<template>
  <el-select
    :style="{ width }"
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <el-option
      v-for="item in channelList"
      :key="item.id"
      :label="item.cate_name"
      :value="item.id"
    ></el-option>
  </el-select>
</template>
