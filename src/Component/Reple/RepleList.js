import React, {useState, useEffect} from 'react';
import axios from "axios";
import RepleContent from "./RepleContent.js";
import {RepleListDiv, RepleContentDiv} from '../../Style/RepleCSS';
function RepleList(props) {
  const [repleList, setrepleList] = useState([]);

  useEffect(() => {
    let body = {
      postId: props.postId,
    };

    axios.post("/api/reple/getReple", body).then((response) => {
      if (response.data.success){
        setrepleList([...response.data.repleList]);
      }
    });
  }, [repleList]);//},[]); 여기 부분에 } [repleList]);라 하면 오류가 해결된다.

  return (
    <RepleListDiv>
    {repleList.map((reple, idx) =>{
      return <RepleContent reple={reple} key={idx}/>;
    })}
  </RepleListDiv>
  );
  
}

export default RepleList;
