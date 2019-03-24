import React from 'react';
import {
    Table,
    Badge,
    InputGroup
} from 'react-bootstrap';

export default ({orderList}) =>
    (
        <div>
            <Table responsive>
            <div>
                <thead>
                    <tr>
                        <th>#</th>
                        <th><h4><Badge pill variant="success">Status</Badge></h4></th>
                        <th><h4><Badge pill variant="success">Order Description</Badge></h4></th>
                        <th><h4><Badge pill variant="success">Address</Badge></h4></th>
                        <th><h4><Badge pill variant="success">e-mail</Badge></h4></th>
                    </tr>
                </thead>
            </div>
                          {
                 orderList.map((order,index) => (
                <div>                    
                <tbody>
                <td>{index+1}</td>
                <td>{order.orderDesc}</td>
                <td>{order.status}</td>
                <td>{order.direccion}</td>
                <td>{order.mail}</td>
                </tbody>
                </div>
                 ))
                    }   
                {/* //  <tr>
                //         <InputGroup.Prepend>
                //             <InputGroup.Radio name="orderN" />
                //         </InputGroup.Prepend>
                //         <td>1</td>
                //         <td>col2</td>
                //         <td>Table 34</td>
                //         <td>Table 4</td>

        
                //     </tr>  */}
            </Table>
        </div>
    )

    