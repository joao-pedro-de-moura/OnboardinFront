import React from 'react';
import axios from '../../services/axios';

export default function PageErro(){

    React.useEffect(() => {
       async function getData(){
            const response = await axios.get('/clients')
            const {data} = response
            console.log(data)
        }
        getData()
    }, [])
        
    return (
        <div >
       <h1>
        errors
       </h1>
      </div>

    )
}

