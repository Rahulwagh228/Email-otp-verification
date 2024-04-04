"use client";

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
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values);
    const { email } = values; // Extract email from form values

    const apiUrl = 'https://bluepen.co.in/api/freelancer/getemailotp.php';


    fetch("../app/call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // Pass email in request body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send OTP");
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful response
        console.log("OTP sent successfully:", data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error sending OTP:", error.message);
      });
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
