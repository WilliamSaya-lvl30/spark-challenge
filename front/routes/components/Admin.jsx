import React from 'react'
import { useRecoilState } from "recoil";
import {allUsers} from '../../atoms/index'
import { Table,Button } from 'antd';
import EdictContaines from '../containers/EdictContainer'



export default ()=>{
    const [Users, setUsers]= useRecoilState(allUsers)

    console.log("usuarios para la tabla")

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
     }

     const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key:'nombre',
          render: (nombre, record) => <h4>{nombre + " " + record.apellido}</h4>,
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            }
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
      
          // onFilter: (value, record) => record.name.indexOf(value) === 0,
          // sorter: (a, b) => a.name.length - b.name.length,
          // sortDirections: ['descend'],
        },
        {
          title: 'DNI',
          dataIndex: 'dni',
          key:'dni',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.dni - b.dni,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key:'email',
          defaultSortOrder: 'descend',
        },
        {
          title: 'Domicilio',
          dataIndex: 'domicilio',
          key:'domicilio',
          filters: [
            {
              text: 'Barcelona',
              value: 'Barcelona',
            },
            {
              text: 'Paris',
              value: 'Paris',
            },
          ],
          filterMultiple: false,
          onFilter: (value, record) => record.domicilio.indexOf(value) === 0,
          sorter: (a, b) => a.domicilio.length - b.domicilio.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Fecha de registro',
          dataIndex: 'fechaDeAlta',
          hey:'fechaDeAlta',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.fechaDeAlta - b.fechaDeAlta,
        },
        {
            title: "",
            dataIndex: "_id",
            key: "id",
            className: "community-button",
            render: (userID) => {
              return (
                <EdictContaines
                userID={userID}
                />
              );
            },
          },
          {
            title: "",
            dataIndex: "_id",
            key: "id",
            className: "community-button",
            render: (user) => {
              return (
                <Button className="modal-button2" onClick={() =>{
                    console.log("click borrar",user)
                    // handleClick(user)
                }
                    }>
                  Borrar
                </Button>
              );
            },
          },
      ];
      



    return(
        <>
        <Table 
        columns={columns} 
        dataSource={Users} 
        onChange={onChange}
        pagination={{ pageSize: 5 }}
        />
        </>
    )
}




