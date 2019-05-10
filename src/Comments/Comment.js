import React, {Component} from 'react';

export default class Comment extends Component{
    render(){
        if(!this.props.comment) return null;
        return(
            <div className="content-area">
                <div className="content=form">
                    <div className="content-header">
                       <p> <strong> <i className="fa fa-user"></i> {this.props.comment.name}</strong> </p>                       
                    </div>
                    <div className="commentBody">
                        <p>{this.props.comment.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}