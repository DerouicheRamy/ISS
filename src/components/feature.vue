<template>
<section class="features">
    <h2>Why Choose Us?</h2>
    <div class="feature-boxes">
      <div class="feature">
        <img src="@/assets/images/payment-protection.png" alt="Feature Icon" />
        <h3>Secure Payments</h3>
        <p>Pay with confidence through our reliable platform.</p>
      </div>
      <div class="feature">
        <img src="@/assets/images/check.png" alt="Feature Icon" />
        <h3>Verified Listings</h3>
        <p>We ensure the authenticity of every listing.</p>
      </div>
      <div class="feature">
        <img src="@/assets/images/link.png" alt="Feature Icon" />
        <h3>Compatibility Matching</h3>
        <p>Find roommates who share similar lifestyles.</p>
      </div>
      <div class="feature">
        <img src="@/assets/images/customer-support.png" alt="Feature Icon" />
        <h3>Community Support</h3>
        <p>We’re here to help every step of the way.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

.features {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 2rem;
        background-color: #f7f7f7;
      }
    
      .features h2 {
        margin-bottom: 2rem;
        font-size: 2rem;
        color: #2c3e50;
      }
    
      .feature-boxes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        width: 100%;
        max-width: 1000px;
      }
    
      .feature {
        background: #fff;
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
      }
    
      .feature:hover{
       transform: scale(1.1);  
       transform: translate(0px, -15px) ; 
       box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
      }
    
      .feature img {
        width: 50px;
        margin-bottom: 1rem;
      }
    
      .feature h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #2c3e50;
      }
    
      .feature p {
        color: #7f8c8d;
      }



</style>