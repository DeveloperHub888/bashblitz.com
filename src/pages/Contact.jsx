import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import logo from '../assets/logo/logo-black.jpg'; // Import your logo file

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    const message = `Nome: ${data.name} ${data.surname} \n Telefono: ${data.phone} \n è interessato a: ${data.role}`;

    try {
      await emailjs.send('service_17r6lmg', 'template_ej51b2i', {
        message: message
      }, 'tRYU_XrWySYCTsHbg')
      setSuccessMessage('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Error sending message. Please try again later.');
    }
  };


  return (
    <div className="h-dvh flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <img src={logo} alt="Logo" className="mx-auto w-60 md:w-96 h-auto" /> {/* Adjust width */}
      <div className="max-w-md w-full">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="shadow-sm -space-y-px">
            <div className="flex space-x-4 mb-5">
              <div className="w-1/2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input {...register("name", { required: true })} id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="w-1/2">
                <label htmlFor="surname" className="sr-only">Surname</label>
                <input {...register("surname", { required: true })} id="surname" name="surname" type="text" autoComplete="surname" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Surname" />
                {errors.surname && <span className="text-red-500">Surname is required</span>}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input {...register("phone", { required: true })} id="phone" name="phone" type="tel" autoComplete="tel" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
              {errors.phone && <span className="text-red-500">Phone Number is required</span>}
            </div>
            <div>
              <div className="flex justify-center items-center space-x-4 mt-5">
                <input {...register("role")} id="event-manager" name="role" type="radio" value="Event Manager" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="event-manager" className="font-medium text-gray-700">Event Manager</label>
                <input {...register("role")} id="public-relation" name="role" type="radio" value="Public Relation" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="public-relation" className="font-medium text-gray-700">Public Relation</label>
              </div>
            </div>
          </div>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div>
            <button type="submit" className="group relative w-full flex justify-center px-8 py-2 uppercase text-slate-50 border border-slate-50 transition duration-300 ease-in-out progress-button-light mt-12">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
