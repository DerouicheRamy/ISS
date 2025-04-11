<template>
    <div class="dashboard-wrapper">
      <section class="welcome-section">
        <h2>Hello, Syrine!</h2>
        <p>Welcome back to your dashboard. Here's what’s new:</p>
        <ul>
          <li><strong>2</strong> new messages</li>
          <li><strong>3</strong> new room listings match your preferences</li>
        </ul>
      </section>
  
      <section class="recommendation-section">
        <h3>Recommended for You</h3>
        <div class="card-wrapper">
          <div class="card">
            <img src="https://via.placeholder.com/300x160" alt="Modern Apartment" />
            <h4>Modern Apartment in City Center</h4>
            <p>Location: Downtown | Rent: $700/month</p>
            <button>View Details</button>
          </div>
  
          <div class="card">
            <img src="https://via.placeholder.com/300x160" alt="Quiet Roommate Needed" />
            <h4>Quiet Roommate Needed</h4>
            <p>Age: 25 | Professional | Looking for a quiet place</p>
            <button>View Details</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .dashboard-wrapper {
    padding: 1rem;
  }
  
  .welcome-section h2 {
    font-size: 24px;
    margin-bottom: 0.5rem;
  }
  
  .welcome-section ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 0.5rem;
  }
  
  .recommendation-section {
    margin-top: 2rem;
  }
  
  .recommendation-section h3 {
    font-size: 20px;
    margin-bottom: 1rem;
  }
  
  .card-wrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
  
  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
  
  .card h4 {
    margin: 0.5rem 0;
    color: #2c3e50;
  }
  
  .card p {
    font-size: 14px;
    color: #555;
    margin-bottom: 1rem;
  }
  
  .card button {
    background-color: #e67e22;
    border: none;
    padding: 8px 16px;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .card button:hover {
    background-color: #d35400;
  }
  </style>