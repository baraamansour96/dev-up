
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';


function Home() {
   return (
      <div>
         <nav>
            <div className="nav-left"> <img src="images/dev.jpg" alt="logo" className="logo" />
               <ul>
                  <li>
                     <img src="images/notification.png" alt="notification" />
                  </li>
                  <li>
                     <img src="images/mail.png" alt="email" />
                  </li>
                  <li>
                     <img src="images/video-camera (1).png" alt="video" />
                  </li>
               </ul>
            </div>
            <div className="nav-right"> <div className="search-box">
               <img src="images/search.png" alt="search" /> <input type="text" placeholder="search..." />
            </div>
               <div className="nav-user-icone online">
                  <img src="images/IMG_6982.jpg" alt="pro" />
               </div>
            </div>
         </nav>

         {/* container */}
        <div className="container">
            {/* leftsidebar */}
            <div className="left-sidebar"> <div className="emp-links"> <a href="#">
               <img src="images/house.png" alt="live-news" /> Last News</a> <a href="#">
                  <img src="images/chat (1).png" alt="chat" /> Chat</a>
               <a href="#"><img src="images/calendar (1).png" alt="calendar" /> Calendar</a>
               <a href="#"><img src="images/notes.png" alt="notes" /> Notes</a>
               <a href="#"><img src="images/form (1).png" alt="group" />Ask for free days</a> <a href="">See More</a>
            </div>
               <div className="shortcut-links"> <p>Your shortcuts</p>
                  <a href="#"><img src="images/95-5-tips.jpg" alt="data" /> Data</a>
                  <a href="#"><img src="images/Training.jpg" alt="ai-pra" /> AI & PRA</a>
                  <a href="#"><img src="images/shutterstock.jpg" alt="digital-skills" /> Digital skills</a>
                  <a href="#"><img src="images/Persoonlijke.jpg" alt="personal-effectiveness" /> Personal effectiveness</a>
               </div>
            </div>
            {/* main content */}
            <div className="min-content">
               <div className="story">
                  <div className="st">
                  <img src="images/cloud-computing.png" alt="pro" />
                  <p>post</p>
                    
                  </div>
               </div>
               
               
               <div className=" write-post">
                  <div className="user-pro">
                  <img src="images/IMG_6982.jpg" />
                  <div>
                     <p>dev</p>
                     <small>Puplic</small>
                  </div>
                  </div>
                  <div className="post-input">
                     <textarea rows="3" placeholder='write something..., dev?'></textarea>
                     <div className="add-post-links">
                        <a href='#'><img src="images/video-camera (1).png"></img>Live</a>
                        <a href='#'></a>
                        <a href='#'></a>

                     </div>

                  </div>
               </div>


               <div className="posting">
              
                  <div className="user-pro">
                  <img src="images/IMG_6982.jpg" />
                  <div>
                     <p>dev</p>
                     <small>april 20 2024 , 13:11pm</small>
                  </div>
                  </div>
                  <p> leren hier shrijf post<a href="https://www.youtube.com/watch?v=bJzb-RuUcMU" target='_blank'> our chang</a></p>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/bJzb-RuUcMU?si=TbidcaX3aMMzZYH1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <div className="com-share-like">
                     <div className="icons">
                     <div><img src='images/video-camera (1).png'></img>like</div>
                     <div><img src='images/video-camera (1).png'></img>comment</div>
                        <div><img src='images/video-camera (1).png'></img>share</div>
                        
                        

                     </div>

                  </div>
               </div>
           

               <div className="posting">
              
              <div className="user-pro">
              <img src="images/IMG_6982.jpg" />
              <div>
                 <p>dev</p>
                 <small>april 20 2024 , 13:11pm</small>
              </div>
              </div>
              <p> leren hier shrijf post<a href="https://www.youtube.com/watch?v=bJzb-RuUcMU" target='_blank'> our chang</a></p>
              <img src='images/95-5-tips.jpg' width="100%"></img>
                 <div className="icons">
                 <div><img src='images/video-camera (1).png'></img>like</div>
                 <div><img src='images/video-camera (1).png'></img>comment</div>
                    <div><img src='images/video-camera (1).png'></img>share</div>
                    
                    

                 </div>

              </div>
         
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
             {/* right sidebar */}
            <div className="right-sidebar">
               <div className="sidebar-title"> <h4> Events</h4> <a href="#"> See More</a>
               </div>
               <div className="event">
                  <div className="left-event">
                     <h3>20</h3> <span>March</span>
                  </div>
                  <div className="right-event"> <h4>Event</h4> <p> Business Networking</p>
                     <a href="">More Info</a> </div> </div> <div className="event"> <div className="left-event"> <h3>20</h3>
                        <span>April</span>
                     </div>
                  <div className="right-event"> <h4>Event</h4> <p>Future Tech 2024</p>
                     <a href="">More Info</a> </div> </div> <div className="sidebar-title"> <h4> Advertisement</h4> <a href="#"> Close</a>
               </div>
               <img src="images/Hostinger.jpg" className="sidebar-ads" alt="advertisement" />
            </div>
         </div>
         
         
      </div>
   );
}
export default Home;
