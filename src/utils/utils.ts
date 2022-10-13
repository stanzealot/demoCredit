import Joi from 'joi'
import jwt from 'jsonwebtoken'
export const creatMovieSchema = Joi.object().keys({
    title: Joi.string().required(),
    description :Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
   
});

export const updateUserSchema = Joi.object().keys({
    username:Joi.string(),
    fullname:Joi.string(),
    phonenumber:Joi.string(),
    email:Joi.string().trim().lowercase(),
    password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)

});

export const registerSchema = Joi.object().keys({
    username:Joi.string().required(),
    fullname:Joi.string().required(),
    phonenumber:Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    email:Joi.string().trim().lowercase().required(),
    password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    confirm_password:Joi.ref("password")
}).with('password', 'confirm_password')

export const loginSchema = Joi.object().keys({
    email:Joi.string().trim().lowercase().required(),
    password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  
})

//Generate Token
export const generateToken=(user:{[key:string]:unknown}):unknown=>{
  const pass = `${process.env.JWT_SECRET}` as string
   return jwt.sign(user,pass, {expiresIn:'7d'})
}

export const options ={
    abortEarly:false,
    errors:{
        wrap:{
            label: ''
        }
    }
} 