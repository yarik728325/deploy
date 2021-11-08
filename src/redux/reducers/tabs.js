import filter from "../../utils/filter";
import { 
  deletaAction,
  changeTab,
  changeInfoInTab,
  initialState,
  searchTab,
  addnewTab } from "../actions/deleteTab";

const initinalState = {
  search:'',
  idChange:null,
  oneTab:null,
  tmp:null,
  tabs:[
    {
      id:0,
      title:'book',
      description:'vary interesting',
      dop:'Какие-то доп данные о book'
    },
    {
      id:1,
      title:'table',
      description:'vary interesting',
      dop:'Какие-то доп данные о table'
    },
    {
      id:2,
      title:'chair',
      description:'vary interesting',
      dop:'Какие-то доп данные о chair'
    },
    {
      id:3,
      title:'burger',
      description:'vary interesting',
      dop:'Какие-то доп данные о burger',
    },
    {
      id:4,
      title:'Notebook',
      description:'vary interesting',
      dop:'Какие-то доп данные о Notebook'
    },
  ]
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initinalState, { type, payload }) => {
  switch (type) {
    case addnewTab.type:
      return{
        ...state,
        tmp:filter(state,payload,'addTMP'),
        tabs:filter(state,payload,'addTab')
      }
    case initialState.type:
      return{
        ...state,
        tmp:[...state.tabs]
      }
    case deletaAction.type:
      return{
        ...state,
        tabs:filter(state,payload,'delete'),
        tmp:filter(state,payload,'deteleTMP'),
      }
    case changeInfoInTab.type:
      return{
        ...state,
        tabs:filter(state,payload,'change'),
        tmp:filter(state,payload,'changeTMP'),
      }
    case changeTab.type:
      return{
        ...state,
        idChange:payload.id,
        oneTab:payload.oneTab
      }
    case searchTab.type:
      return{
        ...state,
        tabs:filter(state.tmp,payload,'search'),
        search:payload
      }
    default:
      return state;
  }
};
