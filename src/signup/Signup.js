import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  OutlinedInput,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Wizard() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const validationSchemas = [
    Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Phone number must be 10 digits"),
      age: Yup.number()
        .required("Age is required")
        .min(1, "Must be at least 1")
        .max(120, "Must be 120 or younger"),
      gender: Yup.string().required("Gender is required"),
    }),
    Yup.object({
      habits: Yup.array().of(Yup.string()).min(1, "Select at least one habit"),
      disease: Yup.string().required("Disease is required"),
      otherDisease: Yup.string().when("disease", {
        is: "other",
        then: (schema) => schema.required("Please specify the disease"),
      }),
      similarDiseases: Yup.array()
        .min(1, "Select at least one similar disease")
        .of(Yup.string()),
    }),
    Yup.object({
      insurance: Yup.array().of(Yup.string()).min(1, "Select at least one insurance"),
      aboutYou: Yup.string().required("Please select your profession"),
      employment: Yup.string().required("Employment status is required"),
    }),
  ];

  const initialValues = {
    name: "",
    phone: "",
    age: "",
    gender: "",
    habits: [],
    disease: "",
    otherDisease: "",
    similarDiseases: [],
    insurance: [],
    aboutYou: "",
    employment: "",
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3 }}>
      <Typography variant="h5" align="center" sx={{ mb: 4 }}>
        Complete Your Profile!
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[step - 1]}
        onSubmit={(values) => {
          if (step < 3) {
            handleNext();
          } else {
            console.log("Form submitted:", values);
            navigate("/id");
          }
        }}
      >
        {({ values, errors, touched, setFieldValue, isValid }) => (
          <Form>
            {step === 1 && (
              <>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={(e) => setFieldValue("phone", e.target.value)}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  type="number"
                  value={values.age}
                  onChange={(e) => setFieldValue("age", e.target.value)}
                  error={touched.age && Boolean(errors.age)}
                  helperText={touched.age && errors.age}
                  sx={{ mb: 2 }}
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={values.gender}
                    onChange={(e) => setFieldValue("gender", e.target.value)}
                    error={touched.gender && Boolean(errors.gender)}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}

            {step === 2 && (
              <>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Habits
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Habits</InputLabel>
                  <Select
                    name="habits"
                    multiple
                    value={values.habits}
                    onChange={(e) => setFieldValue("habits", e.target.value)}
                    input={<OutlinedInput label="Habits" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {["Smoking", "Drinking", "Exercise", "Meditation", "Healthy Eating"].map((habit) => (
                      <MenuItem key={habit} value={habit}>
                        <Checkbox checked={values.habits.includes(habit)} />
                        {habit}
                      </MenuItem>
                    ))}
                  </Select>
                  <ErrorMessage name="habits" component="div" style={{ color: "red", marginTop: "8px" }} />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 3 }}>
                  <InputLabel>Disease</InputLabel>
                  <Select
                    name="disease"
                    value={values.disease}
                    onChange={(e) => setFieldValue("disease", e.target.value)}
                    error={touched.disease && Boolean(errors.disease)}
                  >
                    {["Diabetes", "Hypertension", "Asthma", "Allergies", "Heart Disease", "Other"].map(
                      (disease) => (
                        <MenuItem key={disease} value={disease}>
                          {disease}
                        </MenuItem>
                      )
                    )}
                  </Select>
                  <ErrorMessage name="disease" component="div" style={{ color: "red", marginTop: "8px" }} />
                </FormControl>

                {values.disease === "Other" && (
                  <TextField
                    fullWidth
                    label="Specify Other Disease"
                    name="otherDisease"
                    value={values.otherDisease}
                    onChange={(e) => setFieldValue("otherDisease", e.target.value)}
                    error={touched.otherDisease && Boolean(errors.otherDisease)}
                    helperText={touched.otherDisease && errors.otherDisease}
                    sx={{ mt: 3 }}
                  />
                )}

                <FormControl fullWidth sx={{ mt: 3 }}>
                  <InputLabel>Similar Diseases</InputLabel>
                  <Select
                    name="similarDiseases"
                    multiple
                    value={values.similarDiseases}
                    onChange={(e) => setFieldValue("similarDiseases", e.target.value)}
                    input={<OutlinedInput label="Similar Diseases" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {["Diabetes", "Hypertension", "Asthma", "Allergies", "Heart Disease"].map((disease) => (
                      <MenuItem key={disease} value={disease}>
                        <Checkbox checked={values.similarDiseases.includes(disease)} />
                        {disease}
                      </MenuItem>
                    ))}
                  </Select>
                  <ErrorMessage
                    name="similarDiseases"
                    component="div"
                    style={{ color: "red", marginTop: "8px" }}
                  />
                </FormControl>
              </>
            )}

            {step === 3 && (
              <>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Insurance and Profession
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Insurance</InputLabel>
                  <Select
                    name="insurance"
                    multiple
                    value={values.insurance}
                    onChange={(e) => setFieldValue("insurance", e.target.value)}
                    input={<OutlinedInput label="Insurance" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {["Health", "Life", "Auto", "Home", "Travel"].map((insurance) => (
                      <MenuItem key={insurance} value={insurance}>
                        <Checkbox checked={values.insurance.includes(insurance)} />
                        {insurance}
                      </MenuItem>
                    ))}
                  </Select>
                  <ErrorMessage
                    name="insurance"
                    component="div"
                    style={{ color: "red", marginTop: "8px" }}
                  />
                </FormControl>

                <TextField
                  fullWidth
                  label="About You"
                  name="aboutYou"
                  value={values.aboutYou}
                  onChange={(e) => setFieldValue("aboutYou", e.target.value)}
                  error={touched.aboutYou && Boolean(errors.aboutYou)}
                  helperText={touched.aboutYou && errors.aboutYou}
                  sx={{ mt: 3 }}
                />

                <FormControl fullWidth sx={{ mt: 3 }}>
                  <InputLabel>Employment</InputLabel>
                  <Select
                    name="employment"
                    value={values.employment}
                    onChange={(e) => setFieldValue("employment", e.target.value)}
                    error={touched.employment && Boolean(errors.employment)}
                  >
                    <MenuItem value="employed">Employed</MenuItem>
                    <MenuItem value="unemployed">Unemployed</MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="retired">Retired</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}

            <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
              <Button variant="contained" onClick={handlePrevious} disabled={step === 1}>
                Previous
              </Button>
              <Button variant="contained" type="submit" disabled={!isValid}>
                {step === 3 ? "Submit" : "Next"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Wizard;
