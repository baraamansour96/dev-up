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
            </div> {/* right sidebar */}
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