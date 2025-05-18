'use client'
import React from 'react'
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2, { message: 'Username must be atleast three characters!' }).max(50),
    email: z.string().email({ message: 'Invalid email address!' }),
    password: z.string().min(6, { message: 'Password must be atleast six characters!' }),
    phone: z.string().min(10, { message: 'Phone number must be atleast ten characters!' }),
    location: z.string().min(2, { message: 'Location must be atleast two characters!' }),
    role: z.enum(['admin', 'user'])
})
const EditUser = () => {
    return (
        <div>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit User</SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </div>
    )
}

export default EditUser