<script setup>
import { RouterLink , useRoute } from 'vue-router';
const route = useRoute() ;
const isActive = (routePath) => {
  return route.path === routePath ; 
}

</script>
<template>
<header>
    <div class="left">
        <img  src="@/assets/images/logo.png" alt="test">
        <RouterLink   to="/" class="logo">Roommatch</RouterLink>
    </div>
    <nav id="nav">
      <RouterLink class="a" v-bind:class="{ activeClass: isActive('/add') }" to="/add">Add Property</RouterLink>
      <RouterLink class="a" v-bind:class="{ activeClass: isActive('/list') }" to="/list">List Property</RouterLink>
      <RouterLink class="a" v-bind:class="{ activeClass: isActive('/aboutus') }" to="/aboutus">About Us</RouterLink>
      <RouterLink class="a" v-bind:class="{ activeClass: isActive('/login') }" to="/login">Login</RouterLink>
    </nav>
</header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  height: 80px;
}
    
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: #2c3e50;
  text-decoration: none;
}
    
.a {
  margin-left: 1rem;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.2s;
  padding: 10px 5px;
}
    
.a:hover {
  border-radius: 15px;
  color: #fff;
  background-color: #ff5500;
}

img{
  height: 70px ; 
}

.left img,
.left .logo {
  display: inline-block;
  vertical-align: middle; 
}

.activeClass {
  border-radius: 15px;
  color: #fff;
  background-color: #ff5500df;
  opacity: 90%;
}
</style>