import React from 'react'
import { useRecoilState } from "recoil";
import {user,allUsers} from '../../atoms/index'
import { Table,Button } from 'antd';
import EdictContaines from '../containers/EdictContainer'
import RegistrosContainer from '../containers/RegistrosContainer'



export default ({deleteUser,getColumnSearchProps })=>{
    const [Users, setUsers]= useRecoilState(allUsers)
    const [User, setUser]= useRecoilState(user)

     const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key:'nombre',
          ...getColumnSearchProps('nombre')
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
          ...getColumnSearchProps('email')
        },
        {
          title: 'Domicilio',
          dataIndex: 'domicilio',
          key:'domicilio',
          ...getColumnSearchProps('domicilio')
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




