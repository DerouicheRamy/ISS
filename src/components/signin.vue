<template>
    <!-- Login Form -->
    <form @submit.prevent="submitLoginForm">
      <div class="form-section" id="loginSection">
        <!-- Email or Username -->
        <div class="form-group">
          <label for="loginEmail">Email or Username</label>
          <input
            type="text"
            id="loginEmail"
            v-model="loginData.emailOrUsername"
            placeholder="name@example.com"
          />
          <span v-if="loginSubmitted && loginErrors.emailOrUsername" class="error">
            {{ loginErrors.emailOrUsername }}
          </span>
        </div>
  
        <!-- Password -->
        <div class="form-group">
          <label for="loginPassword">Password</label>
          <input
            type="password"
            id="loginPassword"
            v-model="loginData.password"
            placeholder="••••••••"
          />
          <span v-if="loginSubmitted && loginErrors.password" class="error">
            {{ loginErrors.password }}
          </span>
        </div>
        <!-- Login Button -->
        <button class="btn" type="submit">Login</button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import { useToast } from 'vue-toastification';
  const toast = useToast() ;
  import fakeDatabase from '../../database';
  // Reactive login form data
  const loginData = reactive({
    emailOrUsername: '',
    password: '',
  });
  
  // Reactive login error messages
  const loginErrors = ref({
    emailOrUsername: '',
    password: '',
  });
  
  // Track if the login form has been submitted
  const loginSubmitted = ref(false);
  
  // Login form validation functions
  const validateEmailOrUsername =  () => {
    if (!loginData.emailOrUsername) {
      loginErrors.value.emailOrUsername = 'Email or Username is required.';
    } else {
      loginErrors.value.emailOrUsername = '';
    }
  };
  
  const validatePassword = () => {
    if (!loginData.password) {
      loginErrors.value.password = 'Password is required.';
    } else {
      loginErrors.value.password = '';
    }
  };
  // Login form submission handler
  const submitLoginForm =  () => {
  
    loginSubmitted.value = true;
    validateEmailOrUsername();
    validatePassword();
  
    
    const hasErrors = Object.values(loginErrors.value).some((error) => error !== '');
     
    if (!hasErrors) {
      const user = fakeDatabase.users.find(
        user => user.email === loginData.emailOrUsername && user.password === loginData.password
      );
      console.log(fakeDatabase.users);
      loginData.password = '';
      loginData.emailOrUsername = '';
      if (user) {
        toast.success("Logged in");
      } else {
        toast.error("Credantials Eroor");
      }
    } else {
      console.log('Login form has errors. Please fix them.');
    }
  };
  </script>
  
  <style scoped>
   .form-section {
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      width: 400px;
      max-width: 400px; 
    }

    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="tel"],
    select {
      width: 100%;
      padding: 0.7rem;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
    }
    .radio-group {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    .btn {
      position: relative;
      left: 120px;
      padding: 0.8rem 1.5rem;
      background-color: #e67e22;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.2s;
    }
    .btn:hover {
      background-color: #d35400;
    }

  .error {
    color: red;
    font-size: 0.9em;
  }
  </style>