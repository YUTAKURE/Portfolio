'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from './ui/textarea';
import { motion } from 'framer-motion';

//https://youtu.be/oGq9o2BxlaI

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Your name must be at least 2 characters.',
  }),
  emailAddress: z.string().email(),
  text: z.string().min(2, {
    message: 'Your inquiry must be at least 2 characters.',
  }),
});

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}
    >
      <div className=" bg-slate-200 md:px-24 md:py-16 px-16 py-12 rounded-md relative">
        <button
          className="absolute -top-9 -right-9 text-xl border-2 rounded-full px-2 py-1"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      emailAddress: '',
      text: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data.username);
    console.log(data.text);
    console.log(data.emailAddress);

    let result = {
      name: data.username,
      message: data.text,
      email: data.emailAddress,
    };

    form.reset();
    setIsModalOpen(true);

    console.log(result);

    await fetch('/api/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    }).then((res) => {
      if (res.status === 200) {
        console.log('メール送信成功');
      }
    });
  }

  return (
    <div className="w-3/4 px-15 py-24 mx-auto text-center">
      <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-medium pb-3 mb-5 w-15 border-b border-gray-500">
          CONTACT
        </h1>
        <p className="w-5/6 mx-auto">Feel free to ask</p>
      </div>

      <motion.div
        className="w-3/4 mx-auto text-start"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: 'easeOut', duration: 0.6, delay: 0.5 }}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" max-w-md w-full space-y-6 mx-auto"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-black dark:text-white">
                    Your Name
                  </FormLabel> */}
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage className="dark:text-rose-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-black dark:text-white">
                    Your E-mail
                  </FormLabel> */}
                  <FormControl>
                    <Input placeholder="E-mail" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage className="dark:text-rose-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-black dark:text-white">
                    Your inquiry
                  </FormLabel> */}
                  <FormControl>
                    <Textarea
                      placeholder="Text"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage className="dark:text-rose-500" />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                className="max-w-md w-2/3 space-y-6 hover:scale-95 transition duration-300"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="md:text-xl text-lg dark:text-slate-800">Thank you!</p>
      </Modal>
    </div>
  );
};

export default Contact;
