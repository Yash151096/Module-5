import axios from "axios";
import { useEffect, useState } from "react"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import { Add } from "./Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




export const CrudOpration = () => {
    const [data,setData] = useState([]);
    const [searchdata,setSearchdata] = useState({
      username:"username",
      title:"title"
    })
    
    
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>setData(res.data))
    },[])

function handleDlt(id){
let data1= data.filter(i=>i.id != id);
setData(data1)
}
function handleSearch(e){
  setSearchdata(e.target.value.toLowerCase());
 

  
  }
  function saveData(e){
    e.preventDefault();
    const {name,value} = e.target;
    setSearchdata({
      ...saveData,
      [name]:value
    })
  
   console.log([...data,{username:searchdata.username,title:searchdata.title}]);
   
   
    }

  
let filteredData = data.filter(i=>i.username.toLowerCase().includes(searchdata));
    
    
   return (
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Api Crud
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Add  saveData={saveData} handleSearch={handleSearch}/>
        <table border={"2"}>
        <tr>
            <th>Name</th>
            <th>Desc</th>
            <th>Action</th>
             </tr>
             {
                filteredData.map(i=>{
                     return(<>
                    <tr key={i.id}>
                        <td>{i.username}</td>
                         <td>{i.email}</td>
                         <td><button><EditIcon/></button><button onClick={()=>handleDlt(i.id)}><DeleteIcon/></button></td>
                     </tr>
                     </>)    
                 })
             }
     </table>
    </Box>

  )
}










  
