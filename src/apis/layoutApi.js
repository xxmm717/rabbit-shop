import http from "@/utils/request"

export function getCategoryApi() {
    return http({
        url: '/home/category/head',
    })
}