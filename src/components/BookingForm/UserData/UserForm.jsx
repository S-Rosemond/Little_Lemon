import { Button } from "@chakra-ui/react";
import UserFirstName from "./UserFirstName";
import UserLastName from "./UserLastName";
import UserEmail from "./UserEmail";

function UserForm({ formik, handleNext }) {
  const { touched, errors, getFieldProps } = formik;
  return (
    <>
      <UserFirstName
        touched={touched}
        errors={errors}
        getFieldProps={getFieldProps}
      />
      <UserLastName
        touched={touched}
        errors={errors}
        getFieldProps={getFieldProps}
      />
      <UserEmail
        touched={touched}
        errors={errors}
        getFieldProps={getFieldProps}
      />
      <Button colorScheme="brandYellow" color="black.900" onClick={handleNext}>
        Next
      </Button>
    </>
  );
}

export default UserForm;
