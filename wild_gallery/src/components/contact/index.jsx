import React from "react";
import { H1, Container } from "./style";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  
  return (
    <div>
      <H1>CONTACT US</H1>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Last name"
            name="Last name"
            ref={register({ required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="First name"
            name="First name"
            ref={register({ required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Email"
            name="Email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <textarea
            name="Message"
            ref={register({ required: true, max: 500, min: 10 })}
          />
          <input className="test" type="submit" value="ENVOYER" />
        </form>
      </Container>
    </div>
  );
}
