import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faSearch,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import ShowResultSearch from "../Header/ShowResultSearch";
import { NavLink } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import request from "../../untils/request"
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { fetchTitleSearch } from "../../redux/product/fetchProductApi";



function InputSearchHearder()  {


  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // input search
  const inputCurrent = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [titleSerach, setTitleSearch] = useState("")
  // modal

  const handleClose = () => {
    setShowResult(true);
    setSearchValue("");
    inputCurrent.current.focus();
  };

  const handerHideResult = () => {
    setShowResult(false);
  }

  const handleFocus = () => {
    setShowResult(true);

  }

  const [searchResult, setSearchResult ] = useState([]);
  const [ loading, setLoading] = useState(false);



  const debounce = useDebounce(searchValue.toLowerCase(),500);

  const handerSearch = (e) => {
    const searchChangeValue = e.target.value;
    if(!searchChangeValue.startsWith(' ')){
        setSearchValue(searchChangeValue);
    }
  }

  const dispatchProductFilterText = async (e) => {
    fetchApi(e);
    setShowResult(false);
  }
  // const string = "Váy liền nữ cotton sát nách cổ đức có đai thắt eo";
  // console.log(string.normalize(NFD));

  const fetchApi = async () => {
      try {
          const titles = [];
          const slugs = [];
          const listIndex = [];
          const res = await fetch (`https://vercel-nodejs.onrender.com/api/v2/product/search?title=${debounce}`);
          const data = await res.json();
          await data.listTitle.map((slug, index) => {
            if(!slugs.includes(slug.slug)) {
              slugs.push(slug.slug);
              listIndex.push(index)
            }
          })
          console.log("slug", listIndex);
          await listIndex.map((title, index) => {
            titles.push(data.listTitle[title]);
          })
          setSearchResult(titles);
          setLoading(false);
      }
      catch(error){
          console.log(error);
      }
  }

  const handleClickSearch = async () => {
    const value = document.querySelector('.input-text').value;
    navigate(`/search?q=${value}`)
  }



  useEffect(()=> {
    if (!debounce.trim()) {
        setSearchResult([]);
        return;
    };

    setLoading(true);
    fetchApi();
}, [debounce]);
     return (
      <div>
        <Tippy
          placement = 'bottom'
          interactive
          visible = {showResult && searchResult.length > 0 }
          render={attrs => (
          <div className="box" tabIndex="-1" {...attrs}>
            {
              searchResult.length > 0 ? (
                <ShowResultSearch>
                  {
                    searchResult.map((text, index) => (
                      <NavLink id={text.slug} to={`/search?q=${text.slug}`} onClick={(text) => dispatchProductFilterText(text.target.id)} className="show-text">
                        <span>{text.description}</span>
                      </NavLink>
                    ))
                  }
                </ShowResultSearch>
              ) : (
                <></>
              )
            }
          </div>
          )}
          onClickOutside ={handerHideResult}
          >
          <div className="input">
                <input
                  className="input-text"
                  ref={inputCurrent}
                  placeholder="Search..."
                  spellCheck="false"
                  type="text"
                  value={searchValue}
                  onChange={handerSearch}
                  onFocus={handleFocus}
                ></input>

                <div className="icon-search">
                  <FontAwesomeIcon icon={faSearch} onClick={() => handleClickSearch()} />
                </div>
                  <div className="close" onClick={handleClose}>
                    {
                      loading && debounce.length > 0 ? (
                        <FontAwesomeIcon className="loading" icon={faSpinner}/>
                        ) : (
                        <></>
                      )
                    }
                    {
                      !loading && debounce.length > 0 ? (
                        <FontAwesomeIcon icon={faClose} />
                      ) : (
                        <></>
                      )
                    }

                    
                  </div>
          </div>
        </Tippy>
      </div>
     )
};

export default InputSearchHearder;