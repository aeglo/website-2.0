import emailjs, { init } from "emailjs-com";
import { useState } from "react";

type SendEmailStatus = "idle" | "loading" | "success" | "error";

export const useSendContactUsEmail = () => {
  const [status, setStatus] = useState<SendEmailStatus>("idle");

  // TODO sortir ca dans un .env
  init("user_tzrhFeAbbIWeyIn5lfmZj");

  const sendEmail = (name: string, email: string, body: string) => {
    setStatus("loading");

    emailjs
      .send("service_9n4hwcr", "template_c8d22ud", {
        from_name: name,
        message: body,
        reply_to: email
      })
      .then(
        (result) => {
          setStatus("success");
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  return { status, sendEmail };
};
