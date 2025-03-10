<template>
<section class="testimonials">
    <h2>What Our Users Say?</h2>
    <div class="testimonial-items">
      <div class="testimonial">
        <img src="https://via.placeholder.com/60" alt="Student A" />
        <p>“I found the perfect roommate in less than a week!”</p>
        <span class="author">- Student A</span>
      </div>
      <div class="testimonial">
        <img src="https://via.placeholder.com/60" alt="Student B" />
        <p>“The process felt secure and hassle-free!”</p>
        <span class="author">- Student B</span>
      </div>
      <div class="testimonial">
        <img src="https://via.placeholder.com/60" alt="Student C" />
        <p>“Listings are reliable, and I love the matching tools!”</p>
        <span class="author">- Student C</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
        padding: 3rem 2rem;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    
      .testimonials h2 {
        font-size: 2rem;
        color: #2c3e50;
        margin-bottom: 2rem;
      }
    
      .testimonial-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        width: 100%;
      }
    
      .testimonial {
        background: #fff;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease ; 
      }
    
      .testimonial:hover{
        transform: scale(1.1);
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
       }
    
      .testimonial img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
      }
    
      .testimonial p {
        margin-bottom: 0.5rem;
        color: #2c3e50;
        font-style: italic;
      }
    
      .testimonial .author {
        font-weight: bold;
        color: #7f8c8d;
      }
</style>