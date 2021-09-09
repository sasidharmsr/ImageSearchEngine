import axios from 'axios'
import { IMAGES_REQUEST,IMAGES_SUCCESS,IMAGES_FAILURE,RESET } from "./actiontypes";

export const image_request=(inputsearch)=>{
    return {
        type:IMAGES_REQUEST,
        payload:inputsearch
    }
}

export const image_success=(images,number,name)=>{
    return {
        type:IMAGES_SUCCESS,
        payload:images,
        no:number,
        name:name
    }
}

export const image_failue=(error)=>
{
    return {
        type:IMAGES_FAILURE,
        payload:error
    }
}

export const reset=(data,name)=>{
     return {
        type:RESET,
        name:name,
        payload:data
    }
}

export const fetchimag=(name,pageno)=>{
    const id="e-sSC6x2ml_VibuM3kbFEO9XEP3MdgnouprjpKWy_hY";

    return (dispatch)=>{
        dispatch(image_request(name));
        axios.get(`https://api.unsplash.com/search/photos?page=${pageno}&per_page=24&query=${name}&client_id=${id}`)
        .then((respose)=>{
            console.log(respose.data);
                if(pageno===1)
                {
                    dispatch(reset(respose.data,name))
                }
                else
                    dispatch(image_success(respose.data,pageno,name));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(image_failue(error));
        })
    }
}



