import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import {library} from './top100.js'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const Home = () => {

return(
  <>
  <Tabs defaultActiveKey="2" centered>
   <TabPane
     tab={
       <span>

        FAVORITES
       </span>
     }
     key="1"
   >

   <h1 className="featuredTitle">
   List of Favorites
 </h1>


     <div className="albums">
       {
         library.map(album => (
           <Link to="/album" state={album} className="albumSelection">
             <img  src={album.image}
               alt="bull"
                style={{width: "250px", marginBottom:"10px"}}

               />
              <p>{album.title}</p>
           </Link>

         ))
       }
     </div>
   </TabPane>

   <TabPane
     tab={
       <span>

         NEW MUSIC
       </span>
     }
     key="2"
   >

      <h1 className="featuredTitle">
      New Music for you El!
    </h1>


        <div className="albums">
          {
            library.reverse().slice(1,8).map(album => (
              <Link to="/album" state={album} className="albumSelection">
                <img  src={album.image}
                  alt="bull"
                   style={{width: "250px", marginBottom:"10px"}}

                  />
                 <p>{album.title}</p>
              </Link>

            ))
          }
        </div>
   </TabPane>

   <TabPane
     tab={
       <span>

         HISTORY
       </span>
     }
     key="3"
   >

         <h1 className="featuredTitle">
         Previously Played
       </h1>


           <div className="albums">
             {
               library.reverse().slice(2,9).map(album => (
                 <Link to="/album" state={album} className="albumSelection">
                   <img  src={album.image}
                     alt="bull"
                      style={{width: "250px", marginBottom:"10px"}}

                     />
                    <p>{album.title}</p>
                 </Link>

               ))
             }
           </div>
   </TabPane>
 </Tabs>
  </>
)
}

export default Home;
