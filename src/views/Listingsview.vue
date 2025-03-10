<script setup>
import housecard  from '../components/housecard.vue';
import housefilter from '@/components/housefilter.vue';
import filterpersons from '@/components/filterpersons.vue';
import houseData from '@/houses.json';
import { ref,computed } from 'vue';
const houses = ref(houseData) ; 


const appliedFilters = ref(null);

const handleFilters = (filters) => {
  appliedFilters.value = filters;
};


const filteredHouses = computed(() => {
    if (!appliedFilters.value){
        return houses.value ; 
    }
    else if (appliedFilters.value && appliedFilters.value.budget && appliedFilters.value.rating) {
        return houses.value.filter((house) => house.price < appliedFilters.value.budget && Math.floor(house.rating) === appliedFilters.value.rating) ;  
    }
    else if (appliedFilters.value && appliedFilters.value.budget) {
        return houses.value.filter((house) => house.price < appliedFilters.value.budget) ;  
    }
    else if (appliedFilters.value && appliedFilters.value.rating){
        return houses.value.filter((house) => Math.floor(house.rating) === appliedFilters.value.rating );
    } 
    return houses.value ; 
});

</script>

<template>
<div class="main-container">
    <filterpersons />
    <div class="content">
        <housefilter @apply-filters="handleFilters"/>
        <div class="listings">
            <housecard v-for="house in filteredHouses"  :house="house" />
        </div>
    </div>
</div>

 
</template>

<style scoped>
.main-container {
    background: #f7f7f7;
    display: flex;
    justify-content: center;
    gap: 2rem;
}
.listings { 
    width: 90%; 
    max-width: 1000px; 
    margin: 1rem auto; 
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
    gap: 2rem; 
}
</style>