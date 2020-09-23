import React from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";

function Intro() {
  return (
    <div className="intro">
      <div className="quotes text-center px-5">
        <Typewriter
          options={{
            strings: [
              '"My body is my journal, and my tattoos are my story." ― Johnny Depp',
              '"Show me a man with a tattoo and I\'ll show you a man with an interesting past." ― Jack London',
              '"They keep track of time. Sometimes things happen and you feel that you need to mark them down." ― Scott O\'Connor, Untouchable',
              "\"I'll become someone new. Through blood and pain and ink, I can be remade. ― Alice Broadway, Ink",
              '"I love you. I trust you and... I want to be your human canvas!" ― Angela Gascoigne, Branded',
              '"You don’t choose your tattoo design, your tattoo chooses you!" ― Shirin Naghashlou',
              "\"Maybe that's what I needed. Another tattoo. Some pain on the outside to ease the pain on the inside. ― N.R. Walker, Spencer Cohen, Book One",
              '"Tattoos made my skin more "me" - Melissa Maxwell"',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 7,
          }}
        />
      </div>
      <div className="scroll text-center">
        <h4 className="scroll-bttn">scroll down</h4>
        <i class="ri-arrow-down-s-line"></i>
      </div>
    </div>
  );
}

export default Intro;
