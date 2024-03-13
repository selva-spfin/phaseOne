import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  TextArea,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  CircularProgress
} from '@mui/material'
import { Upload, message, Form as AntForm } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
// import TextArea from 'antd/es/input/TextArea'



const CreateLead = ({ open, onClose, loading, onSubmit, leadEditdata }) => {

  const initialValues = {

    status: leadEditdata ? leadEditdata?.Lead_Status : "",
    reason: leadEditdata ? "" : "",

  }


  console.log("leadEditdata", leadEditdata)

  const validationSchema = Yup.object().shape({

    status: Yup.string().required('status is required'),
    // reason: Yup.string().required('Loan Type is required'),

  })


  const profileStatus = useSelector(state => state.Lookup.profileStatusData);

  console.log("profileStatus", profileStatus)



  return (
    <div>
      <Dialog open={open}

        onClose={onClose}>
        <DialogTitle>{leadEditdata?.firstName ? 'Change Status' : ''}</DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <Form style={{ marginTop: 20 }}
                onSubmit={handleSubmit}>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={12} style={{ marginBottom: "40px" }}>
                    <FormControl
                      fullWidth
                      error={touched.status && !!errors.status}
                    >
                      <InputLabel>Status</InputLabel>
                      <Field
                        as={Select}
                        // defaultValue={initialValues?.status}
                        name="status"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="">Select</MenuItem>
                        {profileStatus.filter(filData => Number(filData?.Profile_Status_Id) <= 5).map(option => (
                          <MenuItem key={option?.Profile_Status_Id}
                            value={option?.Profile_Status_Id}>
                            {option?.Status_Name}
                          </MenuItem>
                        )
                        )}
                      </Field>
                      {touched.status && errors.status && (
                        <FormHelperText>{errors.status}</FormHelperText>
                      )}
                    </FormControl>

                  </Grid>
                  <Grid item
                    xs={12} style={{ marginBottom: "40px" }}>
                    <FormControl
                      fullWidth
                      error={touched.reason && !!errors.reason}
                    >
                      {/* <InputLabel>Loan Type</InputLabel> */}
                      <Field
                        type="text"
                        name="reason"
                        label="Reason"
                        as={TextField}
                        multiline
                        rows={4}
                        fullWidth
                      />
                      {touched.reason && errors.reason && (
                        <FormHelperText>{errors.reason}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                </Grid>
                <DialogActions>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button type="submit"
                    variant="contained"
                    color="primary">
                    Save
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
          <div>
            {loading ? (
              <div style={{ position: 'absolute', top: '10rem', left: '15rem' }}>
                <CircularProgress />
              </div>
            ) : (
              // Your main content goes here once loading is complete
              <div></div>
            )}
          </div>
        </DialogContent>
      </Dialog>

    </div>


  )
}

export default CreateLead
