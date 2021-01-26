import React,{ useEffect,useState } from 'react';
import axios from 'axios'
import { useRecoilState } from "recoil";
import Admin from '../components/Admin'
import Auth403 from '../components/403'
import {user,allUsers} from '../../atoms/index'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {Input,Space,Button} from 'antd'


export default ()=>{
  const [User, setUser]= useRecoilState(user)
  const [Users, setUsers]= useRecoilState(allUsers)
  const [searchText,setSearchText]=useState('')
  const [searchedColumn,setSearchedColumn]=useState('')


  useEffect(async ()=>{
    //al montar el componente pide todos los usuarios de la base de datos
    const Users= await axios.get('/api/users')
    //formatea la fecha en un formato mas visible y setea los usuarios al estado global
    Users.data.map((user)=>{
      user.fechaDeAlta =  user.fechaDeAlta.split("T")[0]
    })
    setUsers(Users.data)
  },[])

  const deleteUser= async (id)=>{
    //al borrar al usuario se filtra del estado y se setea de nuevo a los usuarios
    await axios.delete(`/api/users/${id}`)
    let usersUpdate=[...Users]
    usersUpdate = usersUpdate.filter((usuario)=> usuario._id !== id)
    setUsers(usersUpdate)
  }

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex) 
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('')
  };

//filtro para busquedas en la tabla de usuarios

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            const searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false }); 
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex) 
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text,record) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text 
      ),
  });

    return(
      <>
      {User ?
        <Admin 
        deleteUser={deleteUser}
        getColumnSearchProps={getColumnSearchProps}
      />
      :
      <Auth403/>
      }
      </>
    )
}