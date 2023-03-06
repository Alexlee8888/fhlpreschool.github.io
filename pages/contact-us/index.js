import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import styles from './index.module.css';
import { useState } from 'react';
import NavigationBar from '../../components/layout/NavigationBar';
import { ChakraProvider } from '@chakra-ui/react'
import bg from '../../public/Contact.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';






export default function ContactPage() {
    const toast = useToast();
    const initValues = { name: "", email: "", message: "", }
    const initState = { values: initValues }
    const [state, handleSubmit] = useForm("mvonrlje");

    if (state.succeeded) {
        toast({
            title: "Success!",
            status: "success",
            duration: 2000,
            position: "top"
        })
        return (
            <div>
                <Image
                    src={bg}
                    className={styles.noclick}
                    layout='responsive'
                />
                <h1 className={styles.submitted}>
                    Success!
                </h1>
            </div>
        )
    }

    return (
        <div >
            <Image
                src={bg}
                className={styles.noclick}
                layout='responsive'
            />
            <h1 className={styles.title}>
                Contact Us
            </h1>
            <form onSubmit={handleSubmit} className={styles.wrapper}>

                <br />
                <label htmlFor='firstName' className={styles.inputTitle}>
                    First Name
                </label>
                <br />
                <input className={styles.type} required placeholder='First Name'
                    id="name"
                    name="firstName" />
                <ValidationError
                    prefix="fn"
                    field="firstName"
                    errors={state.errors}
                />



                <br />
                <label htmlFor='lastName' className={styles.inputTitle}>
                    Last Name
                </label>
                <br />
                <input className={styles.type} required placeholder='Last Name'
                    id="name"
                    name="lastName" />
                <ValidationError
                    prefix="ln"
                    field="lastName"
                    errors={state.errors}
                />



                <br />
                <label htmlFor="Email" className={styles.inputTitle}>
                    Email Address
                </label>
                <br />
                <input className={styles.type} required placeholder='Email Address'
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />



                <br />
                <label htmlFor="Message" className={styles.inputTitle}>
                    Message
                </label>
                <br />
                <textarea className={styles.type} required placeholder='Message'
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />



                <br />
                <button type="submit" disabled={state.submitting} className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}