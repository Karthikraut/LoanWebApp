"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const token = Cookies.get("token");
  //     console.log("hello", token);
  
  //     if (token) {
  //       console.log("FFDAKJ");
  
  //       try {
  //         const response = await fetch("http://localhost:3001/isAuth", {
  //           method: "GET",
  //           credentials: "include", // Ensure you're sending cookies along with the request
  //           headers: {
  //             "Authorization": `Bearer ${token}`, // Send token as Authorization header
  //           },
  //         });
  
  //         // Check if the response is OK (status 200–299)
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }
  
  //         const data = await response.json();
  //         setIsAuthenticated(true);
  //         setUserName(data.data.name); // Assuming data structure is { data: { name: 'John Doe' } }
  //         console.log("DATA: ", data);
  //       } catch (error) {
  //         console.error("Error during fetch: ", error);
  //       }
  
  //     } else {
  //       setIsAuthenticated(false);
  //       console.log("Rommmm");
  //     }
  //   };
  
  //   checkAuth();
  // }, []);
  
  return (
    <>
      <Navbar />
      <header className="bg-blue-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Finance Company</h1>
        <p className="mt-4 text-lg">
          Your trusted partner in achieving financial freedom.
        </p>
        {isAuthenticated ? (
          <div>
            <p className="mt-4">Hello, {userName}!</p>
            <Button className="mt-6 text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded">
              <Link href="/profile">Profile</Link>
            </Button>
          </div>
        ) : (
          <Button className="mt-6 text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded">
            <Link href="/LoanApplication">Loan Application</Link>
          </Button>
        )}
      </header>

      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <Image src="/path/to/image1.jpg" alt="Low Rates" width={300} height={200} className="mb-4 rounded" />
            <h3 className="text-xl font-semibold">Low Interest Rates</h3>
            <p className="mt-2">
              We offer competitive interest rates that help you save money over time.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <Image src="/path/to/image2.jpg" alt="Flexible Terms" width={300} height={200} className="mb-4 rounded" />
            <h3 className="text-xl font-semibold">Flexible Terms</h3>
            <p className="mt-2">
              Our loan terms are customizable to fit your unique financial situation.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <Image src="/path/to/image3.jpg" alt="Quick Approvals" width={300} height={200} className="mb-4 rounded" />
            <h3 className="text-xl font-semibold">Quick Approvals</h3>
            <p className="mt-2">
              Get your loan approved in no time with our fast and efficient process.
            </p>
          </div>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="italic">"Thanks to [Company Name], I was able to buy my first home!"</p>
            <h4 className="font-bold mt-2">- Sarah J.</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="italic">"The loan process was so simple and fast. Highly recommend!"</p>
            <h4 className="font-bold mt-2">- Michael T.</h4>
          </div>
        </div>
      </section>

      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <TextField label="Name" variant="outlined" fullWidth className="mb-4" required />
          <TextField label="Email" variant="outlined" type="email" fullWidth className="mb-4" required />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth className="mb-4" required />
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </form>
      </section>

      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Our Finance Company. All Rights Reserved.</p>
      </footer>
    </>
  );
}
