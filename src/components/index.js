import { connect } from "react-redux"
import {fetchimag} from '../redux/actions'
import "../scripts/index.css"
import React,{ useState } from "react"
import {ImageComponent} from "./imageComponent"

const ImagesSearchEngineComponent =({Imagedata,fetchimages})=>{
  let localtext="";
  let [text,settext]=useState("");
  let [NoOfImages,setNoOfImages]=useState(8);
  localtext=text;
  const update= () =>{
    localtext=document.getElementById("inpu").value;
  }
  const GetImages=(e)=>{
    if(localtext!=="")
    {
      e.preventDefault();
      fetchimages(localtext,1);
      settext(localtext);
      setNoOfImages(8);
    }
    else
    {
        e.preventDefault();
        fetchimages("",1);
        settext("");
    }
  }

  const loadimg=()=>{
    if(Imagedata.images.length<=NoOfImages)
    {
      setNoOfImages(prevNoOfImages=>{
        return prevNoOfImages+8;
      })
      fetchimages(localtext,Imagedata.pageno+1);
    }
    else{
    setNoOfImages(prevNoOfImages=>{
      return prevNoOfImages+8 ;
    })
  }
  }

  const ImageCount=()=>{
    if(Imagedata.inputsearch!=="#" && Imagedata.inputsearch!=="" && Imagedata && Imagedata.loading===false)
    {
        return (
          <div className="countdiv">
            <h1 className="title">{Imagedata.inputsearch.toUpperCase()}</h1>
            <p className="para">{Imagedata.totalimages} images has been found</p>
          </div>
        )
    }
  }
  const ImageDiv=()=>{
      if(Imagedata.images){
      let key=0;
      return (
        <ul className="imgdiv">
          {
            Imagedata.images.slice(0,(NoOfImages)).map(img=>(
              <ImageComponent src={img.urls.small} key={key++} alt="" />
            ))
          }
        </ul>
      )
      }
      else if(Imagedata.loading)
        return <h1 className="title">Loading....!</h1>
  }
  const LoadMore=()=>{
    if(Imagedata.inputsearch!=="#" && Imagedata.loading===false && Imagedata.totalimages>=NoOfImages){
    return(
      <div className="btndiv">
        <button onClick={loadimg} id="LoadMore" className="LoadMorebtn">Load More</button>
      </div>
    )
    }
    else
      return (<></>);
  }
  return (
    <div className="bg-container">
     <div className="main-container">
       <div className="formdiv">
       <form className="form" onSubmit={GetImages}>
      <input placeholder="Search for Images" type="search"  onChange={update} className="input" id="inpu"></input>
      <button className="btn" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15" className="search">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
      </form>
      </div>
        {ImageCount()}
        {ImageDiv()}
        {LoadMore()}
    </div>
    </div>
  )
}

const MapStateToProps=(state)=>{
  return {
    Imagedata:state.images,
  };
};
const mapDispatchToProps=(dispatch)=>{
  return{
    fetchimages:(name,NoOfImagesno)=>dispatch(fetchimag(name,NoOfImagesno)),
  };
};

export default connect(MapStateToProps,mapDispatchToProps)(ImagesSearchEngineComponent);