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
  InputAdornment,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Email, Person, LocationCity } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  city: Yup.string().required("City is required"),
  subscribe: Yup.boolean(),
});

const Home = () => {
  const { theme } = useTheme();

  // Dynamic styles based on theme
  const inputStyle = {
    backgroundColor: theme === "dark" ? "#2D3748" : "#fff",
    color: theme === "dark" ? "#E2E8F0" : "#000",
    borderRadius: "12px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      "& fieldset": {
        borderColor: theme === "dark" ? "#4A5568" : "#ccc",
      },
      "&:hover fieldset": {
        borderColor: theme === "dark" ? "#A0AEC0" : "#666",
      },
    },
  };

  return (
    <Container maxWidth="sm" className="mt-10 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="text-black dark:text-white"
      >
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
            {/* Name Input */}
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
              sx={inputStyle}
            />

            {/* Email Input */}
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
              sx={inputStyle}
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

            {/* Select Dropdown */}
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
              sx={inputStyle}
            >
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              <MenuItem value="Chicago">Chicago</MenuItem>
              <MenuItem value="Houston">Houston</MenuItem>
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