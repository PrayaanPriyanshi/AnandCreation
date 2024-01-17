import React from 'react'
import "./AboutUs.css";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div>
    <div className="Header">
             <h2>ABOUT US</h2>
          </div>


          <div className="HomeContainer1">
        <div className="text">
          <h3 className="text1">WELCOME TO URBAN KITCHENS</h3>

          <h1 className="text2">About Us</h1>

          <p className="para">
           <b>URBAN KITCHENS</b>  provides creative and customized Modular Kitchen
            Solutions for variety of lifestyles, catering to individuals
            aesthetic desires & conceptual needs.<br></br>
            <br></br>
            <b>URBAN KITCHENS</b>  understands the importance of Kitchen and is
            responsible for redefining the Kitchen culture and contributing to
            an improved lifestyle. It is not just about form and function,  <b>URBAN KITCHENS</b> is committed to deliver, but the extra human touch
            instilled from conceptualization to deliver your dream Kitchen.<br></br><br></br>

            Everyone is different,  <b>URBAN KITCHENS</b> , born with an eye for details and aesthetics, it is inclined to accentuate the uniqueness in you. Our elegantly created Kitchen design turns an ordinary looking space into an entity on its own.  <b>URBAN KITCHENS</b> , since inception, has adopted the philosophy of Creativity with Simplicity, with the aim to provide a customized kitchen solutions suiting to individual’s taste, requirement and off course budget. With this concept,  <b>URBAN KITCHENS</b> , presents a Complete Solution for your entire Kitchen requirement, with an unprecedented degree of quality.<br></br><br></br>

            <b>URBAN KITCHENS</b> ’ devotion to fulfill a pleasurable Kitchen experience has resulted in Solution that touch your heart and complete your home.

          </p>
          
          <Link to="/contact">
          <button   className="knowmore1">Connect Now</button>
        </Link>
        </div>

        <div className="collection">
          <div>
            <img
              className="second"
              src="https://urbankitchens.co.in/wp-content/uploads/2023/06/4-3.png"
            />
            <img
              className="third"
              src="https://urbankitchens.co.in/wp-content/uploads/2023/06/3-3.png"
            />{' '}
          </div>

          <div>
            <img
              className="fifth"
              src="https://urbankitchens.co.in/wp-content/uploads/2023/06/1-3.png"
            />
            <img
              className="sixth"
              src="https://urbankitchens.co.in/wp-content/uploads/2023/06/3-2.png"
            />
          </div>
          
        </div>
        
      </div>

     


      <div className="main51">
      <div className="video">
        <iframe
          src="https://urbankitchens.co.in/wp-content/uploads/2023/07/Arancia-modular-kitchen.mp4"
          width="640"
          height="340"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div className="videoRight">
        <h3 style={{ fontSize: '18px', color: 'orange', marginBottom: '10px' , fontWeight: 'bold'  }}>WE GAVE THE BEST</h3>
        <h1  style={{ fontSize: '30px', color: 'white', marginBottom: '10px' , fontWeight: 'bold'  }}>FROM FACTORY TO YOUR HOME – A JOURNEY</h1>
        <h7 style={{ fontSize: '16px', color: 'white'}}>
          We know that the kitchen is at the heart of every home and that’s
          why no two Urban Kitchens are alike. We are taking you on a journey
          to see how a Urban kitchen comes to life, from design,
          modifications, manufacturing process to installation.
        </h7>
        <br></br>
        <br></br>
        <a
          href="https://urbankitchens.co.in/wp-content/uploads/2023/06/Arancia-Kuchen-Corporate-Video-2020-1.mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="moreVideo">More Video</button>
        </a>
      </div>
    </div>

    <div className="videos">
               <div className="sets">
                <h3 style={{ color: "#FFC809" , fontSize:"25px" }}>WE GAVE THE BEST</h3>
                <h2  style={{ fontSize: '30px', color: 'black', marginBottom: '10px' , fontWeight: 'bold'  }}>MAKE YOUR STATEMENT IN STYLE</h2>
                 <p>
                  There are many things that complete you and your home. At Urban
                   Kitchen , we believe that your kitchen is one of them. Which is
                  why we design and build kitchens that are inspired by you and
                  powered by your imagination. Designed by finest interior experts.
                  Fabricated by the most sophisticated European technology around.
                 And making optimum utilization of every space. We at Urban Kitchen
                   redefine opulence, functionality and style. So turn over and help
                   us make something new for you!
                 </p>
               </div>
               <div className="Multiple-images">
                 <div className="multi1">
                   <div className="multiImg1">
                     {" "}
                    <img
                      src="https://urbankitchens.co.in/wp-content/uploads/2023/06/2-6.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="multiImg2">
                    {" "}
                    <img
                      src="https://urbankitchens.co.in/wp-content/uploads/2023/06/interior-shot-modern-house-kitchen-with-large-windows-1024x683.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="multiImg3">
                    <img
                      src="https://urbankitchens.co.in/wp-content/uploads/2023/06/3-4.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="multi2">
                  <div className="multiImg4">
                    <img
                      src="https://urbankitchens.co.in/wp-content/uploads/2023/06/2-4.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="multiImg5">
                    <img
                      src="https://urbankitchens.co.in/wp-content/uploads/2023/06/1-5.png"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>





            <div className="videos1">
            <div className="sets1">
             <h1 style={{ color: "#FFC809" , fontSize:"25px" }}>LET'S MAKE SPACE FOR SOMETHING NEW</h1>
            
              <p>
              It’s not everyday that we design a kitchen for you. So we’d rather make it special. This means we being all ears to understand you, your needs and your day. The usual and those unusual ones. And then making space to accommodate all that matters to you. Like a safe cabinet to keep your precious family crockery. Or then a breakfast table that can turn into a dimly lit midnight binge station with your little one? Pour out everything on us. And help us let you experience it.
              </p>
              <Link to="/contact">
              <button className="contectnow">Contect Now</button>
            </Link>
            </div>
            
            <div className="Multiple-images1">
            <div className="main-left1">
            
            <div className="main-left-item1">
              <img
                src="https://urbankitchens.co.in/wp-content/uploads/2023/06/kitchen.png"
                alt="Design"
              ></img>
              <div className="main-left-item-hp1">
                <h3>CUSTOMISED MODULAR KITCHENS FOR EVERY SPACE AND BUDGET</h3>
                <p>
                Be it any space, material, finishes or accessories,Urban Kitchen  kuchen offers you a complete solution to do up your kitchen the way you like and at the budget that suits you.
                </p>
              </div>
            </div>
  
            <div className="main-left-item1">
              <img
                src="https://urbankitchens.co.in/wp-content/uploads/2023/06/electronics.png"
                alt="Technology"
              ></img>
              <div className="main-left-item-hp1">
                <h3>WORLD CLASS APPLIANCES AND ACCESSORIES</h3>
                <p>
                Find an immaculate range of kitchen appliances and accessories with great designs and super functionality
                </p>
              </div>
            </div>
            <div className="main-left-item1">
              <img
                src="https://urbankitchens.co.in/wp-content/uploads/2023/06/pen.png"
                alt="Storage"
              ></img>
              <div className="main-left-item-hp1">
                <h3>WIDE RANGE OF MODULAR KITCHEN DISPLAYS</h3>
                <p>
                Design and decorate by choosing from a wide range of factory finishes and styles made of high quality and long lasting materials.
                </p>
              </div>
            </div>
  
            
          </div>
           </div>
         </div>



         <div className="videos2">
                    <h2 style={{ fontSize: '40px', color: 'Black', marginTop: '60px', fontWeight: 'bold',textAlign:'center' }}>WHY URBAN KITCHENS</h2>
                    <div className="videoss">
                     <div className="videos2same">
                        <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/service-image-retina-2.png" alt=""></img>
                        <h3>10 Years</h3>
                        <p>
                          More than 10 Years of professional experience in modular industry.
                         Partners with international Hardware and Accessories
                          manufacturers to provide truly world class solutions
                        </p>
                      </div>
                      <div className="videos2same">
                     <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/service-image-retina-2.png" alt=""></img>
                        <h3>Team of Experts</h3>
                        <p>
                          Team of expert designers to Design Customized yet functional
                          kitchens with interactive designing focusing Indian consumer
                         needs and climatic conditions
                        </p>
                      </div>
                      <div className="videos2same">
                     <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/service-image-retina-2.png" alt=""></img>
                        <h3>Complete Factory</h3>
                        <p>
                          Complete factory made units manufactured (under ISO 9001
                         norms)on best of the machines with several Quality Checks in
                          place
                        </p>
                      </div>
                      <div className="videos2same">
                      <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/service-image-retina-2.png" alt=""></img>
                        <h3>Experience</h3>
                       <p>
                          Installation by experienced and trained hands Wide range of
                          design options to choose from – Material, Hardware,Fittings and
                          Accessories, depending on individual taste and budget.
                        </p>
                      </div>
                    </div>
                  </div>

    </div>
  )
}

