<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<header>
    <div class="left">
        <img  src="@/assets/images/logo.png" alt="test">
        <RouterLink to="/" class="logo">Roommatch</RouterLink>
    </div>
    <nav id="nav">
      <RouterLink class="a" to="#">Find Roommatess</RouterLink>
      <RouterLink class="a" to="/list">List Property</RouterLink>
      <RouterLink class="a" to="/aboutus">About Us</RouterLink>
      <RouterLink class="a" to="/login">Login</RouterLink>
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
    
      /* Logo + Navigation */
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
      }
    
      .a:hover {
        color: #ff5500;
      }
    
      img{
        height: 70px ; 
      }
    
      .left img,
    .left .logo {
        display: inline-block;
        vertical-align: middle; 
    }
</style>