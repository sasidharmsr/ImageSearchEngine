
import { IMAGES_REQUEST,IMAGES_SUCCESS,IMAGES_FAILURE,RESET } from "./actiontypes";

const intialdata={
    inputsearch:"#",
    totalimages:0,
    images:[],
    error:"",
    pageno:1,
    loading:false
}

export const reduce=(state=intialdata,action)=>{
    switch(action.type)
    {
        case RESET:
            return{
                ...state,
                inputsearch:action.name,
                totalimages:action.payload.total,
                images:action.payload.results,
                error:"",
                pageno:1,
                loading:false
            }
        case IMAGES_REQUEST:
            return {
                ...state,
                loading:true,
                image:[]
            };
        case IMAGES_SUCCESS:
            let y=state.pageno+1;
            action.payload.results=state.images.concat(action.payload.results);
            return {
                loading:false,
                inputsearch:action.name,
                totalimages:action.payload.total,
                images:action.payload.results,
                pageno:y,
                error:""
            }
        case IMAGES_FAILURE:
            return {
                ...state,
                loading:false,
                images:[],
                error:action.payload
            }
        default:
            return state
    }
}


