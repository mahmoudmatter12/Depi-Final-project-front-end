import AboutPage from './about'
import Navbar from '@/components/Navbar/navbar'
// import React from 'react'
// 
// const user1 = {
//   name: "John Doe",
//   age: 30,
//   role: "user-gust",
// }

function page() {
  return (
    <>
      {/* <h1>
        <a href="/about" className="hover:text-blue-500">About Us</a>
      </h1> */}
      <Navbar/>
      <AboutPage/>
    </>
  )
}

export default page
