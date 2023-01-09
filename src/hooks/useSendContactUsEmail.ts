import emailjs, { init } from 'emailjs-com';
import { useState } from 'react';
import { Status } from './status';

interface UseSendContactUsEmail {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

const useSendContactUsEmail = ({ publicKey, serviceId, templateId }: UseSendContactUsEmail) => {
  const [status, setStatus] = useState<Status>('idle');

  init(publicKey);

  const sendEmail = (name: string, email: string, body: string) => {
    setStatus('loading');

    emailjs
      .send(serviceId, templateId, {
        from_name: name,
        message: body,
        reply_to: email,
      })
      .then(
        () => {
          setStatus('success');
        },
        () => {
          setStatus('error');
        },
      );
  };

  return { status, sendEmail };
};

export default useSendContactUsEmail;
