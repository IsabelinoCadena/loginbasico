import './App.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';

function App() {
  const columns=[
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Auto',
      dataIndex: 'auto',
      key: 'auto',
    },
    {
      title: 'Destino',
      dataIndex: 'destino',
      key: 'destino',
    },
    {
      title: 'Kilometraje',
      dataIndex: 'kilometraje',
      key: 'kilometraje',
      render: fila => (fila>26) ? <b> {fila} </b> : <i> {fila} </i>
    },

    {
      title: 'Quien lo uso',
      dataIndex: 'quienlouso',
      key: 'quienlouso',
    },

    {
      title: 'Checklist',
      dataIndex: 'checklist',
      key: 'checklist',
    },

    {
      title: 'Telefono',
      dataIndex: 'telefono',
      key: 'telefono',
    }
  ];

  const data=[
    {
      key: '1',
      quienlouso: 'Marcial Santiago',
      edad: 28,
      sexo: 'Dudoso',
      puesto: 'Soporte Tecnico'
    },

    {
      key: '2',
      quienlouso: 'Rusbel Esteban',
      edad: 40,
      sexo: 'Hombre',
      puesto: 'Jefe de Area'
    },

    {
      key: '3',
      quienlouso: 'Jorge Calderon',
      edad: 25,
      sexo: 'Hombre',
      puesto: 'Almacenista'
    }
  ]

  return (
    <div className='App'>
      <br />
        <Table columns={columns} dataSource={data}/>

    </div>
    

  )
}

export default App;