<template>
  <div>
    <h2>Categories</h2>

    <!-- Category List -->
    <ul>
      <li v-for="cat in categories" :key="cat.id">
        <strong>{{ cat.name }}</strong> - {{ cat.description }}
      </li>
    </ul>

    <!-- Pagination Controls -->
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="fetchCategories(currentPage - 1)">Prev</button>

      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="fetchCategories(page)"
      >
        {{ page }}
      </button>

      <button :disabled="currentPage === totalPages" @click="fetchCategories(currentPage + 1)">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Reactive state
const categories = ref([])
const currentPage = ref(1)
const totalPages = ref(1)

// Fetch categories from API
const fetchCategories = async (page = 1) => {
  try {
    const res = await axios.get(
      `https://town-explorer-backv1.onrender.com/api/display-category?page=${page}`,
    )

    // Update state
    categories.value = res.data.data // paginated items
    currentPage.value = res.data.current_page // current page
    totalPages.value = res.data.last_page // total pages
  } catch (err) {
    console.error('Failed to fetch categories:', err)
  }
}

// Initial load
onMounted(() => fetchCategories())
</script>

<style scoped>
.pagination {
  margin-top: 1rem;
}

button {
  margin: 0 0.2rem;
  padding: 0.3rem 0.6rem;
}

button.active {
  font-weight: bold;
  background-color: #4caf50;
  color: white;
}
</style>
