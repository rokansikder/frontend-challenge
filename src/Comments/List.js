import React, {Component} from 'react';
import {ReactPaginate} from 'react-paginate';
import Comment from './Comment';
import { connect } from 'react-redux';

class List extends Component{
    render(){
        if(!this.props.comments) return null;

        let commentsContents = null;
        let commentList = this.props.comments.slice(0);
        commentList.sort((a, b)=>{
            return b.id - a.id;
        });        
        if(this.props.comments) commentsContents = commentList.map((c)=> <Comment key={c.id} comment={c} />);
        return(
            <div>
                {commentsContents}
            </div>
        );
    }
}

export default connect((state)=>{
    return{
        comments: state.Comments
    }
})(List);