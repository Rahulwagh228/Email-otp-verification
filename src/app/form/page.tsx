"use client";

import React, { useState } from "react";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const formSchema = z.object({
  email: z.string().min(2).email(),
  //   otp: z.string().length(4),
});

export default function Mailform() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      //   otp: "",
    },
  });
 
  function onSubmit(values: z.infer<typeof formSchema>) {
   
    const Home = () => {
      const [response, setResponse] = useState(null);

      const fetchData = async () => {
        const url = process.env.NEXT_PUBLIC_BLUEPEN_OTP_VERIFY

        const { email } = values;
        try {
          const payload = {
            category: "non_technical",
            email: email,
          }; // Your payload data
          const res = await axios.post(
            url,
            payload
          );

          setResponse(res.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      // return (
      //   <div>
      //     <button onClick={fetchData}>Fetch Data</button>
      //     {response && (
      //       <div>
      //         <h2>Response:</h2>
      //         <pre>{JSON.stringify(response, null, 2)}</pre>
      //       </div>
      //     )}
      //   </div>
      // );
    };

    // export default Home;
  }

  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>enter your email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
