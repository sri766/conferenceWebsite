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
    </div>
  );
};

export default Submission;
