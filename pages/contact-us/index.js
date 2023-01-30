import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react';
import styles from './index.module.css';
import { useState } from 'react';
import { sendContactForm } from '../../lib/api';
import Footer from '../../components/layout/Footer';
import { ChakraProvider } from '@chakra-ui/react'
import bg from '../../public/Contact.png'




const initValues = { name: "", email: "", message: "", }
const initState = { values: initValues }

export default function ContactPage() {
    const [state, setState] = useState(initState);
    const [touch, setTouch] = useState({});

    const { values, isLoading } = state;

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
        await sendContactForm(values);
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
        <ChakraProvider>
            <Container className={styles.container}>
                <Heading className={styles.title}>Contact Us</Heading>


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

                <Button
                    className={styles.button}
                    variant="outline"
                    colorScheme='blue'
                    isLoading={isLoading}
                    isDisabled={!values.name || !values.email || !values.message}
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            </Container>
            <Footer />
        </ChakraProvider>

    );
}