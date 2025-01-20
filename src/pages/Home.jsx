import React from "react";

import {
  Container,
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Typography,
  Box,
  InputAdornment
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Email, Person, LocationCity } from "@mui/icons-material";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  city: Yup.string().required("City is required"),
  subscribe: Yup.boolean(),
});

const Home = () => {
  return (
    <Container maxWidth="sm" className="mt-10 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Typography variant="h4" align="center" gutterBottom className="text-black dark:text-white">
        User Registration
      </Typography>

      <Formik
        initialValues={{
          name: "",
          email: "",
          gender: "",
          city: "",
          subscribe: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Submitted", values);
        }}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            {/* Name Input with Rounded Corners and Icon */}
            <Field
              as={TextField}
              fullWidth
              label="Full Name"
              variant="outlined"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: "12px", // Rounded border
                '& .MuiOutlinedInput-root': {
                  borderRadius: "12px",
                },
              }}
            />

            {/* Email Input with Rounded Corners and Icon */}
            <Field
              as={TextField}
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: "12px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "12px",
                },
              }}
            />

            {/* Gender Radio Buttons */}
            <FormControl component="fieldset" margin="normal" error={touched.gender && Boolean(errors.gender)}>
              <FormLabel component="legend" className="text-black dark:text-white">Gender</FormLabel>
              <Field as={RadioGroup} name="gender" row>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </Field>
            </FormControl>
            {touched.gender && errors.gender && (
              <Typography variant="body2" color="error">
                {errors.gender}
              </Typography>
            )}

            {/* Select Dropdown with Rounded Corners and Icon */}
            <Field
              as={TextField}
              select
              fullWidth
              label="Select City"
              variant="outlined"
              name="city"
              value={values.city}
              onChange={handleChange}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCity />
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: "12px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "12px",
                },
              }}
            >
              <MenuItem value="Lahore">New York</MenuItem>
              <MenuItem value="Karachi">Los Angeles</MenuItem>
              <MenuItem value="Sailkot">Chicago</MenuItem>
              <MenuItem value="Daska">Houston</MenuItem>
            </Field>

            {/* Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  name="subscribe"
                  checked={values.subscribe}
                  onChange={handleChange}
                />
              }
              label="Subscribe to newsletter"
              className="text-black dark:text-white"
            />

            {/* Submit Button */}
            <Box mt={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary" size="large">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Home;
//npm i @emotion/react @emotion/styled
