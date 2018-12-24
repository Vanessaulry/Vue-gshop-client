/*
  与后台通信模块（包含n个接口请求函数的模块）
 */
import ajax from './ajax'

const BASE = '/api'
/**
 * 获取地址信息(根据经纬度串)
 */
export const reqAddress = (longitude, latitude) => ajax(BASE+`/positin/${latitude},${longitude}`)

/**
 * 获取msite页面食品分类列表
 */
export const reqCategory = () => ajax(BASE+'index_category')

/**
 * 获取msite商铺列表(根据经纬度)
 */
export const reqShops = (longitude, latitude) => ajax(BASE+`/shops/${latitude},${longitude}`)
