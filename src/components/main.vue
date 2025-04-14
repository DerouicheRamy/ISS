<template>
  <div class="landing-page">
    <section class="hero">
      <div class="hero-content">
        <div class="text-content">
          <h1>Find your Roommate.<br>Find your Perfect Place.</h1>
          <p class="subtitle">
            Roommatch connects students and young renters to verified listings
            and compatible roommates near their campus. Whether you're looking
            for a place to stay or listing your own, we make it safe, simple,
            and stress-free to match.
          </p>
        </div>
        <img 
          class="hero-image"
          src="/contractimg.jpg" 
          alt="Roommates illustration"
        />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature-card">
        <h3>Verified Listings</h3>
        <p>We ensure the authenticity of every listing.</p>
      </div>
      <div class="feature-card">
        <h3>Secure Payments</h3>
        <p>Pay with confidence through our reliable platform.</p>
      </div>
      <div class="feature-card">
        <h3>Smart Matching</h3>
        <p>Find roommates who share similar lifestyles.</p>
      </div>
      <div class="feature-card">
        <h3>24/7 Support</h3>
        <p>We're here to help every step of the way.</p>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2>What Our Users Say</h2>
      <div class="testimonial-grid">
        <div class="testimonial-card">
          <p>"I found the perfect roommate in less than a week!"</p>
          <span>- Student A</span>
        </div>
        <div class="testimonial-card">
          <p>"The process felt secure and hassle-free!"</p>
          <span>- Student B</span>
        </div>
        <div class="testimonial-card">
          <p>"Listings are reliable, and I love the matching tools!"</p>
          <span>- Student C</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
        <div class="footer-section">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="footer-section">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="#"><img src="./facebook-icon.svg" alt="Facebook"></a>
            <a href="#"><img src="./twitter-icon.svg" alt="Twitter"></a>
            <a href="#"><img src="./instagram-icon.svg" alt="Instagram"></a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>© 2025 Roommatch. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
/* Base Styles */
.landing-page {
  font-family: 'Inter', sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
}

/* Hero Section */
.hero {
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-image {
  max-width: 600px;
  width: 100%;
  height: auto;
}

h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  max-width: 600px;
  line-height: 1.6;
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  text-align: center;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials {
  padding: 4rem 2rem;
  text-align: center;
}

.testimonials h2 {
  margin-bottom: 3rem;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.testimonial-card p {
  font-style: italic;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.testimonial-card span {
  color: #7f8c8d;
  font-weight: 600;
}

/* Footer */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 4rem 2rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
}

.footer-section a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #e67e22;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links img {
  width: 24px;
  height: 24px;
}

.copyright {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #34495e;
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
  }
  
  h1 {
    font-size: 3.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
}
</style>
