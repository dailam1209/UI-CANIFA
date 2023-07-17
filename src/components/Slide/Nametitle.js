import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { name_hearder } from "../../data/dataSidebar";

const Nametitle = () => {
  let isFirstTitle = true;
  // let currentLocation = window.location;
  // console.log(location.pathname)
  // const [firstActive, setFirstActive] = useState(0)
  // const handleActive = (e) => {
  //     let currentIndex ;
  //     currentIndex = parseFloat(e);
  //     console.log('current', e)

  //     // eslint-disable-next-line array-callback-return
  //     name_hearder.map((e, index) => {
  //         let check_name;
  //         let check_color;
  //         if(index === currentIndex ) {
  //             check_name = document.querySelectorAll(`.no-active-${index}`);
  //             check_color = document.querySelectorAll('a[id="'+ index +'"]');
  //             console.log('one',check_name)
  //             // console.log(check_color)
  //             Array.from(check_name).map((_,index) => (
  //                 _.classList.add('active')
  //             ))
  //             console.log('two',check_name)
  //             Array.from(check_color).map((_,index) => (
  //                 _.style.color = 'white'
  //             ))
  //         }
  //         else {
  //             check_name = document.querySelectorAll(`.no-active-${index}`);
  //             check_color = document.querySelectorAll('a[id="'+ index +'"]');

  //             Array.from(check_name).map((_,index) => (
  //                 _.classList.remove('active')
  //             ))
  //             Array.from(check_color).map((_,index) => (
  //                 _.style.color = '#6c757b'
  //             ))
  //         }
  //     })
  // }


  // Active red under text
  


  const [width, setWidth] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWidth({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    
    return () => {
      window.removeEventListener("resize", detectSize);
    };

    
  }, [width]);


  useEffect(() => {
     
      if(window.location.pathname === '/') {
        let none_check_name = document.querySelectorAll(".no-active-title");
      Array.from(none_check_name).map((_, index) => {
        _.classList.remove("active-name");
      });
      }
     
  }, [])

  const handleActive = (e) => {
    isFirstTitle = false;
    let none_check_name = document.querySelectorAll(".no-active-title");
    Array.from(none_check_name).map((_, index) => {
      _.classList.remove("active-name");
    });

    let name;
    name = e.target.id;

    name.toString();



    // eslint-disable-next-line array-callback-return
    let checked_check_name = document.querySelectorAll(".active-name");
    let check_name = document.querySelectorAll('div[id="' + name + '"]');
    
    Array.from(check_name).map((_, index) => {
      _.classList.add("active-name");
    });

    

  };

  

  return (
    <>
      <div className="cay">
        <ul>
          {name_hearder.map((e, index) => (
            <li
              className="title-name"
              key={index}
              onClick={(e) => handleActive(e)}
            >
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#333f48" : "#6c757b",
                })}
                id={`${e.name}`}
                to={e.path}
              >
                {e.name}
              </NavLink>
              <div
                id={`${e.name}`}
                className={`no-active-${index} no-active-title`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nametitle;
