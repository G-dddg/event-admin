import requst from '@/utils/request'

export const getChannelListService = () => requst.get('/my/cate/list')
export const addChannelService = (data) => requst.post('/my/cate/add', data)
export const editChannelService = (data) => requst.put('/my/cate/info', data)
export const delChannelService = (id) =>
  requst.delete('/my/cate/del', {
    params: { id }
  })
//文章管理
export const getListService = (params) => requst.get('/my/article/list', { params })
