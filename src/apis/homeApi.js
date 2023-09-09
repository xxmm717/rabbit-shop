import http from '@/utils/request'
// 获取轮播图列表
export const getBannerApi = () => {
    return http({
        url: '/home/banner'
    })
}
// 获取新鲜好物列表
export const getNewApi = () => {
    return http({
        url: '/home/new',
    })
}
// 获取人气推荐列表
export const getHotApi = () => {
    return http({
        url: '/home/hot',
    })
}
// 获取所有商品模块
export const getGoodsApi = () => {
    return http ({
        url: '/home/goods'
    })
}