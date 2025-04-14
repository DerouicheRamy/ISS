<template>
<section class="hero">
        <div class="left">
            <div class="left-box">
                <h2>Looking for a Room?</h2>
                <p>Find verified listings with ease.</p>
                <button class="cta-button"><a href="/">Find a Room</a></button>
              </div>
        </div>
        <div class="vertical-line"></div>
        <div class="right">
            <div class="right-box">
                <h2>owning a Room ? </h2>
                <p>add your room.</p>
                <button class="cta-button">Add Room</button>
              </div>
        </div>
      </section>
</template>

<style scoped>
.hero {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh; 
        overflow: hidden;
      }
      
      .left,.right{
        flex: 1; 
        padding: 20px;
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: end;
      }
      .left{
        background-image: url("/contractimg.jpg");
        background-repeat: no-repeat; 
        background-size: cover; 
        background-position: center; 
      }
      .right{
        background-image: url("/contractimg.jpg");
        background-repeat: no-repeat; 
        background-size: cover; 
        background-position: center; 
      }
      
     .left:hover {
        transform: scale(1.04);
        z-index: 99;  
        position: relative;
      }
      
      .right:hover {
        transform: scale(1.04);
        z-index: 99;
        position: relative;
      }
      .left-box,.right-box {
        height: 100px;
        width: 40%;
        background-color: #d35400df;
        border-radius: 15px;
      }
    
      .vertical-line {
        width: 2px; 
        background-color: #ccc; 
      }
      
      .cta-button {
        background-color: #e67e22;
        border: none;
        border-radius: 4px;
        color: #fff;
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.2s;
      }
    
      .cta-button:hover {
        background-color: #d35400;
      }

      a {
        color: #fff;
        text-decoration : none 
      }
</style>
