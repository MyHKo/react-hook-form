import { z } from 'zod';
import {patterns} from "../../constants";

export const schema = z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    email: z.string().min(1, {message: 'Email is required'}).
    refine((email) => {
        return patterns.email.test(email);
    }, {message: 'Email address is not valid'}),
})

export type Schema = z.infer<typeof schema>;