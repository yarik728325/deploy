import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemTab from "../../components/ItemTab";
import "./style.scss";
import history from "../../utils/routing";
import { searchTab } from "../../redux/actions/deleteTab";

const Home = ()=>{
  const dispatch = useDispatch();
  const searchTitle = (e)=>{
    dispatch(searchTab(e.target.value))
  }
  const { tabs,search } = useSelector(state=>state.tabs);

  return (
   <>
    <label htmlFor="search">Search by title:</label>  <input value={ search } onChange={(e)=>searchTitle(e)} type="text" id="search" />
    <button type="button" onClick={()=>{
        history.push('/addnewCard');
      }} >add new Card</button>
    <div className="wrapper">
      {
        tabs.map((e,index)=>{
            const { title, description,id,dop } = e;
            return(
                <ItemTab
                  title={title}
                  description={description}
                  key={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
                  id={id}
                  index={index}
                  dop={dop}
                />
            ) 
          }
        )
      }
    </div>
   </>
  )
}

export default Home;