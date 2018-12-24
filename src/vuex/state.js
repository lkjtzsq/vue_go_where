let defaultCity='上海'
try{
  if(localStorage.city){
    defaultCity=localStorage.city
  }
}catch(e){
}
var state={
  data:"",
  city:localStorage.city
}
export default state;
