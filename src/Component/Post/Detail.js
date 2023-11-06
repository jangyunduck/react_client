import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";


function Detail(props) {
    let params = useParams();
    let navigate = useNavigate();
 
    const user = useSelector((state) => state.user);
    

    //useEffect(() => {
   //   console.log(PostInfo);
   // }, [PostInfo]);

    const DeleteHandler = () => {
      if(window.confirm("정말로 삭제하시겠습니까?")){
        let body = {
          postNum : params.postNum,
      };
     axios.post("/api/post/delete", body).then((response) => {
      if(response.data.success){
          alert("게시글이 삭제되었습니다.");
          navigate("/");
      }
     }).catch((err) => {
      alert("게시글 삭제에 실패하였습니다.");
     });
      }
    };


  return (
    <div>
       
          <>
            <div>
               <h1>{props.PostInfo.title}</h1>
               <h3>{props.PostInfo.author.displayName}</h3>
               {props.PostInfo.image ? <img src={`http://localhost:5000/${props.PostInfo.image}`} alt="" style={{width:"100%", height: "auto"}}/> : null }
                {props.PostInfo.content} 
              
            </div>
            {user.uid === props.PostInfo.author.uid && (
              <div>
              <Link to={`/edit/${props.PostInfo.postNum}`}>
              <button className="edit">수정</button>
              </Link>
           
            <button className="delete" onClick={() => DeleteHandler()}>삭제</button>
          </div>
            )}
            
            </>
        
     
    </div>
  );
}

export default Detail
