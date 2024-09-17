import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


export const Add = ({saveData,handleSearch}) => {
    

    
  return (
    <div><form action="#" onSubmit={saveData}>
    <input type="text" onChange={handleSearch}
       name='username'     placeholder=" Name or Search…" /><SearchIcon/><br />
<input type="text" onChange={handleSearch}
       name='title'   placeholder="email" />
            <br />
    
    <button type="submit" ><AddIcon/></button>
    </form></div>
  )
}
