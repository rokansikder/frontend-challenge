import axios from 'axios';
import {Actions} from '../Store/Reducer';

var baseUrl = "https://comments-api.azurewebsites.net/api";

var getComments = ()=>{
    axios.get(`${baseUrl}/comments`).then((response)=>{            
        window.store.dispatch({ type: Actions.SetCommentsList, comments: response.data });
    });
}

var addComment = (comment)=>{
    return axios.post(`${baseUrl}/comments`, comment);
}

(function(){
    getComments();
})();

export {getComments, addComment};