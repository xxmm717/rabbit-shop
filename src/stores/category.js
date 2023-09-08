import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/layoutApi'

export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])
    // 获取分类列表
    const getCategoryList = async () => {
      const res = await getCategoryApi()
      categoryList.value = res.data.result
    }

  return { categoryList,getCategoryList }
})
