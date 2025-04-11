<script setup>
import { ref } from 'vue';
const filters = ref({
  location: '',
  budget: '',
  rating : '' ,
});


const emit = defineEmits(['apply-filters']);
const location = ref('');
const budget = ref('');
const rating = ref('');

const applyFilters = () => {
  filters.value.location = location.value;
  filters.value.budget = budget.value;
  filters.value.rating = rating.value;
  emit('apply-filters', filters.value);
};

const resetFilters = () => {
  filters.value.location = '' ;
  filters.value.rating = '' ;
  filters.value.budget = '' ;
  budget.value = '' ; 
  rating.value = '' ;
  location.value = ''; 
};

</script>

<template>
<div class="filters">
              <input type="text" placeholder="Location" v-model="location"/>
              <input type="number" placeholder="Budget (max)" v-model="budget"/>
              <input type="number" placeholder="Rating" v-model="rating"/>
              <select >
                <option>Amenities</option>
                <option>Parking</option>
                <option>wifi</option>
                <option>Laundry</option>
              </select>
              <select>
                <option>S+0</option>
                <option>S+1</option>
                <option>S+2</option>
                <option>S+3</option>
              </select>
              <button @click="applyFilters">Search</button>
              <button @click="resetFilters">Reset</button>
</div>
</template>

<style scoped>
.filters { background: #fff; padding: 1rem; border-radius: 8px; margin: 1rem auto;  max-width: 1000px; display: flex; gap: 0.8rem;justify-content: center;}
.filters input, .filters select { padding: 0.5rem; border: 1px solid #bdc3c7; border-radius: 4px; }
.filters button { padding: 0.6rem 1rem; background: #e67e22; color: #fff; border: none; border-radius: 4px; cursor: pointer;}
</style>