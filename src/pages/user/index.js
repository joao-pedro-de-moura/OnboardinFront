import React, { useState } from "react";
import axios from '../../services/axios';

 export default function User(){
const [clients, setClients] = useState()

    React.useEffect(() => {
        async function getData(){
             const response = await axios.get('/clients/1')
             const {data} = response
             
             setClients(data.names)
             console.log(data)

         }
         getData()
     }, );
     
     return(
        <div>
            <h1>
            {clients}
            </h1>
        </div>
    )
}