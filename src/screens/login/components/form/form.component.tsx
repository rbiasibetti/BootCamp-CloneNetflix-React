import React, {useCallback, useState} from "react";
import InputText from "../../../../components/input/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";
import * as yup from 'yup'
import {ErrorMessages} from "./form.types";
import {ErrorDescription} from "./form.styled";

const errorInicial = '';

export default function Form(){

    const [data, setData] = useState({email: '', password: ''});
    const [error, setError] = useState(errorInicial);
    const resetError = useCallback(
        () => setError(errorInicial),
        []
    )

     const handleChange = useCallback(
         (event: any) => setData( prevState => ({
             ...prevState,
             [event.target.name]:event.target.value,
         })),
         [setData]
     )

     const validation = useCallback(
         async () => {
             const schema = yup.object().shape({
                 email: yup.string().required(ErrorMessages.Required).email(ErrorMessages.EmailBadFormat),
                 password: yup.string().required(ErrorMessages.Required),
             })

             try{
                 await schema.validate(data);

                 resetError();
                 console.log(true);
                 return true;
             }
             catch(error){            
                 //@ts-ignore
                 setError(error.errors[0]);
                 return false;
             }
         },
         // eslint-disable-next-line react-hooks/exhaustive-deps
         [data, setError]
     )

     const onSubmit = useCallback(
         async () => {
             await validation();
            console.log(data);
         },
         [validation, data]
     )     

    return (
        <>
            <InputText type={'text'} placeholder={'E-mail'} name={'email'} onChange={handleChange} />            
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={handleChange}  />
            <ErrorDescription>{error}</ErrorDescription>
            <Button primary onClick={onSubmit} >Entrar</Button>          
        </>
    );
}