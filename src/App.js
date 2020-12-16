import React, { useEffect, useState} from "react"
import Record from "./fetchrecords";
import './App.css'

const App = () => {
   
  const searchcategory = "food";
   
  const category = 'https://api.chucknorris.io/jokes/random?category={searchcategory}';
  const [records, getrecords] = useState(['']);
  const [search, getsearch] = useState("");
  const [query, getquery] = useState("food");
  useEffect(() => {
    getitems();
  }, [query]);
  const getitems = async () => {
    const response = await fetch (`https://api.chucknorris.io/jokes/random?category=${query}`);
    const data = await response.json();
    console.log(data);
    getrecords(data);
  }
  const updatesearch = e =>{
    getsearch(e.target.value);
  }

  const getsearchdata = e =>{
    e.preventDefault();
    getquery(search);
  }
  return (
     <div className="maincontent">
       <form  onSubmit={getsearchdata}>
         <center><span>search here by category 
           such as <strong>food, religion, celebrity, career, money, science, movie, travel</strong> </span></center>
         <hr/>
         <input type="text" className="inputbox" value={search} onChange={updatesearch}/>
         <button type="submit" className="submitbtn">Request Data</button>
       </form>

        
       <div className="results">
         <Record  idnumber={records.id} iconurl={records.icon_url} value={records.value} dateinserted={records.created_at} dateupdated={records.created_at} />
        
       </div>
     </div>
  );
}
export default App;

