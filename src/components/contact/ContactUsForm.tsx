import { CheckIcon } from '@chakra-ui/icons';
import {
  Button, FormLabel, Input, Spinner, Textarea, VStack, Text,
} from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

interface ContactUsFormProps {
  formId: string;
}

export default function ContactUsForm({ formId }: ContactUsFormProps) {
  const [state, handleSubmit] = useForm(formId);

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
    <VStack width={{ base: '100%', lg: '35%' }} alignContent={{ base: 'center', lg: 'start' }}>
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
    </VStack>
  );
}
