
 import React from 'react'
  import vg from "../asstes/purple.jpg";
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from  "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
      <h1>TechyStar</h1>
      <p>Solution to all your problems</p>
        </main>
        </div>
       <div className="home2">
      <img src={vg} alt="Graphics" />

      <div>
       <p>

      We are Your one adn only one solution to the tech problems you face
     every day.We are leading tech company whose aim is to increase 
      the problem solving ability in children

       </p>
       </div>
 </div>

        <div className="home3" id="about">
         <div>
           <h1>Who we are?</h1>       
              <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iusto corrupti soluta officiis deleniti aliquid perferendis porro voluptas eveniet totam exercitationem facere, iste tenetur. Praesentium, accusamus labore eligendi repellat inventore delectus quas!Lorem32
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi voluptatum doloremque cupiditate? Facere, atque. Iure aliquam corporis vitae dolorem, eius itaque mollitia odio unde cumque sunt tenetur magni voluptates beatae iste.


          </p>
       </div>
      </div>
    
      <div className="home4" id="brands">
       <div>
     <h1>Brands</h1>
     <article>
       <div style={{
         animationDelay:"0.3s",
       }}
       >
        <AiFillGoogleCircle/>
        <p>Google</p>
 </div>
       <div style={{
         animationDelay:"0.5s",
     }}>
        <AiFillAmazonCircle/>
         <p>Amazon</p>
       </div>
       <div style={{
         animationDelay:"0.7s",
      }}>
         <AiFillYoutube/>
         <p>Youtube</p>
       </div>
       <div style={{
         animationDelay:"1s",
       }}>
         <AiFillInstagram/>
         <p>Instagram</p>
       </div>
     </article>
   </div>
 </div>


</>
        
  );
 }

 export default Home 