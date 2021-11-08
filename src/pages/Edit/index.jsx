import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemTab from "../../components/ItemTab";
import { changeInfoInTab } from "../../redux/actions/deleteTab";
import history from "../../utils/routing";

const Edit = () => {
  const dispatch = useDispatch();
  const { title, description,id } = useSelector(state=>state.tabs.oneTab);
  const check = (e)=>{
    e.preventDefault();
    const payload = {
      id,
      editTub:{
        title:e.target["_title"].value,
        description:e.target["_description"].value
      }
    }
    dispatch(changeInfoInTab(payload));
    history.push('/deploy');
  }
  return (
    <>
      <form action="" onSubmit={check}>
        <label htmlFor="title">Title:</label><input name="_title" type="text"  id="title"/>
        <label htmlFor="description">Description:</label><input name="_description" type="text"  id="description"/>
        <button type="submit">Change</button>
      </form>
      <ItemTab title={title} description={description} checker = {true} />
    </>
  )
}

export default Edit;