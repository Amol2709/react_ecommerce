import  {  useState,useEffect } from 'react';


export default function UseApi(URL, defaultValue=[]){
    const [data, setData]  = useState(defaultValue);
    const [isloader, setloader] = useState(true)
    const fetchCategories = async ()=>{
        try{
        const res = await fetch(URL);
        const categories = await res.json();
        setData(categories)
        setloader(false)
       
        
       
        }catch(e){
           
        }
    };
    useEffect(()=>{fetchCategories();},[URL]);
    return (
        {
            data:data,
            isloader:isloader
        }
    )
}