import { CheckIcon } from '@chakra-ui/icons';
import {
  Button, FormLabel, Input, Spinner, Textarea, VStack, Text,
} from '@chakra-ui/react';
<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import useSendContactUsEmail from '../../hooks/useSendContactUsEmail';
import isStringEmptyOrNull from '../../utils/isStringEmptyOrNull';
=======
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
>>>>>>> Stashed changes

interface ContactUsFormProps {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

<<<<<<< Updated upstream
export default function ContactUsForm({ publicKey, serviceId, templateId }: ContactUsFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isBodyInvalid, setIsBodyInvalid] = useState(false);

  const { status, sendEmail } = useSendContactUsEmail({ publicKey, serviceId, templateId });

  useEffect(() => {
    setIsNameInvalid(false);
  }, [name]);

  useEffect(() => {
    setIsEmailInvalid(false);
  }, [email]);

  useEffect(() => {
    setIsBodyInvalid(false);
  }, [body]);

  useEffect(() => {
    if (status === 'success') {
      setName('');
      setEmail('');
      setBody('');
    }
  }, [status]);

  const handleFormSubmit = () => {
    setIsNameInvalid(isStringEmptyOrNull(name));
    setIsEmailInvalid(isStringEmptyOrNull(email));
    setIsBodyInvalid(isStringEmptyOrNull(body));

    // TODO clean up ca
    if (!(isStringEmptyOrNull(name) || isStringEmptyOrNull(email) || isStringEmptyOrNull(body))) {
      sendEmail(name, email, body);
    }
  };

=======
export default function ContactUsForm({ formId }: ContactUsFormProps) {
  const [state, handleSubmit] = useForm(formId);

>>>>>>> Stashed changes
  const getButtonIcon = () => {
    if (status === 'loading') {
      return <Spinner />;
    }

    if (status === 'success') {
      return <CheckIcon />;
    }

    return undefined;
  };

  return (
    <VStack width={{ base: '100%', lg: '35%' }} alignContent={{ base: 'center', lg: 'start' }}>
<<<<<<< Updated upstream
      <FormControl isRequired isInvalid={isNameInvalid}>
        <FormLabel>Nom complet</FormLabel>
        <Input value={name} onChange={({ target }) => setName(target.value)} />
      </FormControl>
      <FormControl isRequired isInvalid={isEmailInvalid}>
        <FormLabel>Adresse courriel</FormLabel>
        <Input value={email} onChange={({ target }) => setEmail(target.value)} />
      </FormControl>
      <FormControl isRequired isInvalid={isBodyInvalid}>
        <FormLabel>Message</FormLabel>
        <Textarea value={body} onChange={({ target }) => setBody(target.value)} resize="none" minHeight={124} />
      </FormControl>
      {status === 'error' && <Text color="red">Une erreur est survenue lors de l&apos;envoie du courriel. SVP réessayer ou nous contacter directement à aeglo@aeglo.ift.ulaval.ca</Text>}
      <Button
        onClick={() => handleFormSubmit()}
        backgroundColor="secondary.default"
        color="white"
        _hover={{ backgroundColor: 'secondary.hover' }}
        rightIcon={getButtonIcon()}
      >
        Envoyer
      </Button>
=======
      <form onSubmit={handleSubmit} method="POST">
        <FormLabel>Adresse courriel</FormLabel>
        <Input name="email" id="email" isRequired />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <FormLabel mt="1rem">Message</FormLabel>
        <Textarea name="message" id="message" isRequired resize="none" minHeight={124} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        {state.errors.length > 0 && <Text color="red">Une erreur est survenue lors de l&apos;envoie du courriel. SVP réessayer ou nous contacter directement à aeglo@aeglo.ift.ulaval.ca</Text>}
        <Button
          type="submit"
          disabled={state.submitting}
          backgroundColor="secondary.default"
          color="white"
          _hover={{ backgroundColor: 'secondary.hover' }}
          rightIcon={getButtonIcon()}
          mt="1rem"
        >
          Envoyer
        </Button>
      </form>
>>>>>>> Stashed changes
    </VStack>
  );
}
