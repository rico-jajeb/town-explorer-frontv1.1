// import { ref, onMounted } from 'vue'
// import axios from 'axios'

// interface User {
//   id: number
//   name: string
//   email: string
//   // other fields from your API
// }

// const user = ref<User | null>(null) // shared reactive state

// export function authState() {
//   const fetchUser = async () => {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       user.value = null
//       return
//     }

//     const api = import.meta.env.VITE_BACKEND_API
//     try {
//       // tell Axios the response will be User
//       const res = await axios.get<User>(`${api}/api/user`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       user.value = res.data
//     } catch (err) {
//       console.error('Not authenticated', err)
//       user.value = null
//     }
//   }

//   onMounted(fetchUser)

//   return {
//     user,
//     fetchUser,
//   }
// }
