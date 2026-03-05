import API from '@/lib/axios'

interface ApiUser {
  id: number
  name: string
  email: string
}
export const UserService = {
  async getCustomersSmall() {
    try {
      const { data } = await API.get('/api/display-user')
      return data.data.map((item: ApiUser, index: number) => ({
        id: item.id,
        name: item.name,
        email: item.email,
      }))
    } catch (error: any) {
      return { success: false, data: null, error: error.message }
    }
  },
}
