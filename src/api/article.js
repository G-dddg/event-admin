import request from '@/utils/request'

export const getChannelListService = () => request.get('/my/cate/list')
export const addChannelService = (data) => request.post('/my/cate/add', data)
export const editChannelService = (data) => request.put('/my/cate/info', data)
export const delChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })
//文章管理
export const getListService = (params) => request.get('/my/article/list', { params })
export const artPublishService = (data) => request.post('/my/article/add', data)
export const artGetDetailService = (id) => request.get('my/article/info', { params: { id } })
export const artEditService = (data) => request.put('my/article/info', data)
export const artDelService = (id) => request.delete('my/article/info', { params: { id } })
