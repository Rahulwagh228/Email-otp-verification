"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

export default function App() {
  // hooks and functions
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  console.log(email);

  const handleSubmit = async () => {
    console.log("wdw");
    const url = process.env.NEXT_PUBLIC_BLUEPEN_OTP_SEND
    try {
      const response = await axios.post(
        url,
        {
          email: email,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async () => {
    console.log("wdw");
    const verifyurl = process.env.NEXT_PUBLIC_BLUEPEN_OTP_VERIFY
    try {
      const response = await axios.post(
        verifyurl,
        {
          email: email,
          otp: otp,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //front end form
  return (
    <div className="flex items-center justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="  size-[700px] border-red-100 border-solid">
        <h1 className="mt-6 font-semibold pl-36 pb-5 text-4xl">
         Fill the form dude
        </h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" pt-3 shadow appearance-none border border-slate-500 rounded w-[500px] block py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Mail daal bhaii..."
          />
          <Button
            className=" mt-3 mb-5"
            onClick={handleSubmit}
          >
            Request OTP
          </Button>
          

          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className=" pt-4 shadow appearance-none border border-slate-500 rounded w-[500px] block py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="otp daal bhaii"
            />
          
          <Button
            onClick={handleVerify}
          >
            Verify OTP
          </Button>
      </div>
    </div>
  );
}
