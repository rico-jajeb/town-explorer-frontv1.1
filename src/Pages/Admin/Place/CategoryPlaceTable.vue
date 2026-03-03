<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedCustomer"
      :value="customers"
      paginator
      :rows="5"
      filterDisplay="menu"
      selectionMode="single"
      dataKey="id"
      :globalFilterFields="['name', 'description']"
      tableStyle="min-width: 50rem"
    >
      <!-- Search Bar -->
      <template #header>
        <div class="flex align-items-center gap-2">
          <InputText
            v-model="filters.global.value"
            placeholder="Search..."
            class="p-inputtext-sm"
          />
          <i class="pi pi-search" />
        </div>
      </template>

      <!-- Name Column -->
      <Column field="name" header="Name" sortable style="width: 50%">
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" placeholder="Search name" />
        </template>
      </Column>

      <!-- Description Column -->
      <Column field="description" header="Description" sortable style="width: 50%">
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" placeholder="Search description" />
        </template>
      </Column>

      <!-- Empty State -->
      <template #empty> No data found. </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { CustomerService } from '@/service/CustomerService'
import { FilterMatchMode, FilterOperator } from 'primevue/api'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'

// Data and selection
const customers = ref([])
const selectedCustomer = ref(null)

// Filters aligned with real data fields
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },

  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },

  description: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
  },
})

// Fetch categories from API
const fetchCategories = async (page = 1) => {
  try {
    const res = await axios.get(
      `https://town-explorer-backv1.onrender.com/api/display-category?page=${page}`,
    )
    customers.value = res.data.data || []
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

onMounted(async () => {
  // If you want to use your service
  // customers.value = await CustomerService.getCustomersSmall()

  // Or fetch directly from API
  await fetchCategories()
})
</script>
