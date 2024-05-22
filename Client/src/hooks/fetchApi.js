// Import necessary libraries
import axios from 'axios';

// Function to encode file to base64
const encodeFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });
};

// Function to send email with attachment using Gmail API
export const sendCustomEmailWithAttachment = async (accessToken, emailContent, attachment,fromEmail, toEmail) => {
  const messageParts = [
    `From: ${fromEmail}`,
    `To: ${toEmail}`,
    `Subject: New Submission`,
    '',
    emailContent,
  ];

  let encodedMessage = messageParts.join('\n');

  if (attachment) {
    const base64Attachment = await encodeFileToBase64(attachment.file);
    encodedMessage += `\n\n--boundary_string\nContent-Type: ${attachment.type}; name="${attachment.name}"\nContent-Disposition: attachment; filename="${attachment.name}"\nContent-Transfer-Encoding: base64\n\n${base64Attachment}\n--boundary_string--`;
  }

  const encodedEmail = btoa(unescape(encodeURIComponent(encodedMessage))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  const response = await axios.post(
    'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
    {
      raw: encodedEmail,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