export default AboutUs






// import React from "react";
// import "./AboutUs.css";
// import { Link } from "react-router-dom";

// export default function AboutUS() {
//   return (
//     <div>
//       <div className="Header">
//         <h2>ABOUT US</h2>
//       </div>
//       <div className="container2">
//         <div className="section">
//           <div className="about">
//             <h3 style={{ color: "#FFC809", fontSize:"25px" }}>WELCOME TO URBAN KITCHENS</h3>
//             <h2>About Us</h2>
//             <p>
//               URBAN KITCHENS provides creative and customized Modular Kitchen
//               Solutions for variety of lifestyles, catering to individuals
//               aesthetic desires & conceptual needs.
//             </p>
//             <p>
//               URBAN KITCHENS understands the importance of Kitchen and is
//               responsible for redefining the Kitchen culture and contributing to
//               an improved lifestyle. It is not just about form and function,
//               URBAN KITCHENS is committed to deliver, but the extra human touch
//               instilled from conceptualization to deliver your dream Kitchen.
//             </p>
//             <p>
//               Everyone is different, URBAN KITCHENS, born with an eye for
//               details and aesthetics, it is inclined to accentuate the
//               uniqueness in you. Our elegantly created Kitchen design turns an
//               ordinary looking space into an entity on its own. URBAN KITCHENS,
//               since inception, has adopted the philosophy of Creativity with
//               Simplicity, with the aim to provide a customized kitchen solutions
//               suiting to individual’s taste, requirement and off course budget.
//               With this concept, URBAN KITCHENS, presents a Complete Solution
//               for your entire Kitchen requirement, with an unprecedented degree
//               of quality.
//             </p>
//             <p>
//               URBAN KITCHENS’ devotion to fulfill a pleasurable Kitchen
//               experience has resulted in Solution that touch your heart and
//               complete your home.
//             </p>
//            <Link to='/contact' ><button className="buttons">Connect Now</button></Link>
//           </div>
//           <div className="halfSection">
//             <div className="first">
//               <div className="Firstthalf">
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/4-3.png"
//                   alt=""
//                 ></img>
//               </div>
//               <div className="Firstthalf1">
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/1-3.png"
//                   alt=""
//                 ></img>
//               </div>
//             </div>
//             <div>
//               <div className="abx">
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/3-3.png"
//                   alt=""
//                 ></img>
//               </div>
//               <div className="abx">
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/3-2.png"
//                   alt=""
//                 ></img>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="video">
//           <div className="videoback">
//             <video className="videoplay" controls>
//               <source
//                 src="https://urbankitchens.co.in/wp-content/uploads/2023/07/Arancia-modular-kitchen.mp4"
//                 type="video/mp4"
//               ></source>
//             </video>
//           </div>
//           <br />
//           <div className="textt">
//             <h2 style={{ color: "#FFC809", fontSize:"25px"  }}>WE GAVE THE BEST</h2>
//             <h1>WE GAVE THE BEST FROM FACTORY TO YOUR HOME – A JOURNEY</h1>
//             <p>
//               We know that the kitchen is at the heart of every home and that’s
//               why no two Urban Kitchens are alike. We are taking you on a
//               journey to see how a Urban kitchen comes to life, from design,
//               modifications, manufacturing process to installation.
//             </p>
//             <a
// href="https://urbankitchens.co.in/wp-content/uploads/2023/06/Arancia-Kuchen-Corporate-Video-2020-1.mp4"
// target="_blank"
// rel="noopener noreferrer"
// >
//             <button className="buttons">More Videos</button></a>
//           </div>
//         </div>
//         <div className="videos">
//           <div className="sets">
//             <h3 style={{ color: "#FFC809" , fontSize:"25px" }}>WE GAVE THE BEST</h3>
//             <h2>MAKE YOUR STATEMENT IN STYLE</h2>
//             <p>
//               There are many things that complete you and your home. At Urban
//               Kitchen , we believe that your kitchen is one of them. Which is
//               why we design and build kitchens that are inspired by you and
//               powered by your imagination. Designed by finest interior experts.
//               Fabricated by the most sophisticated European technology around.
//               And making optimum utilization of every space. We at Urban Kitchen
//               redefine opulence, functionality and style. So turn over and help
//               us make something new for you!
//             </p>
//           </div>
//           <div className="Multiple-images">
//             <div className="multi1">
//               <div className="multiImg1">
//                 {" "}
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/2-6.png"
//                   alt=""
//                 ></img>
//               </div>
//               <div className="multiImg2">
//                 {" "}
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/interior-shot-modern-house-kitchen-with-large-windows-1024x683.jpg"
//                   alt=""
//                 ></img>
//               </div>
//               <div className="multiImg3">
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/3-4.png"
//                   alt=""
//                 ></img>
//               </div>
//             </div>
//             <div className="multi2">
//               <div className="multiImg4">
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/2-4.png"
//                   alt=""
//                 ></img>
//               </div>
//               <div className="multiImg5">
//                 <img
//                   src="https://urbankitchens.co.in/wp-content/uploads/2023/06/1-5.png"
//                   alt=""
//                 ></img>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="videos1">
//           <div className="videos1a">
//             <h2>LET'S MAKE SPACE FOR SOMETHING NEW</h2>
//             <p>
//               It’s not everyday that we design a kitchen for you. So we’d rather
//               make it special. This means we being all ears to understand you,
//               your needs and your day. The usual and those unusual ones. And
//               then making space to accommodate all that matters to you. Like a
//               safe cabinet to keep your precious family crockery. Or then a
//               breakfast table that can turn into a dimly lit midnight binge
//               station with your little one? Pour out everything on us. And help
//               us let you experience it.
//             </p>
//             <Link to='/contact'>
//             <button className="buttons">Connect Now</button></Link>
//           </div>
//           <div className="videos1b">
//           <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/kitchen.png"></img>
//             <h2>CUSTOMISED MODULAR KITCHENS FOR EVERY SPACE AND BUDGET</h2>
//             <p>
//               Be it any space, material, finishes or accessories,Urban Kitchen
//               kuchen offers you a complete solution to do up your kitchen the
//               way you like and at the budget that suits you.
//             </p>
//             <h2>WORLD CLASS APPLIANCES AND ACCESSORIES</h2>
//             <p>
//               Find an immaculate range of kitchen appliances and accessories
//               with great designs and super functionality
//             </p>
//             <h2>WIDE RANGE OF MODULAR KITCHEN DISPLAYS</h2>
//             <p>
//               Design and decorate by choosing from a wide range of factory
//               finishes and styles made of high quality and long lasting
//               materials.
//             </p>
//           </div>
//         </div>
//         <div className="videos2">
//           <h1>WHY URBAN KITCHENS</h1>
//           <div className="videoss">
//             <div className="videos2same">
//               <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/service-image-retina-2.png" alt=""></img>
//               <h3>10 Years</h3>
//               <p>
//                 More than 10 Years of professional experience in modular industry.
//                 Partners with international Hardware and Accessories
//                 manufacturers to provide truly world class solutions
//               </p>
//             </div>
//             <div className="videos2same">
//             <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/service-image-retina-2.png" alt=""></img>
//               <h3>Team of Experts</h3>
//               <p>
//                 Team of expert designers to Design Customized yet functional
//                 kitchens with interactive designing focusing Indian consumer
//                 needs and climatic conditions
//               </p>
//             </div>
//             <div className="videos2same">
//             <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/service-image-retina-2.png" alt=""></img>
//               <h3>Complete Factory</h3>
//               <p>
//                 Complete factory made units manufactured (under ISO 9001
//                 norms)on best of the machines with several Quality Checks in
//                 place
//               </p>
//             </div>
//             <div className="videos2same">
//             <img src="https://urbankitchens.co.in/wp-content/uploads/2023/06/service-image-retina-2.png" alt=""></img>
//               <h3>Experience</h3>
//               <p>
//                 Installation by experienced and trained hands Wide range of
//                 design options to choose from – Material, Hardware,Fittings and
//                 Accessories, depending on individual taste and budget.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="Texts">
//           <h1>SOCIAL RESPONSIBILITY</h1>
//           <p>
//             Social responsibility is fundamental to URBAN KITCHENS’ corporate
//             philosophy. Our choices reflect a commitment to respect the
//             territory in which the company was born and, above all, to provide
//             an example of positive values by involving ourselves directly in the
//             social fabric in which we work. From the materials we use,
//             production we do, processes we adopt and beyond, we respect the
//             mother earth and we commit to protect global environment by
//             conserving finite natural resources and energy
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


