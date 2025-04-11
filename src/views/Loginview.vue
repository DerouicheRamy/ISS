<script setup>
import signin from '@/components/signin.vue';
import signup from '@/components/signup.vue';
import { ref } from 'vue';

const active = ref(true) ; 
const toggle_up = () => {
    active.value = false ; 
} ;
const toggle_in = () => {
    active.value = true ; 
}; 

</script>

<template>
  
<div class="container">
    <h2>Welcome! Sign Up or Login</h2>
    <div class="tabs">
      <button class="tab" @click="toggle_up" :style="{ backgroundColor: active ? 'lightgray' : '#e67e22' }">Sign Up</button>
      <button class="tab" @click="toggle_in" :style="{ backgroundColor: active ? '#e67e22' : 'lightgray' }">Login</button>
    </div>
<div v-if="active"><signin/></div>
<div v-else="active"><signup/></div>
</div>

</template>

<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 90%;
  max-width: 600px;      
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-align: center;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.tab {
  padding: 0.8rem 1.5rem;
  margin: 0 1rem;
  cursor: pointer;
  color: #ecf0f1;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.2s;
}
</style>