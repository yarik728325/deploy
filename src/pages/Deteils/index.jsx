import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Deteil = ()=>{
  const { oneTab } = useSelector(state=>state.tabs);
  const {title, description,dop} = oneTab
  return (
    <table id="deteilTable">
       <thead>
         <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Dop Info</th>
        </tr></thead>
     <tbody>
        <tr>
          <td>{title}</td>
          <td>{description}</td>
          <td>{dop}</td>
        </tr>
     </tbody>
    </table>
  )
}

export default Deteil;