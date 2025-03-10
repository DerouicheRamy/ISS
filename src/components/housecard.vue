<script setup>
import { defineProps } from 'vue';
defineProps({
    house : Object 
}); 

const generateStars = (rating) => {
  const fullStars = '★'.repeat(Math.floor(rating)); 
  return `${fullStars}`;
};

</script>

<template>
<div class="listing-card">
                <h3>{{ house.title }}</h3>
                <p>{{ house.price }}/month | {{ house.location }}</p>
                <p><span class="verified">Verified</span> | Landlord Rating: <span class="rating">{{ generateStars(house.rating) }}</span></p>
                <button>View Details</button>
</div>
</template>

<style scoped>
.listing-card { background: #ffffff; border-radius: 8px; padding: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);  display: flex;
    flex-direction: column; gap: 1em; }
.listing-card:hover{transform: scale(1.08);}
.listing-card img { width: 100%; border-radius: 4px; margin-bottom: 0.5rem; }
.listing-card button{padding: 0rem 1rem;margin-top:0.5rem;background: #e67e22; color: #fff; border: none; border-radius: 4px; cursor: pointer;height: 20px; width: 30%;}
.verified { color: #27ae60; font-weight: bold; }
.rating { color: #f1c40f; margin-left: 0.5rem; }
</style>