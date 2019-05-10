export var Actions ={
    SetCommentsList: 'SetCommentsList',
    SetShowCommentModalFlag:'SetShowCommentModalFlag'
}

export const  reducer=(state = initialState, action)=>{
    let newState = Object.assign({}, state);
    switch(action.type){
        case Actions.SetCommentsList:
            newState.Comments = action.comments;
            break;
        case Actions.SetShowCommentModalFlag:
            newState.ShowAddCommentDialog = action.showAddCommentDialog;
            break;
        default:
        break;
    }

    return newState;
}


var initialState = {
    Comments: null,
    ShowAddCommentDialog: false
}
