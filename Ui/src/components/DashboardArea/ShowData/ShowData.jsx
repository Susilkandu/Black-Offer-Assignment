import React,{useContext} from 'react'
import { DataContext } from '../../../Context/DataContex'
import './ShowData.css'
export default function ShowData() {
  const {data}= useContext(DataContext);
    console.log(data)
  return (
      <table style={{border:'1'}} className='dataContainer'>
        <thead>
        <tr className='dataVariable'>
          <th>Intensity</th>
          <th>Likelihood</th>
          <th>Relevance</th>
          <th>Start-Year</th>
          <th>End-Year</th>
          <th>Country</th>
          <th>Topic</th>
          <th>Region</th>
        </tr>
        </thead>
        <tbody className='dataRow'>
        {data.map((item)=>{
          return(
            <tr key={item._id}>
              <td>{item.intensity}</td>
              <td>{item.likelihood}</td>
              <td>{item.relevance}</td>
              <td>{item.start_year}</td>
              <td>{item.end_year}</td>
              <td>{item.country}</td>
              <td>{item.topic}</td>
              <td>{item.region}</td>
            </tr>
          )
        })}        
        </tbody>
      </table>
  )
}

