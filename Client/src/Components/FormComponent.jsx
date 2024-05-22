import React, { useRef, useState, useEffect } from 'react';
import { Label, TextInput, Select, FileInput } from 'flowbite-react';
import axios from 'axios';

const FormComponent = () => {
  const form = useRef();
  const [file, setFile] = useState(null);
  const [ws, setWs] = useState(null);

  const server_url = process.env.SERVER_API_URL || `https://seashell-app-cnhk7.ondigitalocean.app/`;
  const ws_url = 'wss://sea-lion-app-gjwsl.ondigitalocean.app/';

  useEffect(() => {
    const socket = new WebSocket(ws_url);
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };
    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
      alert('Message from server: ' + event.data);
    };
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    setWs(socket);
    return () => socket.close();
  }, [ws_url]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    if (file) {
      formData.append('payment_proof', file);
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await axios.post(`${server_url}register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Allow-Control-Allow-Origin': '*'
        },
      });
      alert(response.data);

      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send('Registration successful');
      }
    } catch (error) {
      console.error('Error uploading file:', error.message);
      alert('Error uploading file: ' + error.message);
    }
  };

  return (
    <div className="shadow drop-shadow-sm bg-white p-8 mt-16 rounded-lg ">
      <h2 className='text-4xl text-textmain font-semibold text-center mb-4'>Fill Payment Details</h2>
      <form ref={form} onSubmit={sendEmail} autoComplete="off">
        <div className="sm:flex flex-col lg:flex justify-between">
          <div className="flex flex-col gap-4">
            {/* Form Fields */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="authorname" value="Author Name" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="authorname" type="text" required name="author_name" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="authoremail" value="Author Email" />
                <span className='text-errorRed'> *</span>
              </div>
              <input required className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' type="email" id="authoremail" name="author_email" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="authorph" value="Author Phone number" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="authorph" type="tel" required name="author_mobile" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="paperid" value="Paper ID" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="paperid" type="number" required name="paper_id" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="papertitle" value="Paper Title" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="papertitle" type="text" required name="paper_title" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="organization" value="Organization" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="organization" type="text" required name="organization" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nationality" value="Nationality" />
                <span className='text-errorRed'> *</span>
              </div>
              <Select id="nationality" required name="nationality">
                <option>Select</option>
                <option>Indian</option>
                <option>Foreigner</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Category Of Registration" />
                <span className='text-errorRed'> *</span>
              </div>
              <Select id="category" required name="category">
                <option>Student</option>
                <option>Academia</option>
                <option>Industry delegates</option>
                <option>Accompanying person</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amount_paid" value="Amount Paid" />
                <span className='text-errorRed'> *</span>
              </div>
              <input required className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' type="number" id="amount_paid" name="amount_paid" min="1000" max="100000" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="transaction_id" value="Transaction ID" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="transaction_id" type="number" required name="transaction_id" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="date_of_transaction" value="Date Of Transaction" />
                <span className='text-errorRed'> *</span>
              </div>
              <input className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' id="date_of_transaction" type="date" required name="date_of_transaction" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="payment_proof" value="Payment Proof" />
                <span className='text-errorRed'> *</span>
              </div>
              <FileInput id="payment_proof" helperText="Upload High Resolution Copy" required onChange={handleFileChange} />
            </div>
          </div>
        </div>
        <div className='d-flex justify-center align-middle'>
          <button type="submit" className="rounded-lg bg-textmain text-white ring-2 ring-textmain px-5 py-2.5 text-center text-sm font-medium hover:ring-4 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
