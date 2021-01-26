import React from 'react'
import { useRecoilState } from "recoil";
import {user,allUsers} from '../../atoms/index'
import { Table,Button } from 'antd';
import EdictContaines from '../containers/EdictContainer'
import RegistrosContainer from '../containers/RegistrosContainer'



export default ({deleteUser })=>{
    const [Users, setUsers]= useRecoilState(allUsers)
    const [User, setUser]= useRecoilState(user)


    

     const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key:'nombre',
          render: (nombre, record) => <h4>{nombre + " " + record.apellido}</h4>,
          filters: [
            {
              text: 'Xavi',
              value: 'Xavi',
            },
            {
              text: 'Leonel',
              value: 'Leonel',
            }
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
      
          onFilter: (value, record) => record.nombre.indexOf(value) === 0,
          sorter: (a, b) => (a.nombre.length + a.apellido.length) - (b.nombre.length + b.apellido.length),
          sortDirections: ['descend'],
        },
        {
          title: 'DNI',
          dataIndex: 'dni',
          key:'dni',
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
              text: 'Buenos Aires',
              value: 'Buenos Aires',
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
          sorter: (a, b) => new Date(a.fechaDeAlta) - new Date(b.fechaDeAlta),
        },
        {
          title: "",
          dataIndex: "_id",
          key: "id",
          className: "community-button",
          render: (userID) => {
            return (
              <RegistrosContainer
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
            render: (id) => {
              return (
                <Button 
                disabled={id === User._id}
                className="modal-button2" 
                onClick={()=>deleteUser(id)}>
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
        pagination={{ pageSize: 5 }}
        />
        </>
    )
}




