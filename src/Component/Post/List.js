import React from "react";

import {Link} from "react-router-dom";
import {ListDiv, ListItem} from "../../Style/ListCSS.js";

import moment from "moment";
import "moment/locale/ko";

function List(props) {//props
    
    const SetTime = (a, b) => {
        if(a !== b) {
            return moment(a).format('YYYY년 MMMM Do, hh:mm:ss ') + "(수정됨)";
        }else {
            return  moment(b).format('YYYY년 MMMM Do, hh:mm:ss ');
        }
    };
    
   

    return(
        <ListDiv>
        {props.PostList.map((post, idx) => {
            console.log(post);
            return (
            <ListItem key={idx}>
                <Link to={`/post/${post.postNum}`}>
                <p className="title">
                    제목:  {post.title}
                </p>
                <p className="auth">작성자 : {post.author.displayName}</p>
                <p>내용 : {post.content}</p>
                <p>{SetTime(post.createdAt, post.updatedAt)}</p>
                </Link>
                
                </ListItem>
            );
        })}
        </ListDiv>
    );
    }

    export default List;