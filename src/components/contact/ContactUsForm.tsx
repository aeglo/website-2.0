import { CheckIcon } from '@chakra-ui/icons';
import {
  Button, FormControl, FormLabel, Input, Spinner, Textarea, VStack, Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useSendContactUsEmail from '../../hooks/useSendContactUsEmail';
import isStringEmptyOrNull from '../../utils/isStringEmptyOrNull';

interface ContactUsFormProps {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

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
    </VStack>
  );
}
