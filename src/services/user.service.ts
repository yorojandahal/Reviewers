import { PrismaClient } from "@prisma/client"
import Boom from"@hapi/boom"
import { AnyZodObject, string, z } from "zod"
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { createUserDtoBody } from "../validators/create-user.validator"

const prisma=new PrismaClient()

export async function login(email: string, password: string) {
  const user = await prisma.user.findFirstOrThrow({ where: { email } })

  // Compare the provided password with the stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
      // Password does not match
      // If you want to throw a http error, you can. This is throw internal server error
      throw Error('Password not correct')
  }
//Boom.conflict
  // Generate a token
  const accessToken = jwt.sign(
      { userId: user.id, isAdmin: user.is_admin },
      process.env.ACCESS_TOKEN_KEY as string,
      {
          expiresIn: '5m',
      }
  )


const refereshToken = jwt.sign(
  { userId: user.id, isAdmin: user.is_admin },
 process.env.REFERESH_TOKEN_KEY as string,
  {
      expiresIn: '7d',
  }
)

// Return the token to the client
return { success: true, accessToken, refereshToken }
}


export const create = async (body: z.infer<typeof createUserDtoBody>) => {
  const {name, email, password, isAdmin:is_admin} = body
  try{
    return await prisma.user.create({
      data:{
        name,
       email,
       password: await bcrypt.hash(password as string, 10),
       is_admin
      }
    })
  } catch(e: any) {
    if(e.code == 'P2002') {
      throw Boom.conflict('Email must be unique')
    } 
    throw e
  }
}

export const remove = async (userId: any) =>{
  try{
      return  await prisma.user.delete({where: {id:userId}})

  }catch(err:any){


  console.log(err)
  if(err.code === 'P2003'){
  throw Boom.notFound("There are todos")
}else{
throw err
}
}
}

