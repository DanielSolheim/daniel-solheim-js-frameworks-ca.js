import React from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";


const schema = yup.object().shape({
  firstName: yup.string().required('Firstname is required'),
  lastName: yup.string().required('Lastname is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
});



export default function Contact(){

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
               <input type="text" name="firstName" placeholder="Firstname....." ref={register()} />
               {errors.firstName && <p className="errorMessage"> {errors.firstName.message} </p>}
            </div>

            <div className="form--item form--lastname">
              <input type="text" name="lastName" placeholder="LastName....." ref={register()} />
              {errors.lastName && <p className="errorMessage"> {errors.lastName.message} </p>}
           </div>

           <div className="form--item form--email">
             <input type="email" name="email" placeholder="Email....." ref={register()} />
             {errors.email && <p className="errorMessage"> {errors.email.message} </p>}
          </div>

          <div className="form--item form--message">
            <textarea className="form--message" name="message" placeholder="Message....." rows="6"  ref={register()} />
            {errors.message && <p className="errorMessage"> {errors.message.message} </p>}
         </div>

         <input className=" form--item form--submit" type="submit" />

         </form>
    </div>

  );
}
