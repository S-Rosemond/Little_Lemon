import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

function UserEmail({ touched, errors, getFieldProps }) {
  return (
    <>
      <FormControl isInvalid={touched.email && errors.email}>
        <FormLabel htmlFor="firstName">Email</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          {...getFieldProps("email")}
        />
        <FormErrorMessage>{touched.email && errors.email}</FormErrorMessage>
      </FormControl>
    </>
  );
}

export default UserEmail;
