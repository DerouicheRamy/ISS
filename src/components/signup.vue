<template>
    <!-- Sign Up Form -->
    <form @submit.prevent="submitForm">
      <div class="form-section active" id="signUpSection">
        <div class="form-group">
          <label for="signupName">Full Name</label>
          <input
            type="text"
            id="signupName"
            v-model="formData.name"
            placeholder="name"
            @blur="validateName"
          />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>
  
        <!-- Email -->
        <div class="form-group">
          <label for="signupEmail">Email</label>
          <input
            type="email"
            id="signupEmail"
            v-model="formData.email"
            placeholder="name@example.com"
            @blur="validateEmail"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
  
        <!-- Phone (optional) -->
        <div class="form-group">
          <label for="signupPhone">Phone (optional)</label>
          <input
            type="tel"
            id="signupPhone"
            v-model="formData.phone"
            placeholder="+216 55-123-456"
            @blur="validatePhone"
          />
          <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
        </div>
  
        <!-- Password -->
        <div class="form-group">
          <label for="signupPassword">Password</label>
          <input
            type="password"
            id="signupPassword"
            v-model="formData.password"
            placeholder="••••••••"
            @blur="validatePassword"
          />
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </div>
  
        <!-- Confirm Password -->
        <div class="form-group">
          <label for="signupConfirm">Confirm Password</label>
          <input
            type="password"
            id="signupConfirm"
            v-model="formData.confirmPassword"
            placeholder="••••••••"
            @blur="validateConfirmPassword"
          />
          <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>
        </div>
  
        <!-- Sex -->
        <div class="form-group">
          <label>Sex</label>
          <div class="radio-group">
            <label>
              <input type="radio" name="userType" v-model="formData.sex" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="userType" v-model="formData.sex" value="female" /> Female
            </label>
          </div>
          <span v-if="errors.sex" class="error">{{ errors.sex }}</span>
        </div>
  
        <!-- Personal Details -->
        <div class="container">
          <h2>Personal Details</h2>
          <div class="personal-details">
            <!-- Do you smoke? -->
            <div class="form-group">
              <label>Do you smoke?</label>
              <div class="radio-group">
                <label>
                  <input type="radio" name="smoke" v-model="formData.smoke" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="smoke" v-model="formData.smoke" value="no" /> No
                </label>
              </div>
              <span v-if="errors.smoke" class="error">{{ errors.smoke }}</span>
            </div>
  
            <!-- Do you own a pet? -->
            <div class="form-group">
              <label>Do you own a pet?</label>
              <div class="radio-group">
                <label>
                  <input type="radio" name="pet" v-model="formData.pet" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="pet" v-model="formData.pet" value="no" /> No
                </label>
              </div>
              <span v-if="errors.pet" class="error">{{ errors.pet }}</span>
            </div>
  
            <!-- Are you a student? -->
            <div class="form-group">
              <label>Are you a student?</label>
              <div class="radio-group">
                <label>
                  <input type="radio" name="student" v-model="formData.student" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="student" v-model="formData.student" value="no" /> No
                </label>
              </div>
              <span v-if="errors.student" class="error">{{ errors.student }}</span>
            </div>
  
            <!-- Do you consider yourself clean and tidy? -->
            <div class="form-group">
              <label>Do you consider yourself clean and tidy?</label>
              <div class="radio-group">
                <label>
                  <input type="radio" name="clean" v-model="formData.clean" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="clean" v-model="formData.clean" value="no" /> No
                </label>
              </div>
              <span v-if="errors.clean" class="error">{{ errors.clean }}</span>
            </div>
  
            <!-- Do you prefer a quiet environment? -->
            <div class="form-group">
              <label>Do you prefer a quiet environment?</label>
              <div class="radio-group">
                <label>
                  <input type="radio" name="quiet" v-model="formData.quiet" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="quiet" v-model="formData.quiet" value="no" /> No
                </label>
              </div>
              <span v-if="errors.quiet" class="error">{{ errors.quiet }}</span>
            </div>
  
            <!-- Do you often invite friends? -->
            <div class="form-group">
              <label>Do you often invite friends?</label>
              <div class="radio-group">
                <label>
                  <input type="radio" name="friends" v-model="formData.friends" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="friends" v-model="formData.friends" value="no" /> No
                </label>
              </div>
              <span v-if="errors.friends" class="error">{{ errors.friends }}</span>
            </div>
          </div>
        </div>
  
        <!-- Submit Button -->
        <button class="btn" type="submit">Sign Up</button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import fakeDatabase from '../../database';
  const toast = useToast() ; 
  
  // Reactive form data
  const formData = ref({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    sex: '',
    smoke: '',
    pet: '',
    student: '',
    clean: '',
    quiet: '',
    friends: '',
  });
  
  // Reactive error messages
  const errors = ref({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    sex: '',
    smoke: '',
    pet: '',
    student: '',
    clean: '',
    quiet: '',
    friends: '',
  });
  
  // Validation functions
  const validateName = () => {
    if (!formData.value.name) {
      errors.value.name = 'Name is required.';
    } else {
      errors.value.name = '';
    }
  };
  
  const validateEmail = () => {
    const user = fakeDatabase.users.find(
        user => user.email === formData.value.email 
      );
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.value.email) {
      errors.value.email = 'Email is required.';
    } else if (!emailRegex.test(formData.value.email)) {
      errors.value.email = 'Invalid email format.';
    } else if(user){
      errors.value.email = 'this email is used before';
    }else{
      errors.value.email = "" ; 
    }
  };
  
  const validatePhone = () => {
    
    if (!formData.value.phone && formData.value.phone.trim().length!=8) {
      errors.value.phone = 'Invalid phone number.';
    } else {
      errors.value.phone = '';
    }
  };
  
  const validatePassword = () => {
    if (!formData.value.password) {
      errors.value.password = 'Password is required.';
    } else if (formData.value.password.length < 5) {
      errors.value.password = 'Password must be at least 8 characters.';
    } else {
      errors.value.password = '';
    }
  };
  
  const validateConfirmPassword = () => {
    if (!formData.value.confirmPassword) {
      errors.value.confirmPassword = 'Confirm Password is required.';
    } else if (formData.value.confirmPassword !== formData.value.password) {
      errors.value.confirmPassword = 'Passwords do not match.';
    } else {
      errors.value.confirmPassword = '';
    }
  };
  
   
  // Form submission handler
  const submitForm = () => {
    
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();
  
    
    const hasErrors = Object.values(errors.value).some((error) => error !== '');
    const NewUser = {
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone,
      password: formData.value.password,
      sex: formData.value.sex,
      smoke: formData.value.smoke,
      pet: formData.value.pet,
      student: formData.value.student,
      clean: formData.value.clean,
      quiet: formData.value.quiet,
      friends: formData.value.friends,
    }

    if(!hasErrors){
        toast.success("yeeeeees") ; 
        fakeDatabase.users.push(NewUser);
        console.log(NewUser);
        console.log(fakeDatabase.users);
    } else{
        toast.error("Form has errors. Please fix them.");
        console.log('Form has errors. Please fix them.');
    }
  };
  </script>
  
  <style scoped>
  .form-section {
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      width: 100%;
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
    h2{
      margin-bottom: 15px;
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
      left: 80px;
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