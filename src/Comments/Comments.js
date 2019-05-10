import React, {Component} from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import List from './List';
import {connect} from 'react-redux';
import {Actions} from '../Store/Reducer';

class Comments extends Component{
    render(){
        return(
            <div>
                <h1>Blog comments</h1>
                <button onClick={this.props.setShowAddCommentDialogFlag}>Add Comment</button>
                <Comment />   
                <AddComment />
                <List />
             </div>
        );
    }
}

export default connect(null, (dispatch)=>{
    
    return{
        setShowAddCommentDialogFlag: ()=> dispatch({type: Actions.SetShowCommentModalFlag, showAddCommentDialog: true})
    }
})(Comments);