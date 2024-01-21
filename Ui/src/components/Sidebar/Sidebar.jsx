import { useState ,useContext} from "react"
import { DataContext } from "../../Context/DataContex"
import './Sidebar.css'
export default function Sidebar() {
    const[sideBarWidth,setSideBarWidth]= useState('11.2rem')
    const {data}= useContext(DataContext)
  return (
    <div className="sideBar" style={{width:sideBarWidth}}>
        <span class="material-symbols-outlined" style={{fontSize:'3rem', color:'black'}}>
dashboard
</span>
        <div className="totalResult">Total<br></br><br></br><b>{data.length}</b></div>
    </div>
  )
}
