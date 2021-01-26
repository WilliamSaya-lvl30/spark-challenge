import React from 'react'
import ReactHighcharts from 'react-highcharts'
import {Button,Modal} from 'antd'



export default ({openModal,handleCancel,handleOpen,userSelect})=>{
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      var config = {
        xAxis: {
          categories: ['Domingo', 'Lunes', 'Martes','Miercoles', 'Jueves', 'Viernes', 'Sabado']
        }, 
        title: {
            text: 'Registro de Login Semanal'
        },
        series: [{
            name: `${userSelect.nombre}`,
            data: userSelect.registroSemanal
        }],
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Logins'
            }
        },
      };

    return (
    <>
    <Button className="modal-button2" onClick={handleOpen}>
        Registro
    </Button>

    <Modal
          visible={openModal}
          centered
          onOk={handleCancel}
          onCancel={handleCancel}
          
        >
            <ReactHighcharts config={config}>

            </ReactHighcharts>
   

    </Modal>
    </>
)

}