import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { initialState } from "../../redux/actions/deleteTab";
import Header from "../Header";
import Footer from "../Footer";
import RouterSwitch from "../../routes";
import "./style.scss";


const App = ()=>{
  const dispatch = useDispatch();
  useMemo(()=>{
    dispatch(initialState());
  },[dispatch])
  return(
    <>
      <Header/>
      <section className="appWrapper">
        <RouterSwitch/>
      </section>
      <Footer/>
    </>
  )
}

export default App;