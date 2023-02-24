import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import styles from './index.module.css';
import { useState } from 'react';
import { sendContactForm } from '../../lib/api';
import NavigationBar from '../../components/layout/NavigationBar';
import { ChakraProvider } from '@chakra-ui/react'
import bg from '../../public/Contact.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import Image from 'next/image';




const initValues = { name: "", email: "", message: "", }
const initState = { values: initValues }

export default function ContactPage() {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touch, setTouch] = useState({});

    const { values, isLoading, error } = state;

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
        try {
            await sendContactForm(values);
            setTouch({});
            setState(initState);
            toast({
                title: "Success!",
                status: "success",
                duration: 2000,
                position: "top"
            })
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message
            }));
        }

    }

    const onBlur = ({ target }) => setTouch((prev) => ({
        ...prev, [target.name]: true
    }))

    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }))

    return (
        <div>
            <Image
                src={bg}
                className={styles.noclick}
                layout='responsive'
            />

            <ChakraProvider>
                <Container className={styles.container}>
                    <Heading className={styles.title}>Contact Us</Heading>


                    {error && (
                        <header className={styles.errormessage}>
                            {error}
                        </header>
                    )}

                    <FormControl isRequired isInvalid={touch.name && !values.name} className={styles.formcontrol}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type='text'
                            name="name"
                            errorBorderColor='red.300'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={onBlur}

                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={touch.email && !values.email} className={styles.formcontrol}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type='email'
                            name="email"
                            errorBorderColor='red.300'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={touch.message && !values.message} className={styles.formcontrol}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            type='text'
                            name="message"
                            errorBorderColor='red.300'
                            rows={5}
                            value={values.message}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>

                    </FormControl>

                    <Center>
                        <Button
                            className={styles.button}
                            alignSelf="center"
                            variant="outline"
                            colorScheme='blue'
                            isLoading={isLoading}
                            isDisabled={!values.name || !values.email || !values.message}
                            onClick={onSubmit}
                        >
                            Submit
                        </Button>
                    </Center>

                </Container>
            </ChakraProvider>
        </div>

    );
}