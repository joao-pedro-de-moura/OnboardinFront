import React from "react";
import { Notification, Placeholder } from 'rsuite';


export default function Toast({ type, ...rest }, ref){
    
  return (
    <Notification ref={ref} {...rest} type={type} header={type}>
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
    </Notification>
  );
}

