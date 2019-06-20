import ajax from './ajax'
const BASE = '/api'

// 获取搜索页keyword
export const reqKeyword = () => ajax(BASE + 'http://m.you.163.com/xhr/search/init.json')

// 搜索框关键字模糊匹配
export const reqInputWord = (keywordPrefix) => ajax(BASE + 'http://m.you.163.com/xhr/search/searchAutoComplete.json', {keywordPrefix})

// 商品导航
export const reqHomeData = () => ajax('/home') 

//分类
export const reqCategoryList = () => ajax('/category')

// 发现页数据
export const reqTopic = (page,size) => ajax(BASE + 'http://m.you.163.com/topic/v1/find/recAuto.json', {page, size})