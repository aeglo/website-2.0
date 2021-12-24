import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSendContactUsEmail } from "../../hooks/useSendContactUsEmail";
import { isStringEmptyOrNull } from "../../utils/isStringEmptyOrNull";
import { CheckIcon } from "@chakra-ui/icons";

interface ContactUsFormProps {
  namePlaceholder: string;
  emailPlaceholder: string;
  bodyPlaceholder: string;
  buttonText: string;
  errorText: string;
}

export const ContactUsForm: React.FC<ContactUsFormProps> = ({
  namePlaceholder,
  emailPlaceholder,
  bodyPlaceholder,
  buttonText,
  errorText
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isBodyInvalid, setIsBodyInvalid] = useState(false);

  const { status, sendEmail } = useSendContactUsEmail();

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
    if (status === "success") {
      setName("");
      setEmail("");
      setBody("");
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
    if (status === "loading") {
      return <Spinner />;
    }

    if (status === "success") {
      return <CheckIcon />;
    }

    return null;
  };

  return (
    <VStack width={{ base: "100%", md: "40%" }} alignItems="start">
      <FormControl isRequired isInvalid={isNameInvalid}>
        <FormLabel>{namePlaceholder}</FormLabel>
        <Input value={name} onChange={({ target }) => setName(target.value)} />
      </FormControl>
      <FormControl isRequired isInvalid={isEmailInvalid}>
        <FormLabel>{emailPlaceholder}</FormLabel>
        <Input value={email} onChange={({ target }) => setEmail(target.value)} />
      </FormControl>
      <FormControl isRequired isInvalid={isBodyInvalid}>
        <FormLabel>{bodyPlaceholder}</FormLabel>
        <Textarea value={body} onChange={({ target }) => setBody(target.value)} resize="none" minHeight={124} />
      </FormControl>
      {status === "error" && <Text color="red">{errorText}</Text>}
      <Button
        onClick={() => handleFormSubmit()}
        backgroundColor="secondary.default"
        color="white"
        _hover={{ backgroundColor: "secondary.hover" }}
        rightIcon={getButtonIcon()}
      >
        {buttonText}
      </Button>
    </VStack>
  );
};
