<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedCustomer"
      :value="userStore.users"
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
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText v-model="filters.global.value" placeholder="Search..." />
        </IconField>
      </template>

      <!-- Name Column -->
      <Column field="name" header="Name" sortable style="width: 50%">
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" placeholder="Search name" />
        </template>
      </Column>

      <!-- Description Column -->
      <Column field="email" header="Email" sortable style="width: 50%">
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" placeholder="Search email" />
        </template>
      </Column>

      <!-- Empty State -->
      <template #empty> No data found. </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CustomerService } from '@/service/CustomerService'
import { UserService } from '@/service/users/userService'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'

import { useUserStore } from '@/stores/userStore'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'

// const customers = ref([])
const userStore = useUserStore()
const selectedCustomer = ref(null)

/* Filters aligned with real data fields */
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },

  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },

  email: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
  },
})

// onMounted(async () => {
//   customers.value = await UserService.getCustomersSmall()
// })
onMounted(async () => {
  await userStore.fetchUsers() // Only fetches if not loaded
})
</script>
