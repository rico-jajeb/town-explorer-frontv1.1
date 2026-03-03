// export const CustomerService = {
//   async getCustomersSmall() {
//     return [
//       {
//         id: 1,
//         name: 'John Doe',
//         country: { name: 'Philippines', code: 'ph' },
//         representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
//         status: 'qualified',
//         sample: 'test',
//       },
//       {
//         id: 2,
//         name: 'Maria Santos',
//         country: { name: 'Japan', code: 'jp' },
//         representative: { name: 'Anna Fali', image: 'annafali.png' },
//         status: 'new',
//         sample: 'sample',
//       },
//     ]
//   },
// }

// export const CustomerService = {
//   async getCustomersSmall() {
//     const API = import.meta.env.VITE_BACKEND_API

//     const res = await fetch(`${API}/api/display-category`)
//     const json = await res.json()

//     return json.data.map((item: any, index: number) => ({
//       id: index + 1,
//       name: item.name,
//       description: item.description,
//     }))
//   },
// }

// src/services/CustomerService.ts
import API from '@/lib/axios'

export const CustomerService = {
  async getCustomersSmall() {
    try {
      const { data } = await API.get('/api/display-category') // protected API

      // Map the data to your desired structure
      return data.data.map((item: any, index: number) => ({
        id: index + 1,
        name: item.name,
        description: item.description,
      }))
    } catch (error: any) {
      if (error.response?.status === 401) {
        window.location.href = '/login'
      } else {
        window.location.href = '/login'
      }
    }
  },
}
