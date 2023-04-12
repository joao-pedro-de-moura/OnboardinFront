import React, { useState } from "react";
import { Table, Button } from 'rsuite';
import axios from '../../services/axios';

const { Column, HeaderCell, Cell } = Table;



 export default function Admin(){
const [clients, setClients] = useState([])

    React.useEffect(() => {
        async function getData(){
             const response = await axios.get('/clients')
             const {data} = response
             setClients(data)
             console.log(data)
         }
         getData()
     }, [])
     
    return(
        
        <Table
      height={400}
      data={clients}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >

      <Column width={150}>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>

        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
              Edit
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
    )
}