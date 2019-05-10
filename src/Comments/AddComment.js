import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import {Actions} from '../Store/Reducer';
import axios from 'axios';
import {getComments, addComment} from '../Util/DataAccess';

class AddComment extends Component{
    state={
        name: '',
        body: '',
        errorMessage: null,
        successMessage: null,
        loading: false
    }

    onChange = (e)=>{
        this.setState({[e.target.id]: e.target.value, errorMessage: null, successMessage:null });        
    }

    onSave = ()=>{
        if(!this.state.name || this.state.name.length < 0){
            this.setState({errorMessage: 'Please enter your name'});
            return;
        }

        if(!this.state.body || this.state.body.length < 0){
            this.setState({errorMessage: 'Please enter comments'});
            return;
        }
                
        this.setState({loading: true});
        addComment({name:this.state.name, body: this.state.body}).then((res)=>{
            getComments();
            this.onCancel();
            this.setState({successMessage: 'Comments saved'});
        }).catch((ex)=>{
            console.log(ex);
            this.setState({errorMessage:'Error saving comment'});
        }).then(()=>{
            this.setState({loading: false})
        });
    }

    onCancel= ()=>{
        this.setState({name: '', body: ''});
    }

    handleHide = ()=>{
        this.props.setShowAddCommentDialogFlag();
    }
    render(){
        return(
            <Modal size="lg" show={this.props.showDialog} area-labelledby="contained-modal-title-vcenter"
                center="true" onExit={this.onExit} onHide={this.handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add New Comment
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                <label>
                                    Name
                                </label>
                                <input type="text" id="name" className="textbox" value={this.state.name} style={{width:'100%'}} onChange={this.onChange}></input>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                <label>
                                    Comments
                                </label>
                                <textarea id="body" rows="4" cols="50" className="textarea" value={this.state.body} style={{width:'100%'}}  onChange={this.onChange}></textarea>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button onClick={this.onSave} disabled={this.state.loading}>Save</button>
                            <button onClick={this.onCancel} className="btnCancel">Cancel</button>
                        </div>
                    </div>
                    <div>
                        <p className="message error-message" style={{ display: this.state.errorMessage ? 'block' : 'none' }}>
                            {this.state.errorMessage}
                        </p>
                        <p className="message success-message" style={{ display: this.state.successMessage ? 'block' : 'none' }}>
                            {this.state.successMessage}
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default connect((state)=>{    
    return{
        showDialog: state.ShowAddCommentDialog
    }
}, (dispatch)=>{
    return{
        setShowAddCommentDialogFlag: ()=> dispatch({type: Actions.SetShowCommentModalFlag, showAddCommentDialog: false})
    }
})(AddComment);