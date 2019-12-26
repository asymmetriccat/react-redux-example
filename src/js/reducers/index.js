import {ADD_ARTICLE} from "../constants/action-types";
import {addArticle} from "../actions";

const  initialState ={articles: [] };
function rootReducer(state = initialState, action){
    if(action.type ===ADD_ARTICLE){
       const newState = Object.assign({}, state, {articles: state.articles.concat(action.payload)});
       return newState;
    }
    return state;
   };

export default rootReducer;
