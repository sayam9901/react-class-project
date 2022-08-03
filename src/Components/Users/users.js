import React , {useState,useEffect} from "react";
import User  from "../User/user";
import Spinner from '../Commons/Spinner/spinner';
import UserModel from '../UserModel/userModel';
import './users.css';
    function Users(props) {
        
        const [isLoading, setIsLoading] = useState(true)
        const [usersData, setUsersData] = useState(null)
        const [searchValue, setSearchValue] = useState("")
        const [isModelOpen, setIsModelOpen] = useState(false)
        const [completeData, setCompleteData] = useState(null)
        const [id, setId] = useState(null)


    useEffect(()=>{
        fetch("https://dummyapi.io/data/v1/user/",{
            method:"GET",
            headers:{
                "app-id":"62c1b1b65b25e6a595ee427b"
            }})
            .then(res=>res.json())
            .then(data=>{
                setIsLoading(false);
                setUsersData(data.data);
                setCompleteData(data.data);
            })
        },[]);

    function onSearchFieldChange(e){
        const value=e.target.value.toLowerCase();
        setSearchValue(value);
        const filteredData= completeData.filter((user)=>{
           return  user.firstName.toLowerCase().startsWith(value);
        })

        setUsersData(filteredData);
    }

    function showUsers(){
        return  <div>

         <input onChange={(e)=>onSearchFieldChange(e)} value={searchValue} type="text" />
         <div className="usersDiv">
            {console.log(usersData)}

        {
            usersData.map((user)=>{
                return <User data={user} openModel={openModel} />
            })
        }
        </div>

        </div>
    }


   function openModel(id){
         setId(id)
        setIsModelOpen(true);
    }

    function closeModel(){
        setIsModelOpen(false);
    }
   
     return(
      <div>
            <h1> Employee List</h1>
            {(isLoading)?<Spinner/>:showUsers()}
            { (isModelOpen) &&  <UserModel  id={id}  closeModel={closeModel}  />}
       </div>
     )
    }



export default Users;