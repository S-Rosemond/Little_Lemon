import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

function UserLastName({ touched, errors, getFieldProps }) {
  return (
    <>
      <FormControl isInvalid={touched.lastName && errors.lastName}>
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <Input id="lastName" name="lastName" {...getFieldProps("lastName")} />
        <FormErrorMessage>
          {touched.lastName && errors.lastName}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}

export default UserLastName;
