import { Button, Flex } from "@chakra-ui/react";
import "./BookingForm.css";
import DatePicker from "./DatePicker/DatePicker";
import GuestPicker from "./GuestPicker/GuestPicker";
import OccasionPicker from "./OccasionPicker/OccasionPicker";
import TimePicker from "./TimePicker/TimePicker";

function BookingForm({ formik, handlePrevious }) {
  const { isSubmitting } = formik;

  // console.log(errors);
  // console.log(formik.errors.date);
  // console.log(formik.values);
  return (
    <>
      <DatePicker formik={formik} />
      <TimePicker formik={formik} />
      <GuestPicker formik={formik} />
      <OccasionPicker formik={formik} />
      <Flex justify="space-between">
        <Button
          onClick={handlePrevious}
          colorScheme="brandYellow"
          color="blackAlpha.900"
          width="150px"
        >
          Previous
        </Button>
        <Button
          disabled={isSubmitting}
          bg="brandGreen.600"
          type="submit"
          value="Make Your reservation"
          formik={formik}
          width="150px"
          color="white"
          _hover={{ background: "brandGreen.700" }}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
}

export default BookingForm;
