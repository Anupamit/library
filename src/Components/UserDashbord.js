import React from "react";
import topimg from "../assets/Books.jpg";
import belowimg from "../assets/Pattern.png";
import bimg from "../assets/resume.jpg";
import ra from "../assets/right-arrow.png";
// import menu from '../assets/menu.png'
import vln from "../assets/Volnter.jpg";

const UserDashbord = () => {
  return (
    <div className="adminhome1">
      <div className="nav1">
        {/* <img className="menuimg" onClick={clickhandler} src={menu} alt="" /> */}
        User Dashboard...
      </div>
      <div className="imgtop" style={{ backgroundImage: `url(${topimg})` }}>
        <div className="txt1">
          <div className="txt1a">
            <h1 style={{ color: "black" }}>
              Create your E-Library and manage users
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              eligendi esse adipisci facere sunt. Laboriosam deleniti atque
              quibusdam corrupti ratione aliquid mollitia
            </p>
            <div className="btnanim">
              <div className="readmo">
                <span></span> Register Here
              </div>
              <div className="aran">
                <img src={ra} alt="" />
              </div>
            </div>
          </div>
          {/* <img style={{width:"100%"}}className='tpi' src={topimg} alt="" /> */}
        </div>
      </div>
      <div className="expout">
        <div className="explore">Explore...</div>
      </div>
      <div className="resumewriting">
        <div className="bimg">
          <img src={bimg} alt="" />
          <div className="txt1a-i">
            <h1 style={{ color: "black" }}>Add books</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              eligendi esse adipisci facere sunt. Laboriosam deleniti atque
              quibusdam corrupti ratione aliquid mollitia
            </p>
            <div className="btnanim" id="btnanimid">
              <div className="readmo">
                <span></span>Try it Out
              </div>
              <div className="aran">
                <img src={ra} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="scrlimg"
        style={{ backgroundImage: `url(${belowimg})` }}
      ></div>
      <div className="greenback">hiiiii</div>
      <div className="box">
        <div className="boxes">
          <h1 style={{ color: "black" }}>Tax Help</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsam accusamus fugiat voluptatem ducimus, reiciendis consequuntur
            blanditiis laborum tempore rem eos nesciunt beatae assumenda, vel
            id.
          </p>
          <a href="/#">Register here</a>
        </div>
        <div className="boxes">
          <h1 style={{ color: "black" }}>Interviewing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsam accusamus fugiat voluptatem ducimus, reiciendis consequuntur
            blanditiis laborum tempore rem eos nesciunt beatae assumenda, vel
            id.
          </p>
          <a href="/#">Register here</a>
        </div>
        <div className="boxes">
          <h1 style={{ color: "black" }}>Senior Living</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsam accusamus fugiat voluptatem ducimus, reiciendis consequuntur
            blanditiis laborum tempore rem eos nesciunt beatae assumenda, vel
            id.
          </p>
          <a href="/#">Register here</a>
        </div>
        <div className="boxes">
          <h1 style={{ color: "black", display: "flex" }}>Grow a Plant</h1>
          <p>
            On Thursday, April 13 at 7:00 pm at Byram
            <br />
            Shubert Library,learn the steps from seed to <br /> garden with
            Ellen Zampino.
          </p>
          <a href="/#">Register here</a>
        </div>
      </div>
      <div className="resumewriting">
        <div className="bimg">
          <img src={vln} alt="" />
          <div className="txt1a-i">
            <h1 style={{ color: "black" }}>Become a Volunteer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              eligendi esse adipisci facere sunt. Laboriosam deleniti atque
              quibusdam corrupti ratione aliquid mollitia
            </p>
            <div className="btnanim" id="btnanimidA">
              <div className="readmo">
                <span></span>
                <div className="lmo">Learn More</div>
              </div>
              <div className="aran">
                <img src={ra} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashbord;
