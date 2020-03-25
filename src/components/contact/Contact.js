import React from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";


const schema = yup.object().shape({
  firstName: yup.string().required('Firstname is required'),
  lastName: yup.string().required('Lastname is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(4).required('Paddword is required')
});



export default function Contact(props){

  const{register, handleSubmit, errors} = useForm ({
    validationSchema: schema
  });

  function onSubmit(data){
   console.log('data', data);

  }



  return (
    <div className="Contact">
         <form className="login" onSubmit={handleSubmit(onSubmit)}>

             <div className="form--item form--firstname">
               <input name="firstName" placeholder="Firstname....." ref={register()} />
               {errors.firstName && <p> {errors.firstName.message} </p>}
            </div>

            <div className="form--item form--lastname">
              <input name="lastName" placeholder="LastName....." ref={register()} />
              {errors.lastName && <p> {errors.lastName.message} </p>}
           </div>

           <div className="form--item form--email">
             <input name="email" placeholder="Email....." ref={register()} />
             {errors.email && <p> {errors.email.message} </p>}
          </div>

          <div className="form--item form--password">
            <input name="password" placeholder="Password....." ref={register()} />
            {errors.password && <p> {errors.password.message} </p>}
         </div>

         <input className=" form--item form--submit" type="submit" />



         </form>
    </div>

  );
}
