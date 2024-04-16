import { z }  from 'zod'


export const createTodo = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is not given "
        }),
        active: z.boolean({
            required_error:"Active status is mandetory"
        })
    }).strict(),
})