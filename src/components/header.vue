<script setup>
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute();
const isActive = (routePath) => {
  return route.path === routePath;
};
</script>

<template>
  <header class="header-container">
    <div class="left">
      <img src="@/assets/images/logo.png" alt="Logo" />
      <RouterLink to="/" class="logo">Roommatch</RouterLink>
    </div>

    <div class="nav-wrapper">
      <RouterLink to="/add" :class="['nav-item', { active: isActive('/add') }]">Add Property</RouterLink>
      <RouterLink to="/list" :class="['nav-item', { active: isActive('/list') }]">List Property</RouterLink>
      <RouterLink to="/aboutus" :class="['nav-item', { active: isActive('/aboutus') }]">About Us</RouterLink>
      <RouterLink to="/signup" class="button">Sign Up</RouterLink>
      <RouterLink to="/login" class="login">Log In</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.left img {
  height: 60px;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: #2c3e50;
  text-decoration: none;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-item {
  text-decoration: none;
  font-weight: 500;
  color: #2c3e50;
  padding: 10px 15px;
  border-radius: 10px;
  transition: background 0.3s;
}

.nav-item:hover {
  background-color: #ff5500;
  color: white;
}

.active {
  background-color: #ff5500;
  color: white;
}

.button {
  background-color: #424242;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
}

.login {
  margin-left: 10px;
  font-weight: 600;
  color: #2c3e50;
  text-decoration: none;
}
</style>
