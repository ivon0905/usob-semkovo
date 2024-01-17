import './login.css';
import keyImage from '../../images/key.png';
import { useState } from 'react';
import passwordService from '../../calls/passwordService';
import services from "../../calls/services";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //на този етап в процес на разработка паролата ще се подава просто хеширана
    const handleOnLoginBtnClick = () => {
        let hashedPassword = passwordService.hashPassword(password);
        retrieveClientId(hashedPassword);
    }

    const retrieveClientId = (hashedPassword: string) => {
        services.getClientId(email, hashedPassword)
        .then((response: any) => {
          localStorage.setItem('clientId', response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }

    return (
        <div>
            <div className='center'>
                <div className='loginContainer'>
                    <div className='loginInputSide'>
                        <div className='loginComponents'>
                            <input 
                                type='text' 
                                className='inputs' 
                                placeholder='E-mail'
                                onChange={(e) => setEmail(e.target.value)}/>
                            <input 
                                type='password' 
                                className='inputs' 
                                placeholder='Парола'
                                onChange={(e) => setPassword(e.target.value)}/>
                            <button className='btn-login' onClick={handleOnLoginBtnClick}>Вход</button>
                        </div>
                    </div>

                    <div className='imageSide'>
                        <img src={keyImage} className='image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;