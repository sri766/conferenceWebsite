<<<<<<< HEAD
import { Copy } from 'lucide-react';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Submission = () => {
  const [copied, setCopied] = useState(false);
  const email = "2024nationalconvention@gmail.com";

  return (
    <div className="max-w-7xl mx-auto m-28 flex bg-white p-6 rounded-md shadow-lg">
      {/* Instruction Section */}
      <div className="m-4">
        {/* Note Section */}
        <div className="mb-4">
            <h2 className="text-4xl font-bold text-center text-textmain">Submission</h2>
            <p className="text-lg text-red-600 font-semibold text-center mt-2">
            NOTE: Before Submission, Payment must be Done.
            </p>
        </div>
        <h3 className="text-2xl font-bold text-textmain mb-4">Instruction to submit the Paper</h3>
        <p className="text-lg mb-2">The Submission must be done to the below Email ID with below Details:</p>
        <ul className="list-disc list-inside text-md mb-4">
          <li>Author Name</li>
          <li>Corresponding Author Affiliation</li>
          <li>Email</li>
          <li>Phone No</li>
          <li>Paper Title</li>
          <li>Abstract</li>
          <li>Conference Paper (*.pdf)</li>
          <li>Proof of Transaction (*.pdf)</li>
        </ul>

      </div>
        {/* Email Section */}
        <div className="w-1/2 flex items-center justify-center">
          <span className="font-semibold mr-2">Email to:</span>
          <div className="flex items-center bg-gray-200 p-2 rounded-md shadow-inner">
            <span className="text-slate-600 font-mono mr-2">{email}</span>
            <CopyToClipboard text={email} onCopy={() => setCopied(true)}>
              <button className="p-1 focus:outline-none">
                <Copy/>
              </button>
            </CopyToClipboard>
          </div>
          {copied && <span className="ml-2 text-green-600">Copied!</span>}
        </div>
=======
import React, { useState, useRef, useEffect } from 'react';
import { Label, TextInput, FileInput, Select } from 'flowbite-react';
import axios from 'axios';

const SubmissionForm = () => {
  const form = useRef();
  const [attachment, setAttachment] = useState(null);
  const [ws, setWs] = useState(null);

  const server_url = process.env.SERVER_API_URL || `https://seashell-app-cnhk7.ondigitalocean.app/`;
  const ws_url = 'wss://sea-lion-app-gjwsl.ondigitalocean.app/'; // Your WebSocket URL

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
    setAttachment(e.target.files[0]);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const subData = new FormData(form.current);
    if (attachment) {
      subData.append('paper', attachment);
    }

    for (let [key, value] of subData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await axios.post(`${server_url}submission`, subData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Allow-Control-Allow-Origin': '*'
        },
      });
      alert(response.data);

      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send('Submission successful');
      }
    } catch (error) {
      console.error('Error uploading file:', error.message);
      alert('Error uploading file: ' + error.message);
    }
  };

  return (
    <div className="shadow drop-shadow-sm bg-white p-8 mt-32 font-textFont rounded-lg">
      <h2 className='text-4xl text-textmain font-semibold text-center mb-4'>
        Submission
      </h2>
      <form ref={form} onSubmit={sendEmail} autoComplete="off">
        <div className="lg:flex justify-between sm:flex-col">
          <div className="flex flex-col gap-4">
            {/* Form Fields */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="authorname" value="Corresponding Author Name" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="authorname" type="text" required name="author_name" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="authorAffiliation" value="Corresponding Author Affiliation" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="authorAffiliation" type="text" required name="author_affiliation" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="authoremail" value="Corresponding Author Email" />
                <span className='text-errorRed'> *</span>
              </div>
              <input name="author_email" required className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' type="email" id="authoremail" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="authorph" value="Corresponding Author Mobile number" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput name="author_mobile" id="authorph" type="tel" required />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-end">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload Paper" />
                <span className='text-errorRed'> *</span>
              </div>
              <FileInput id="file" type='file' helperText="Upload High Resolution Copy in pdf format" required onChange={handleFileChange} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="papertitle" value="Paper Title" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput name="paper_title" id="papertitle" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="numberOfPages" value="Number Of Pages" />
                <span className='text-errorRed'> *</span>
              </div>
              <input required className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' type="number" id="numberOfPages" name="number_of_pages" min="1" max="1000" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="abstract" value="Abstract" />
                <span className='text-errorRed'> *</span>
              </div>
              <TextInput id="abstract" type="text" required name="abstract" />
            </div>
          </div>
        </div>
        <div className='d-flex justify-center align-middle'>
          <button type="submit" className="rounded-lg bg-textmain text-white ring-2 ring-textmain px-5 py-2.5 text-center text-sm font-medium hover:ring-4 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">Submit</button>
        </div>
      </form>
>>>>>>> refs/remotes/origin/main
    </div>
  );
};

<<<<<<< HEAD
export default Submission;
=======
export default SubmissionForm;
>>>>>>> refs/remotes/origin/main
