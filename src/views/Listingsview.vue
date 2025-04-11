<script setup>
import housecard  from '../components/housecard.vue';
import housefilter from '@/components/housefilter.vue';
import filterpersons from '@/components/filterpersons.vue';
import axios from 'axios';
import { ref,computed,onMounted } from 'vue';

const houses = ref([]) ;



onMounted( async () => {
    try {
        const response = await axios.get("http://localhost:5000/houses");
        houses.value =  response.data ; 
    } catch (error) {
        console.error("error fetching houses",error) ; 
    }
})


const appliedFilters = ref(null);

const handleFilters = (filters) => {
  appliedFilters.value = filters;
};


const filteredHouses = computed(() => {
    if (!appliedFilters.value) {
        return houses.value;
    }
    return houses.value.filter((house) => {
        return (
            (!appliedFilters.value.budget || house.price < appliedFilters.value.budget) &&
            (!appliedFilters.value.rating || Math.floor(house.rating) === appliedFilters.value.rating) &&
            (!appliedFilters.value.location || house.location === appliedFilters.value.location) 
        ); 
    });
    
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