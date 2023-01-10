import { CheckIcon } from '@chakra-ui/icons';
import {
  Button, FormControl, FormLabel, Input, Spinner, Textarea, VStack, Text,
} from '@chakra-ui/react';
import { useForm } from '@formspree/react';
import React, { useEffect, useState } from 'react';

interface ContactUsFormProps {
  formId: string;
}

export default function ContactUsForm({ formId }: ContactUsFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isBodyInvalid, setIsBodyInvalid] = useState(false);

  const [state, handleSubmit] = useForm(formId);

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
    if (state.succeeded) {
      setName('');
      setEmail('');
      setBody('');
    }
  }, [state]);

  const getButtonIcon = () => {
    if (state.submitting) {
      return <Spinner />;
    }

    if (state.succeeded) {
      return <CheckIcon />;
    }

    return undefined;
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack width={{ base: '100%', lg: '35%' }} alignContent={{ base: 'center', lg: 'start' }}>
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
        {state.errors && <Text color="red">Une erreur est survenue lors de l&apos;envoie du courriel. SVP réessayer ou nous contacter directement à aeglo@aeglo.ift.ulaval.ca</Text>}
        <Button
          type="submit"
          disabled={state.submitting}
          backgroundColor="secondary.default"
          color="white"
          _hover={{ backgroundColor: 'secondary.hover' }}
          rightIcon={getButtonIcon()}
        >
          Envoyer
        </Button>
      </VStack>
    </form>
  );
}
