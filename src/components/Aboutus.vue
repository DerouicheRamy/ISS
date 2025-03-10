<template>
<!-- Hero -->
<div class="hero">
  <div class="overlay"></div>
  <div class="hero-content">
    <h1>About Us</h1>
    <p>Learn more about our mission, vision, and the team behind Roommatch.</p>
  </div>
</div>

<!-- Main Content -->
<main>
  <!-- Mission & Vision Section -->
  <section class="mission-vision">
    <h2>Our Mission & Vision</h2>
    <p>
      We strive to make finding the perfect roommate simple, secure, and affordable for students across the country.
    </p>
    <p>
      Our vision is a world where students can easily connect, share, and thrive in a supportive living environment.
    </p>
  </section>

  <hr>

  <!-- Team Section -->
  <section class="team">
    <h2>Meet Our Team</h2>
    <div class="team-members">
      <!-- Example Member -->
      <div class="team-member">
        <img src="https://via.placeholder.com/80" alt="Team Member 1" />
        <h3>Member Five</h3>
        <p>Co-Founder & CEO</p>
      </div>
      <!-- Example Member -->
      <div class="team-member">
        <img src="https://via.placeholder.com/80" alt="Team Member 2" />
        <h3>Member Four</h3>
        <p>Co-Founder & CTO</p>
      </div>
      <!-- Example Member -->
      <div class="team-member">
        <img src="https://via.placeholder.com/80" alt="Team Member 3" />
        <h3>Member One</h3>
        <p>Marketing & Sales</p>
      </div>
      <div class="team-member">
        <img src="https://via.placeholder.com/80" alt="Team Member 3" />
        <h3>Member Two</h3>
        <p>Marketing & Sales</p>
      </div>
      <div class="team-member">
        <img src="https://via.placeholder.com/80" alt="Team Member 3" />
        <h3>Member Three</h3>
        <p>Marketing & Sales</p>
      </div>
    </div>
  </section>
  <hr>

  <!-- Contact & Social Media Section -->
  <section class="contact">
    <h2>Contact Us</h2>
    <p>We’d love to hear from you! Please reach out for any questions, support, or just to say hi.</p>
    <p>Email: <a href="mailto:info@Roommatch.com">info@roommatefinder.com</a></p>
    <p>Phone: +216 55-123-456</p>
    <div class="social-links">
      <a href="#" target="_blank">Facebook</a>|
      <a href="#" target="_blank">Instagram</a>|
      <a href="#" target="_blank">Twitter</a>|
      <a href="#" target="_blank">LinkedIn</a>
    </div>
  </section>
</main>

</template>

<style scoped>
    /* Hero / Title Section */
    .hero {
      height: 300px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-align: center;
    }
    .hero .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #e0802ced;
      z-index: 0;
    }
    .hero .overlay:hover{
        background: #f27100ed;
        transform: scaleY(1.03);
        overflow: hidden;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      padding: 1rem;
    }
    .hero-content h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    .hero-content p {
      font-size: 1.2rem;
      line-height: 1.5;
    }

    /* Main Container */
    main {
      flex: 1;
      width: 90%;
      max-width: 1000px;
      margin: 2rem auto;
    }

    /* Mission & Vision Section */
    .mission-vision {
      margin-bottom: 3rem;
      text-align: center;
    }
    .mission-vision h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .mission-vision p {
      font-size: 1rem;
      line-height: 1.6;
      max-width: 700px;
      margin: 0.5rem auto;
      color: #7f8c8d;
    }

    /* Team Section */
    .team {
      margin-bottom: 3rem;
    }
    .team h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    .team-members {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
      justify-items: center;
    }
    .team-member {
      background: #fff;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .team-member:hover{
        transform: scale(1.2);
        transform: translate(0px, -20px) ; 
        box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.3);
    }
    
    .team-member img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1rem;
    }
    .team-member h3 {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      color: #2c3e50;
    }
    .team-member p {
      font-size: 0.95rem;
      color: #7f8c8d;
    }

    /* Contact Section */
    .contact {
      text-align: center;
      margin-bottom: 3rem;
    }
    .contact h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .contact p {
      font-size: 1rem;
      color: #7f8c8d;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    .social-links a {
      display: inline-block;
      margin: 0 0.5rem;
      color: #2c3e50;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
    .social-links a:hover {
      color: #2980b9;
    }
</style>