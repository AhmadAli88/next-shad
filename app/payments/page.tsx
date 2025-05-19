import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'

type Payment = {
  id: string
  amount: number
  status: string
  email: string,
  username?: string
}

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      username: "mike",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "t@example",
      username: "tina",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@gmail.com",
      username: "mike",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
     {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
     {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
     {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
     {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
     {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
     {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
     {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
     {
      id: "728ed52f",
      amount: 100,
      status: "approved",
      email: "r@gmail.com",
      username: "rohit",
    },
  ]
}
export default async function PaymentsPage() {
  const data = await getData()
  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
        <h1 className='font-semibold'>All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}


