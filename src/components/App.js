import React,{useState,useEffect} from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [id,setId] = useState()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const getDate =(id)=>{
        setLoading(true)
        const url =`https://jsonplaceholder.typicode.com/photos/${id}`;
        const data = fetch(url);
        data.then(data=>{
            return data.json();
        }).then((data)=>{
          setLoading(false)  
          setData({
            url:data.url,
            title:data.title
          })
        })
      }
    useEffect(()=>{
        getDate(id)
    },[id])
  return(
    <>
    <label>Id number</label>
    <input type='number' onKeyDown={(e) => setId(e.target.value)} min={1} max={5000} />
    {loading?
     <Loader /> 
     :
     <PhotoFrame url={data?.url} title={data?.title} />
     }
    </>
  )
}


export default App;
