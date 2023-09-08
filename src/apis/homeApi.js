import http from '@/utils/request'

export function getBannerApi (){
    return http({
        url: 'home/banner'
    })
}