
import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useAuth } from "../context/authContext";
import { Alert } from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import { arrayCodesErrorFirebase } from '../env/enviroment'; 
import '../pages/LoginTemp.css'
import GoogleButton from 'react-google-button';


const LoginTemp = () => {

  const [errormsg, setErrorMsg] = useState({ code: '', msg: '' });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { Title } = Typography;

  const onFinish = async (values) => {
    setErrorMsg({code: '', msg: ''});
    const {username, password} = values;
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      setErrorMsg({ code:err.code, msg:arrayCodesErrorFirebase[err.code]})
    }
  };

  const handleGoogleSignin = async () => {
    try {
     await loginWithGoogle()
     navigate('/');
    } catch (error) {
     setErrorMsg(error.message)
    }
   };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    
    <div className='container'>



    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Typography className='title'>
          <Title > ¡Hola de nuevo! </Title>
      
      </ Typography>

      <br />
      <br />

      <Form.Item
        label="Correo"
        name="username"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su Correo!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su Contraseña!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Recordar Correo</Checkbox>
      </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <br /> <br />
          <Link href="#!" target="blank">
          ¿Olvidastes tu contraseña?
        </Link>

        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
  
      <GoogleButton onClick={handleGoogleSignin}/>
         
        </Form.Item>
      
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <p> ¿No tienes una cuenta? <Link to='/Register'> Registrar </Link></p>
      </Form.Item>
      
    </Form>


    {errormsg.code && <Alert message={errormsg.msg} />}


    </div>
  );
};
export default LoginTemp;