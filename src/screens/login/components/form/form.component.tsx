import React, {useCallback, useEffect, useState} from "react";
import InputText from "../../../../components/input/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";
import * as yup from 'yup'
import {ErrorMessages} from "./form.types";
import {ErrorDescription} from "./form.styled";
import {userActions} from "../../../../store/user/user.slice";
import {useDispatch, useSelector} from "react-redux";
import { isAutenticated } from "../../../../store/user/user.selector";
import { useLocation,useNavigate } from "react-router-dom";
import { HomePath } from "../../../home/home.types";


const errorInitial = ''

export default function Form() {
    const [data, setData] = useState({ email: '', password: '' })
    const [error, setError] = useState(errorInitial)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const isUserAuthenticated = useSelector(isAutenticated)
   
    useEffect(
        ()=>{
            if(isUserAuthenticated){
                console.log('autenticado')
                const to = location.state?.from?.pathname || HomePath
                navigate(to)
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[isUserAuthenticated]
    )

    const resetError = useCallback(
        () => setError(errorInitial),
        []
    )

    const handleChange = useCallback(
        (event: any) => setData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        })),
        [setData]
    )

    const validation = useCallback(
        async () => {
            const schema = yup.object().shape({
                email: yup.string().required(ErrorMessages.Required).email(ErrorMessages.EmailBadFormat),
                password: yup.string().required(ErrorMessages.Required),
            })

            try {
                await schema.validate(data)
                resetError()
                //console.log(data)
                return true
            } catch (error) {
                // @ts-ignore
                setError(error.errors[0])
                return false
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data, setError]
    )

    const onSubmit = useCallback(
        async () => {
            if(await validation()) {
                dispatch(userActions.login(data))
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [validation, data]
    )

    return (
        <>
            <InputText type='text' placeholder={'E-mail'} name={'email'} onChange={handleChange}/>
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={handleChange}/>
            <ErrorDescription>{error}</ErrorDescription>
            <Button primary onClick={onSubmit}>Entrar</Button>
        </>
    )
}