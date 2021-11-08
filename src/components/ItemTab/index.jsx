import React from "react";
import { deletaAction, changeTab } from "../../redux/actions/deleteTab";
import ButtonClose from "../ButtonClose";
import './style.scss';
import { useDispatch } from "react-redux";
import history from "../../utils/routing";

const ItemTab = ({title,description,id,checker,index,dop})=>{
  const dispatch = useDispatch();
  const deletaTab =  () => {
      dispatch(deletaAction(id))
  }
  const changeTabs = (e) => {
    dispatch(changeTab({
      id,
      index,
      oneTab:{
        title,
        description,
        id,
        dop,
      }
    }));
    if(e){
      history.push('/edit');
    }else{
      history.push(`/card/:${title}`)
    }
  }
  const tmp = checker?(
    <div className="item">
      <h3> <b>title</b> :{title}</h3>
      <div className="descr"> <b>description</b>:{description}</div>
    </div>
  ):(
    <div className="item" >
      <h3>{title}</h3>
      <button type="button" onClick={()=>changeTabs(false)} >Deteil</button>
      <button type="button" onClick={()=>{changeTabs(true)}}>Edit tab</button>
      <div className="descr">{description}</div>
      <ButtonClose propClass="position" deletaTab={deletaTab}/>
    </div>
  )
  return tmp
}

export default ItemTab