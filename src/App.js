import "./App.css"
import {Component} from 'react'
import { Provider } from "react-redux";
import store from "./redux/store";
import ImagesSearchEngineComponent from "./components/index"

class App extends Component{
  render()
  {
      return(
        <Provider store={store}>
          <ImagesSearchEngineComponent/>
        </Provider>
      )
  }
}


export default App;