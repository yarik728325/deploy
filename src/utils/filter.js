const filter = (state,filter,type)=>{
  switch(type){
    case 'delete':
      return deleted(state,filter,true);
    case 'deteleTMP':
      return deleted(state,filter,false)
    case 'change':
      return change(state,filter,true);
    case 'changeTMP':
      return change(state,filter,false)
    case 'search':
      return  state.filter(e=>{
        return e.title.indexOf(filter) > -1
      })
    case 'addTMP':
      return addTab(state,filter,true);
    case 'addTab':
      return addTab(state,filter,false);
    default:
      return state.tabs
  }
}

export default filter;

const deleted = (state,filter,e)=>{
  if(e){
    let tabs = [...state.tabs];
    const index = tabs.findIndex(e=>e.id===filter)
    tabs.splice(index,1);
    return tabs
  }else{
    let tabs = [...state.tmp];
    const index = tabs.findIndex(e=>e.id===filter)
    tabs.splice(index,1);
    return tabs
  }
}
const change  = (state,filter,e)=>{
  if(e){
    const _index = state.tabs.findIndex(e=>e.id === filter.id);
    let _tabs = [...state.tabs];
    _tabs.splice(_index,1,filter.editTub);
    return _tabs;
  }else{
    const _index = state.tmp.findIndex(e=>e.id === filter.id);
    let _tabs = [...state.tmp];
    _tabs.splice(_index,1,filter.editTub);
    return _tabs;
  }
}
const addTab = (state,filter,e)=>{
  if(e){
    const tmp = [...state.tmp];
    tmp.push(filter);
    return tmp;
  }else{
    const tmp = [...state.tabs];
    tmp.push(filter);
    return tmp;
  }
}