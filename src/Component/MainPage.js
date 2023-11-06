import React, { useState, useEffect } from "react";
import List from "./Post/List.js";
import axios from "axios";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function MainPage() {

    const [PostList, setPostList] = useState([]);
    const [Sort, setSort] = useState("최신순");
    const [SearchTerm, setSearchTerm] = useState("");


    const getPostList = () => {
      let body = {
        sort : Sort,
        searchTerm: SearchTerm,
      };
        axios.post("/api/post/list", body).then((response) => {

            console.log('진입!!!');
            if(response.data.success){
                setPostList([...response.data.postList]);
            }
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
            console.log('에러!!!!!!!!!!!!!!');
        });
    };

    useEffect(() => {
      getPostList();
    },[Sort]);

    const SearchHandler = () => {
     
      getPostList();
    };

  return (
    <div>

    <DropdownButton id="dropdown-basic-button" title={Sort}>
      <Dropdown.Item onClick={() => setSort("최신순")}>최신순</Dropdown.Item>
      <Dropdown.Item onClick={() => setSort("인기순")}>인기순</Dropdown.Item>
      
    </DropdownButton>
      <input type="text" value={SearchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)}
      onKeyDown={(e) => {
        if(e.keyCode === 13) SearchHandler();
      }}/>
      <List PostList={PostList}/>
    </div>
  );
}

export default MainPage;
