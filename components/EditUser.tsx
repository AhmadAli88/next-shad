'use client'
import React from 'react'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "react-hot-toast"

const formSchema = z.object({
  username: z.string().min(2, { message: 'Username must be at least two characters!' }).max(50),
  email: z.string().email({ message: 'Invalid email address!' }),
  password: z.string().min(6, { message: 'Password must be at least six characters!' }),
  phone: z.string().min(10, { message: 'Phone number must be at least ten characters!' }),
  location: z.string().min(2, { message: 'Location must be at least two characters!' }),
  role: z.enum(['admin', 'user']),
})

type FormData = z.infer<typeof formSchema>

const EditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      location: "",
      role: "user"
    }
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    toast.success("User updated successfully!")
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit User</SheetTitle>
        <SheetDescription>Update the user information below and click save.</SheetDescription>
      </SheetHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        {/* Username */}
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" {...register("username")} />
          {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register("phone")} />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location")} />
          {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
        </div>

        {/* Role */}
        <div>
          <Label htmlFor="role">Role</Label>
          <Select onValueChange={(value) => setValue("role", value as "admin" | "user")}>
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
          {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}
        </div>

        <Button type="submit" className="w-full">Save Changes</Button>
      </form>
    </SheetContent>
  )
}

export default EditUser
