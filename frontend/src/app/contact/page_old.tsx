"use client";
import CustomerFormData from "@/interfaces/CustomerFormData";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "dotenv/config";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";

const schema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Invalid email").required("Email is required"),
  message: string().min(15, "Message isn't long enough").required("Message is required"),
});

export default function Contact() {
  const [hasSent, setHasSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({ resolver: yupResolver<CustomerFormData>(schema) });

  const handleFormSubmit: SubmitHandler<CustomerFormData> = async (formData) => {
    setLoading(true);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_MAILER_URL}/api/email/send-crsa`, formData);
      setHasSent(true);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) console.error(err.message);

      console.log("An unexpected error has occurred:", err);
    }

    setLoading(false);
  };
  return (
    <div className="wds-container page">
      <h1>Contact</h1>
      <div className={hasSent ? "hidden" : ""}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="md:col-span-1 col-span-2">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" {...register("firstName")} required />
              <small className="text-red-500">{errors.firstName?.message}</small>
            </div>
            <div className="md:col-span-1 col-span-2">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" {...register("lastName")} required />
              <small className="text-red-500">{errors.lastName?.message}</small>
            </div>
            <div className="col-span-2">
              <label htmlFor="email">Email</label>
              <input id="email" {...register("email")} type="email" required />
              <small className="text-red-500">{errors.email?.message}</small>
            </div>
            <div className="col-span-2">
              <label htmlFor="message">Message</label>
              <textarea id="message" {...register("message")} minLength={15} rows={6} />
              <small className="text-red-500">{errors.message?.message}</small>
            </div>
          </div>
          <button
            className="send-btn disabled:opacity-30 disabled:cursor-progress"
            disabled={loading}
          >
            Send
          </button>
        </form>
      </div>
      <div className={`${hasSent ? "" : "hidden"} text-center`}>
        <h2 className="text-6xl font-bold mb-7">Sent</h2>
        <p className="font-semibold mb-10">
          Thank you for your message. I will be in touch very soon!
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="text-xl text-secondary py-3 px-5 bg-white rounded hover:bg-secondary hover:text-white transition-colors"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
