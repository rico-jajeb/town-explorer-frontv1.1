import API from '@/lib/axios'

export const UserService = {
  async getCustomersSmall() {
    try {
      const { data } = await API.get('/api/display-user') // protected API

      // Map the data to your desired structure
      return data.data.map((item: any, index: number) => ({
        id: index + 1,
        name: item.name,
        email: item.email,
      }))
    } catch (error: any) {
      if (error.response?.status === 401) {
        console.log('Error in Displaying users')
      } else {
        console.log('Error in Displaying users')
      }
    }
  },
}
