<script setup >
import { ref } from 'vue';



</script>

<template>

<div class="sidebar">
    <div>
      <h3>More Filters about roommates</h3>
      <label>
        <input type="checkbox"  />
        Smoker
      </label>
      <label>
        <input type="checkbox" />
        Loud Music
      </label>
      <label>
        <input type="checkbox"  />
        Owning Pet
      </label>
      <label>
        <input type="checkbox" />
        Student
      </label>
    </div>
    <button>Apply Filters</button>
  </div>
</template>

<style scoped>
.sidebar {
    width: 400px;
    height: 500px;
    background: #fff;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-content:center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
}
      
.sidebar h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    margin: 0 auto ;
    padding-bottom: 40px;
    padding-top: 20px;
}
      
.sidebar label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #2c3e50;
}
      
.sidebar input {
    margin-right: 0.5rem;
}

.sidebar button {
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #e67e22;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>