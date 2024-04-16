import { z }  from 'zod'
// import { isAdmin } from '../middlewares/authentication.middleware'
export const createUserDtoBody=  z.object({
   name: z.string({
    required_error: "Name is required "
   }),
    email: z.string({
        required_error: "Email is required "
    }),
    password: z.string({
        required_error:"Password is required"
    
    }),
    isAdmin: z.boolean().optional().default(false)
})

export const createUserDto = z.object({
    body:createUserDtoBody
})