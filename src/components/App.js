import React,{useState,useEffect} from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const getData =(id)=>{
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
    console.log(data)  
    // const idHandle=(id)=>{
    //   setId(id)
    // } 
  return(
    <div>
    <label>Id number</label>
    <input type='number' onChange={(e)=>getData(e.target.value)} min={1} max={5000} />
    {loading?
     <Loader /> 
     :
     data?.url && <PhotoFrame url={data?.url} title={data?.title} />
     }
    </div>
  )
}


export default App;
