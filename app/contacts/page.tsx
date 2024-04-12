'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the submission, e.g., sending data to a server
    console.log('Submitted', { name, email, message });
    alert('Thank you for your message!');
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-blue-950 p-6'>
      <div className='bg-white  max-w-[500px] w-full  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
        <h1 className='mb-6 text-3xl text-center text-blue-950'>Contact Us</h1>
        <form onSubmit={handleSubmit} className='max-w-lg w-full'>
          <div className='mb-4'>
            <label
              className='block text-grey-darker text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
              id='name'
              type='text'
              placeholder='Your name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-grey-darker text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
              id='email'
              type='email'
              placeholder='Your email'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-grey-darker text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
              id='message'
              placeholder='Your message'
              rows={4}
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
          <div className='flex w-full items-center justify-center'>
            <button
              className='bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
