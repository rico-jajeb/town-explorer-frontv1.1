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
import { CustomerService } from '@/service/CustomerService'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'

const customers = ref([])
const selectedCustomer = ref(null)

/* Filters aligned with real data fields */
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

onMounted(async () => {
  customers.value = await CustomerService.getCustomersSmall()
})
</script>
