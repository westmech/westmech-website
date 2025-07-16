import React from 'react'
import SignUp from '@/components/members-portal/auth/SignUp'
const page = () => {
  return (
    <main
      className="sm:min-h-screen w-screen flex flex-col"
    >
        <div className="mt-16">Create Account</div>
        <SignUp></SignUp>
    </main>
  )
}

export default page
