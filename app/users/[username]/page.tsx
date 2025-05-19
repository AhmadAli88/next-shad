import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardList from '@/components/CardList'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { BadgeCheck, Candy, Citrus, Edit, Shield } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { AppLineChart } from '@/components/AppLineChart'


const SingleUserPage = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ahmad Sharafat</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CONTAINER */}
      <div className="flex flex-col xl:flex-row mt-4 gap-8">
        {/* LEFT */}
        <div className='w-full xl:w-1/3 space-y-6'>
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className='text-xl font-semibold mb-4'>User Badges</h1>
            <div className="flex gap-4 flex-wrap">
              {[BadgeCheck, Citrus, Shield, Candy].map((Icon, idx) => (
                <HoverCard key={idx}>
                  <HoverCardTrigger>
                    <Icon
                      size={36}
                      className={`p-2 rounded-full border ${idx === 0
                          ? 'bg-blue-500/30 border-blue-500/50'
                          : idx === 1
                            ? 'bg-orange-500/30 border-orange-500/50'
                            : idx === 2
                              ? 'bg-green-500/30 border-green-500/50'
                              : 'bg-yellow-500/30 border-yellow-500/50'
                        }`}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className='font-bold mb-2'>Verified User</h1>
                    <p className='text-sm text-muted-foreground'>
                      This user is verified and has a badge.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-xl font-semibold mb-4'>User Information</h3>
               <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className='space-y-4'>
              <div>
                <p className='text-sm text-muted-foreground mb-1'>
                  Profile Completion
                </p>
                <Progress value={33} />
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className='font-bold'>Username:</span>
                  <span>Ahmad Sharafat</span>
                </div>
                <div className="flex gap-2">
                  <span className='font-bold'>Email:</span>
                  <span>test@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className='font-bold'>Phone:</span>
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex gap-2">
                  <span className='font-bold'>Address:</span>
                  <span>123 Main St, City, Country</span>
                </div>
              </div>
            </div>
          </div>

          {/* USER ACTIVITY CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title='user-activity' />
          </div>
        </div>

        {/* RIGHT */}
        <div className='w-full xl:w-2/3 space-y-6'>
          {/* USER CARD CONTAINER */}
          <div className='bg-primary-foreground p-4 rounded-lg'>
            User Card
          </div>

          {/* CHART CONTAINER */}
          <div className='bg-primary-foreground p-4 rounded-lg'>
            <h1>User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleUserPage
