import React, { useState } from 'react';

interface PopupProps {
  title: string;
  price: string;
}

interface FormData {
  name: string;
  email: string;
  // subject: string;
  message: string;
}

interface FormError {
  name?: string;
  email?: string;
  // subject?: string;
  message?: string;
}

const Popup: React.FC<PopupProps> = ({ title, price }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<FormError>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormError = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // if (formData.subject.trim() === "") {
    //   newErrors.subject = "Subject is required";
    //   isValid = false;
    // }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    // setErrors({
    //   ...errors,
    //   [name]: "",
    // });
  };

  async function handleSubmit() {
    if (validateForm()) {
      setIsLoading(true); // Set loading state to true
      const url = `/api/contacts`;
      const requestData = {
        email: formData.email,
        name: formData.name,
        // subject: formData.subject,
        message: formData.message,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      };

      fetch(url, options)
        .then((response) => {
          setIsLoading(false); // Set loading state to false after response
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response;
        })
        .then((data) => {
          console.log(data);
          alert('Thank you for your message!');
          // Reset form
          setFormData({
            name: "",
            email: "",

            message: "",
          });
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
    }
  }

  const handleClickContactUs = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
  <button className='px-4 py-2 bg-blue-900 text-white hover:text-black hover:bg-blue-200' onClick={handleClickContactUs}>
    Contact Us
  </button>
  {isOpen && (
    <div className=' fixed top-0 left-0 w-full h-full bg-slate-300 bg-opacity-50 flex justify-center items-center '>
      <div className='popup-content bg-white rounded-lg shadow-md p-8 flex flex-col w-[350px] sm:w-[600px]'>
        <h2 className='text-xl font-medium mb-4 text-blue-900'>{title}</h2>
        <span className='text-4xl font-bold text-blue-900 mb-4'>AED {price}</span>
        <div className='flex flex-col space-y-4'>
          <input value={formData.email} onChange={handleChange} type='email' name='email' placeholder='Email' className='border border-slate-300 rounded-md px-3 py-2 focus:outline-blue-500' />
          {errors.email && (
          <p className="text-red-500 mt-1  text-sm font-sans font-light">
            {errors.email}
          </p>
        )}
          <input value={formData.name} onChange={handleChange} name='name' type='text' placeholder='Name' className='border border-slate-300 rounded-md px-3 py-2 focus:outline-blue-500' />
          {errors.name && (
          <p className="text-red-500 mt-1  text-sm font-sans font-light">
            {errors.name}
          </p>
        )}
          <textarea value={formData.message} onChange={handleChangeText} name='message' rows={5} placeholder='Message' className='border border-slate-300 rounded-md px-3 py-2 focus:outline-blue-500'></textarea>
          {errors.message && (
          <p className="text-red-500 mt-1  text-sm font-sans font-light">
            {errors.message}
          </p>
        )}
          <div className='flex justify-between'>
            <button type='button' className='px-4 py-2 bg-slate-300 text-blue-900 hover:bg-slate-400' onClick={handleClosePopup}>
              Close
            </button>
            <button onClick={handleSubmit} className='px-4 py-2 bg-blue-900 text-white hover:text-black hover:bg-blue-200'>
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</>


  );
};

export default Popup;
