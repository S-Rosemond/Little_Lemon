import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

function UserFirstName({ touched, errors, getFieldProps }) {
  return (
    <>
      <FormControl isInvalid={touched.firstName && errors.firstName}>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <Input
          id="firstName"
          name="firstName"
          {...getFieldProps("firstName")}
        />
        <FormErrorMessage>
          {touched.firstName && errors.firstName}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}

export default UserFirstName;
