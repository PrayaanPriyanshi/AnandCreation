import React,{useState} from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Home.css'; 
function Home() {
  const [hoveredImg1, setHoveredImg1] = useState(false);
  const [hoveredImg2, setHoveredImg2] = useState(false);

  const handleMouseEnter = (imgNumber) => {
    if (imgNumber === 1) {
      setHoveredImg1(true);
    } else if (imgNumber === 2) {
      setHoveredImg2(true);
    }
  };

  const handleMouseLeave = (imgNumber) => {
    if (imgNumber === 1) {
      setHoveredImg1(false);
    } else if (imgNumber === 2) {
      setHoveredImg2(false);
    }
  };
  return (<div>
  
    <div className='HomeContainer'>

      <div className='text'>

        <h3 className='text1'>WELCOME TO URBAN KITCHENS</h3>

        <h1 className='text2'>MODULAR KITCHEN & WARDROBES</h1>

        <p className='para'>URBAN KITCHENS provides creative and customized Modular Kitchen Solutions for variety of lifestyles, catering to individuals aesthetic desires & conceptual needs.<br></br><br></br>

        URBAN KITCHENS understands the importance of Kitchen and is responsible for redefining the Kitchen culture and contributing to an improved lifestyle. It is not just about form and function, URBAN KITCHENS is committed to deliver, but the extra human touch instilled from conceptualization to deliver your dream Kitchen.</p>
        <h3 className='text1'>Vision</h3>
        <p className='para'>To be market leader in the modular kitchen industry by providing international products customized for Indian requirements and affordable to masses.</p>
        <h3 className='text1'>Mission
        </h3>
        <p className='para'>We will achieve our vision by pursuing Cost, Quality & Customization. Further, we will keep on upgrading our state of the art European manufacturing facilities, strengthen ties with suppliers and expand market reach by establishing network of franchisee partners, who are already involved in modular kitchen industry.</p>



      </div>

      <div className='collection'>



     

        <div><img className='second' src="https://media.designcafe.com/wp-content/uploads/2020/06/27205613/compact-wardrobe-design-for-small-kitchen.jpg" /><img className='third' src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/25212810/L-shape-modular-kitchen-design-12-Indian-designs-that-can-transform-your-kitchen-FB-1200x700-compressed.jpg" /> </div>

        <div><img className='fifth' src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/why-is-l-shaped-modular-kitchen-layout-perfect-for-multipurpose-cooking/Title-l-shaped-kitchen-design-layout.jpg" /><img className='sixth' src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/25212810/L-shape-modular-kitchen-design-12-Indian-designs-that-can-transform-your-kitchen-FB-1200x700-compressed-686x400.jpg" /></div>

      </div>

    </div>
    
    
    <Link to="/about-us">  
<button className='knowmore'>Know More</button></Link>
<div className='main2'>
        <div
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          className={`img1 ${hoveredImg1 ? 'hovered' : ''}`}
        >
          <img src='https://media.designcafe.com/wp-content/uploads/2020/06/27211836/white-kitchen-wardrobe-designs-bangalore.jpg' alt='Image 1' />
        </div>
        <div
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          className={`img2 ${hoveredImg2 ? 'hovered' : ''}`}
        >
          <img src='https://dksmodularkitchens.com/wp-content/uploads/2021/11/21.jpg' alt='Image 2' />
        </div>
</div>
<div className='main3'>
<div><h3>LET'S MAKE SPACE FOR SOMETHING NEW</h3>
<h1><b>MAKE YOUR STATEMENT IN STYLE</b></h1><br></br>
<p>There are many things that complete you and your home. At Urban Kitchen , we believe that your kitchen is one of them. Which is why we design and build kitchens that are inspired by you and powered by your imagination. Designed by finest interior experts. Fabricated by the most sophisticated European technology around. And making optimum utilization of every space. We at Urban Kitchen redefine opulence, functionality and style. So turn over and help us make something new for you!</p>

<Link to='/contact'>
<button className='contectnow'>Contect Now</button></Link></div>


<div><img src='https://static.asianpaints.com/content/dam/asian_paints/services/beautiful-homes-service/white-and-blue-kitchen-top.jpg'></img></div>

</div>
<div className='main4'>
<div className='left'>
<div className='div1'><h3>CUSTOMISED MODULAR KITCHENS FOR EVERY SPACE AND BUDGET</h3></div>
<div className='div2'><h3> WORLD CLASS APPLIANCES AND ACCESSRIES</h3></div>
<div className='div3'><h3>3D KITCHEN DESIGN SERVICES</h3></div>
<div className='div4'><h3>WIDE RANGE OF MODULAR KITCHEN DISPLAYS</h3></div>
</div>
<div className='right'>
<h3>
WE GAVE THE BEST</h3>
<h1 style={{ fontSize: '30px', color: 'white', fontWeight: 'bold',margin:0 }}>
  PERFECTION AT URBAN KITCHEN
</h1>
<h7>
WE GAVE THE BEST
PERFECTION AT URBAN KITCHEN
It’s not everyday that we design a kitchen for you. So we’d rather make it special. This means we being all ears to understand you, your needs and your day. The usual and those unusual ones. And then making space to accommodate all that matters to you. Like a safe cabinet to keep your precious family crockery. Or then a breakfast table that can turn into a dimly lit midnight binge station with your little one? Pour out everything on us. And help us let you experience it.</h7>


<Link to='/contact'>
<button className='contectnow'>Contect Now</button></Link>
</div>

</div>

<div className='main5'>
<div className='video'><iframe src="https://urbankitchens.co.in/wp-content/uploads/2023/07/Arancia-modular-kitchen.mp4" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
<div className='videoRight'><h3>WE GAVE THE BEST</h3>
<h1>FROM FACTORY TO YOUR HOME – A JOURNEY</h1>
<h7>We know that the kitchen is at the heart of every home and that’s why no two Urban Kitchens are alike. We are taking you on a journey to see how a Urban kitchen comes to life, from design, modifications, manufacturing process to installation.</h7><br></br><br></br>
<a
href="https://urbankitchens.co.in/wp-content/uploads/2023/06/Arancia-Kuchen-Corporate-Video-2020-1.mp4"
target="_blank"
rel="noopener noreferrer"
>
<button className='moreVideo'>More Video</button>
</a>
</div>
</div>


<div className='main6'>
<h3 className='main6h3'>WHERE INNOVATION MEETS STYLE</h3>
<h1 className='main6h1'>REDEFINE YOUR KITCHEN WITH MODERN ELEGANCE</h1>
<h7 className='main6h7'>Discover the perfect blend of style, functionality, and innovation for your modern kitchen. We create the kitchen of your dreams. Whether you’re looking for sleek and minimalist designs or a cozy and inviting space, we have all the resources and ideas you need to transform your kitchen into a contemporary masterpiece.</h7>
</div>


<div className='main7'>
<div><img src='https://media.designcafe.com/wp-content/uploads/2020/06/27211747/wardrobe-design-for-kitchen.jpg'></img></div>
<div><img src='https://i.pinimg.com/originals/c1/3d/0e/c13d0edd577cec64d8cd873518595752.jpg'></img></div>
<div><img src='https://media.designcafe.com/wp-content/uploads/2020/06/27210002/granite-finish-kitchen-wardrobe.jpg'></img></div>
<div><img src='https://images.unsplash.com/photo-1631048498692-af6262577031?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGNhYmluZXRzfGVufDB8fDB8fHww'></img></div>

<Link to='kitchens'>
<button className='seeMore'>See More Collectoins</button></Link>

</div>



<div className='main8'>
<h3>EMBRACE THE FUTURE OF KITCHEN DESIGN</h3>
<h1>Modernize Your Culinary Space with Style and Innovation!"</h1>
<Link to='/contact'>

<button>Connect Now</button></Link>
</div>



<div className='main9'>

<h1>IDEAS FOR INSPIRATION</h1><br></br><br></br><br></br>
<p className='main9P'>Explore our wide range of articles, tips, and product recommendations to help you make informed decisions when it comes to modernizing your kitchen. From appliances and fixtures to lighting and decor, we have you covered</p><br></br><br></br>
<div className='main9Image1'><img src='https://www.nobroker.in/blog/wp-content/uploads/2022/02/kitchen-cupboard-design-ideas.jpg'></img></div>
<div className='main9Image2'><img src='https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-2023-1688629305-0KDli/kitchen-1689059826-HjSR9/real-home-1690363380-uaQ1b/46-1690363494-xmDen.jpg'></img></div>
<div className='main9Image3'><img src='https://media.designcafe.com/wp-content/uploads/2020/06/27211152/open-kitchen-wardrobe-design.jpg'></img></div>
<div className='main9Image4'><img src='https://housing.com/news/wp-content/uploads/2023/01/10-unique-cupboard-design-ideas-for-your-kitchen-7.jpg'></img></div>
<div className='main9Image5'><img src='https://www.makwanaworld.com/images/acrylic-laminate-kitchen-cabinet-design.jpg'></img></div>
<div className='main9Image6'><img src='https://www.trade4asia.com/ProductImg/kiward.jpg'></img></div>
</div>



<div className='main10'>
<div className='main10left'>
<h3>UNLEASH THE FUTURE OF KITCHEN DESIGN</h3>
<h1>RELENTLES PURSUIT
OF PERFECTION</h1>
<p>We’re here to be your go-to resource for all things modern kitchen. Whether you’re starting from scratch or looking to update your existing kitchen, let us be your guide to creating a space that embodies contemporary style, functionality, and innovation. Get ready to transform your kitchen into the heart of your home!</p>
<div className='main10left1'><img src='https://urbankitchens.co.in/wp-content/uploads/2023/10/design.png'></img><h3>Inspiring Design Ideas</h3><p>Discover stunning modern kitchen designs to spark your imagination.</p></div>
<div className='main10left1'><img src='https://urbankitchens.co.in/wp-content/uploads/2023/10/technology.png'></img><h3>Smart Appliances and Technology</h3><p>Find out about smart appliances, such as refrigerators, ovens, and coffee makers, that integrate seamlessly into modern kitchens.</p></div>
<div className='main10left1'><img src='https://urbankitchens.co.in/wp-content/uploads/2023/10/cloud-data.png'></img><h3>Functional and Stylish Storage</h3><p>Discover creative ways to incorporate pantry and countertop storage for a clean and organized kitchen</p></div>

</div>

<div className='main10Right'>
<div className='main10Image'><img src='https://telkitchens.in/srckchn/uploads/2021/12/Top-6-Questions-Related-to-Kitchen-Cabinet-You-Must-Know-About.jpg'></img></div>

<div className='main10Image'><img src='https://www.wakefit.co/guides/wp-content/uploads/2023/01/space-saving-furniture-1.jpg'></img></div>
<div className='div1Right'><h3>Minimalistic Aesthetic</h3><p>Modern kitchens often embrace a minimalistic aesthetic with clean lines, sleek surfaces, and a clutter-free environment.</p></div>
<div className='div2Right'><h3>Cutting-Edge Technology</h3><p>Modern kitchens incorporate the latest technological advancements to enhance convenience and efficiency.</p></div>
<div className='main10Image'><img src='https://www.asenseinterior.com/assets/uploads/catalogue_category_hd_image_1041646051107.jpg'></img></div>

<div className='main10Image'><img src='https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2020/05/18060242/Cover.png'></img></div>
<div className='div3Right'><h3>Open Concept Layout</h3><p>Modern kitchens tend to favor open concept layouts, blurring the boundaries between the kitchen and the living or dining areas.</p></div>
<div className='div4Right'><h3>High-Quality Materials</h3><p>Modern kitchens showcase high-quality materials that exude elegance and durability.</p></div>
</div>
</div>





<div className='main11'>
<div className='main11Left'><img src='https://spacewood.in/wp-content/uploads/2017/08/kitchen-4.jpg'></img></div>

<div className='main11Right'>
<h1>TESTIMONIALS</h1>
<div className='testimonials-container'>
<div className='main11Right1'><p>Working with Urban Kitchen was an excellent experience from start to finish. Their team of designers guided me through the entire process, providing valuable insights and suggestions. They were able to capture my style and preferences perfectly, resulting in a modern kitchen that exceeded my expectations. I highly recommend Urban Kitchen for their expertise, professionalism, and exceptional service.

Ayaan Sharma</p></div>
<div className='main11Right2'><p>Urban Kitchen transformed my outdated kitchen into a modern masterpiece. The design is sleek and contemporary, incorporating the latest trends and innovative features. The entire project was executed flawlessly, and the installation team was efficient and respectful. I am thrilled with the final result and would highly recommend Urban Kitchen to anyone looking for a modern kitchen transformation.

Sonu Singh</p></div>
<div className='main11Right3'><p>I am absolutely in love with my new modern kitchen designed and installed by Urban Kitchen. The team took my vision and turned it into a reality, creating a space that is not only stunning but also highly functional. The attention to detail and quality of workmanship are truly commendable. I couldn't be happier with the outcome!

Nita Roy
 </p></div>
</div>
</div>
</div>




<div className='main12' style={{ backgroundImage: 'url("https://assets.architecturaldigest.in/photos/600840c051daf9662c149457/16:9/w_2560%2Cc_limit/kitchen-cabinet-sidekix-media-unsplash-1366x768.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
<div className='main12Left'>
<h1>MESSAGE</h1><br></br>
<input type='text' placeholder='Name'></input>
<input type='text' placeholder='Email'></input>
<input type='text' placeholder='Mobile No.'></input>
<input type='textarea' placeholder='Message'></input>
<button>Send</button>
</div>
<div className='main12Right'>
<h1>CONTACT US</h1><br></br><br></br>
<div className='main12Right1'><IoLocationSharp /><h5>Upper Ground Floor, Khan Market ,<br></br> Barola Main Market , Sector -49 Noida, UP 201301</h5></div><br></br>
<div className='main12Right1'><MdOutlinePhoneAndroid />+919958088403</div><br></br>
<div className='main12Right1'><MdOutlinePhoneAndroid />+919871094410</div><br></br>
<div className='main12Right1'><MdAttachEmail /><h5>arancianoidancr@gmail.com</h5></div>
</div>
</div>
    </div>

  

  )

}

export default Home;



