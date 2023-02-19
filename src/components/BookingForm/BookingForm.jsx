import { Button, Flex } from "@chakra-ui/react";
import "./BookingForm.css";
import DatePicker from "./DatePicker/DatePicker";
import GuestPicker from "./GuestPicker/GuestPicker";
import OccasionPicker from "./OccasionPicker/OccasionPicker";
import TimePicker from "./TimePicker/TimePicker";

function BookingForm({ formik, dateToday }) {
  const { handleSubmit, isSubmitting, errors, values } = formik;

  const submitForm = (e) => {
    e.preventDefault();
    const dayToday = Number(dateToday.slice(8, 10));
    if (Number(values.date.slice(8, 10)) < dayToday) {
      formik.setFieldError(
        "date",
        "You cannot select a day in the past. Please select a valid day"
      );
      // console.log(dayToday, Number(values.date.slice(8, 10)));
      return;
    }
    handleSubmit(e);
  };
  // console.log(errors);
  // console.log(formik.errors.date);
  // console.log(formik.values);
  return (
    <form className="booking-form" onSubmit={submitForm}>
      <DatePicker formik={formik} />
      <TimePicker formik={formik} />
      <GuestPicker formik={formik} />
      <OccasionPicker formik={formik} />
      <Flex justify="space-between">
        <Button colorScheme="brandYellow" color="blackAlpha.900" width="150px">
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
          _hover={{ backgroundColor: "brandGreen.700" }}
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
}

export default BookingForm;
