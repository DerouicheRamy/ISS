<script setup>
import axios from 'axios';
import { ref } from 'vue';

const handle = async () => {
  const response = await axios.post("http://localhost:5000/houses",{
    "title" : formData.value.title ,
    "location" : formData.value.location , 
    "price" : formData.value.price ,
    "rating" : 3 , 
  }) ; 
} 

const formData = ref({
  title: '',
  location: '',
  price: null,
  rating : 3 ,
  images: [],
  amenities: {
    furnished: false,
    parking: false,
    laundry: false,
  },
  ownershipProof: null,
  paymentMethod: '',
})
</script>

<template>
<div class="container">
    <h2>Add a New Property</h2>

    <!-- Property Title -->
    <div class="form-group">
      <label>Property Title</label>
      <input type="text" v-model="formData.title" placeholder="Cozy Apartment near Downtown">
    </div>

    <!-- Location -->
    <div class="form-group">
      <label>Location</label>
      <input type="text" v-model="formData.location" placeholder="123 Main Street, City">
    </div>

    <!-- Monthly Price -->
    <div class="form-group">
      <label>Monthly Price</label>
      <input type="number" v-model="formData.price" placeholder="Price">
    </div>

    <!-- Property Images -->
    <div class="form-group">
      <label>Property Images</label>
      <input type="file" @change="handleImageUpload" multiple>
    </div>

    <!-- Amenities -->
    <div class="form-group">
      <label>Amenities</label>
      <label><input type="checkbox" v-model="formData.amenities.furnished"> Furnished</label>
      <label><input type="checkbox" v-model="formData.amenities.parking"> Parking</label>
      <label><input type="checkbox" v-model="formData.amenities.laundry"> Laundry</label>
    </div>

    <!-- Proof of Ownership -->
    <div class="form-group">
      <label>Proof of Ownership</label>
      <input type="file" @change="handleOwnershipUpload">
    </div>

    <!-- Secure Payment Setup -->
    <div class="form-group">
      <label>Secure Payment Setup</label>
      <select v-model="formData.paymentMethod">
        <option>Payment Method 1</option>
        <option>Payment Method 2</option>
      </select>
    </div>

    <!-- Submit Button -->
    <button @click="handle">Submit Property</button>
</div>
</template>

<style scoped>
.container { width: 100%; max-width: 600px; margin: 2rem auto; background: #fff; padding: 1rem; 
                 border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
h2 { margin-bottom: 1rem; text-align: center; }
.form-group { margin-bottom: 1rem; }
label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
input[type="text"], input[type="number"], input[type="file"], textarea {
    width: 90%; padding: 0.7rem; border: 1px solid #bdc3c7; border-radius: 4px; 
}
input[type="checkbox"] { margin-right: 0.5rem; }
button { background: #e67e22; color: #fff; border: none; border-radius: 4px; 
            padding: 0.7rem 1rem; cursor: pointer; margin-top: 1rem; margin-left: 210px;}

</style>