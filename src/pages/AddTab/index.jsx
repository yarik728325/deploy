import React from "react";
import { useDispatch } from "react-redux";
import { addnewTab } from "../../redux/actions/deleteTab";
import history from "../../utils/routing";
const AddTab = () => {
  const dispatch = useDispatch();
  const check = (e)=>{
    e.preventDefault();
    const payload = {
        id:Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        title:e.target["_title"].value,
        description:e.target["_description"].value
      }
    dispatch(addnewTab(payload));
    history.push('/deploy');
  }
  return(
    <form action="" onSubmit={check}>
    <label htmlFor="title">Title:</label><input name="_title" type="text"  id="title"/>
    <label htmlFor="description">Description:</label><input name="_description" type="text"  id="description"/>
    <button type="submit">addNewTab</button>
  </form>
  )
}

export default AddTab;