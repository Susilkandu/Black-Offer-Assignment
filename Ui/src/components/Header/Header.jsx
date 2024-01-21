import './Header.css'
import { useContext, useEffect, useState } from "react"
import {DataContext} from "../../Context/DataContex"
export default function Header() {
    const [end_year, setEndYear] = useState("");
    const [topic, setTopic] = useState("");
    const [sector, setSector] = useState("");
    const [region, setRegion] = useState("");
    const [pestle, setPestle] = useState("");
    const [source, setSource] = useState("");
    const [country, setCountry] = useState("");
    const {setData}= useContext(DataContext)
    useEffect(()=>{
        getData();
    },[]);
    const getData = (async () => {
        await fetch("http://localhost:8000/getGData", {
            method:"post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                end_year, topic, sector, region, pestle, source, country

            })
        }).then((res) => res.json())
            .then(data => setData(data))
            .catch(err=>console.log(err))
        })
    return (
        <div className="header">
            <input type="number" className="subFilter" placeholder="End-year" value={end_year} onChange={(e) => { setEndYear(e.target.value) }} />
            <input type="text" className="subFilter" placeholder="Topic" value={topic} onChange={(e) => { setTopic(e.target.value) }} />
            <input type="text" className="subFilter" placeholder="Sector" value={sector} onChange={(e) => { setSector(e.target.value) }} />
            <input type="text" className="subFilter" placeholder="Region" value={region} onChange={(e) => { setRegion(e.target.value) }} />
            <input type="text" className="subFilter" placeholder="Pestle" value={pestle} onChange={(e) => { setPestle(e.target.value) }} />
            <input type="text" className="subFilter" placeholder="Source" value={source} onChange={(e) => { setSource(e.target.value) }} />
            <input type="text" className="subFilter" placeholder="Country" value={country} onChange={(e) => { setCountry(e.target.value) }} />
            <button type="submit" className='subFilter searchBtn' onClick={getData}>Search</button>
        </div>
    )
}







