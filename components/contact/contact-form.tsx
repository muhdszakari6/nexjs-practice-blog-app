import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.scss";
const ContactForm = () => {
  const name = useRef<any>();
  const email = useRef<any>();
  const message = useRef<any>();
  const [requestStatus, setrequestStatus] = useState<string | undefined>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (requestStatus === "pending" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setrequestStatus(undefined);
        setError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const sendMessage = async (e: any) => {
    e.preventDefault();
    setrequestStatus("pending");
    try {
      const res = await fetch(`/api/contact`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          email: email.current.value,
          name: name.current.value,
          message: message.current.value,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setrequestStatus("error");

        return;
      }
      setrequestStatus("success");
    } catch (error) {
      setrequestStatus("error");
      setError(error);
    }
  };
  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: requestStatus,
      title: "Sending message...",
      message: "Your message is on its way ",
    };
  } else if (requestStatus === "success") {
    notification = {
      status: requestStatus,
      title: "Success!",
      message: "Message sent successfully!",
    };
  } else if (requestStatus === "error") {
    notification = {
      status: requestStatus,
      title: "Error",
      message: error,
    };
  }

  return (
    <section className={classes.contact}>
      <Head>
        <title>The head component can work outside of next js pages</title>
      </Head>
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessage} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input ref={email} type="email" name="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input ref={name} type="name" name="name" id="name" />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea ref={message} rows={5} name="message" id="message" />
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
    </section>
  );
};

export default ContactForm;
