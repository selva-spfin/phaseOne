import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
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

import { loanStatusOptions, loanType, bankNameList } from 'src/mockdata'

const { Dragger } = Upload

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const allowedFileTypes = ['image/png', 'image/jpeg', 'application/pdf'];


const CreateLead = ({ open, onClose, loading, onSubmit, leadEditdata }) => {

  const initialValues = {
    id: leadEditdata ? leadEditdata?.id : "",
    firstName: leadEditdata ? leadEditdata?.firstName : "",
    lastName: leadEditdata ? leadEditdata?.lastName : "",
    mobileNo: leadEditdata ? leadEditdata?.mobileNo : "",
    email: leadEditdata ? leadEditdata?.email : "",
    companyName: leadEditdata ? leadEditdata?.companyName : "",
    salary: leadEditdata ? leadEditdata?.salary : "",
    doorNumber: leadEditdata ? leadEditdata?.doorNumber : "",
    street: leadEditdata ? leadEditdata?.street : "",
    city: leadEditdata ? leadEditdata?.city : "",
    state: leadEditdata ? leadEditdata?.state : "",
    pincode: leadEditdata ? leadEditdata?.pincode : "",
    loanAmount: leadEditdata ? leadEditdata?.loanAmount : "",
    bankName: leadEditdata ? leadEditdata?.Bank_Id : "",
    loanType: leadEditdata ? leadEditdata?.Loan_Type_Id : "",
    Employee_Type: leadEditdata ? leadEditdata?.Employee_Type : "",
    loanProcessStatus: leadEditdata ? leadEditdata?.Loan_Process_Status_Id : "",
    payslips: leadEditdata?.payslips !== "null" ? leadEditdata?.payslips?.map((data, index) => { return { file: data.split("#")[1], name: "payslips" + index + 1 } }) : [],
    aadharCard: leadEditdata?.aadharCard !== "null" ? leadEditdata?.aadharCard?.map((data, index) => { return { file: data.split("#")[1], name: "aadharCard" + index + 1 } }) : [],
    panCard: leadEditdata?.panCard !== "null" ? leadEditdata?.panCard?.map((data, index) => { return { file: data.split("#")[1], name: "panCard" + index + 1 } }) : [],
    bankStatement: leadEditdata?.bankStatement !== "null" ? leadEditdata?.bankStatement?.map((data, index) => { return { file: data.split("#")[1], name: "bankStatement" + index + 1 } }) : [],
  }


  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobileNo: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile No is required'),
    email: Yup.string()
      .matches(emailRegex, 'Invalid email address')
      .required('Email is required'),
    companyName: Yup.string().required('Company Name is required'),
    salary: Yup.number()
      .positive('Salary must be a positive number')
      .required('Salary is required'),
    doorNumber: Yup.string().required('Door number is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string().required('Pin Code is required'),
    loanAmount: Yup.number()
      .positive('Loan Amount must be a positive number')
      .required('Loan Amount is required'),
    bankName: Yup.string().required('Bank Name is required'),
    Employee_Type: Yup.string().required('Employee Type is required'),
    loanType: Yup.string().required('Loan Type is required'),
    loanTypeOther: Yup.string().when('loanType', {
      is: 'Others',
      then: Yup.string().required('Please specify the loan type'),
    }),
    loanProcessStatus: Yup.string().required('Loan Process Status is required'),
    payslips: leadEditdata?.payslips !== "null" ? Yup.array().required('payslips is required').min(3, 'Exactly 3 files are required').max(3, 'Exactly 3 files are required') : Yup.array().required('payslips is required').min(3, 'Exactly 3 files are required').max(3, 'Exactly 3 files are required')

      .test("filetype", "Unsupported file format / 3 image must be upload", (value) => {

        if (value && value.length > 0) {

          for (let i = 0; i <= 2; i++) {
            if (
              value[i]?.type === "image/png" &&
              value[i]?.type === "image/jpeg" &&
              value[i]?.type === "application/pdf"
            ) {
              return false;
            }
          }
        }
        return true;
      }).test("filesize", "Max allowed size is 2MB", (value) => {
        if (value && value.length > 0) {
          for (let i = 0; i <= 2; i++) {
            if (value[i]?.size > (2 * 1024 * 1024)) {
              return false;
            }
          }
        }
        return true;
      }),

    aadharCard: leadEditdata?.aadharCard !== "null" ? Yup.mixed().required('aadharCard is required') : Yup.mixed().required('Aadhar Card is required') // 2MB limit
      .test(
        'fileSize',
        'Max allowed size is 2MB',
        value => value && value[0]?.size <= 2 * 1024 * 1024
      )
      .test(
        'fileType',
        'Unsupported file type',
        value =>
          value &&
          ['image/jpeg', 'image/png', 'application/pdf'].includes(value[0]?.type)
      ),
    panCard: leadEditdata?.panCard !== "null" ? Yup.mixed().required('panCard is required') : Yup.mixed().required('PAN Card is required')
      .test(
        'fileSize',
        'Max allowed size is 2MB',
        value => value && value[0]?.size <= 2 * 1024 * 1024
      ) // 2MB limit
      .test(
        'fileType',
        'Unsupported file type',
        value =>
          value &&
          ['application/pdf', 'image/jpeg', 'image/png'].includes(value[0]?.type)
      )
    ,
    bankStatement: leadEditdata?.bankStatement !== "null" ? Yup.mixed().required('bankStatement is required') : Yup.mixed().required('Bank Statement is required')
      .test(
        'fileSize',
        'Max allowed size is 5MB',
        value => value && value[0]?.size <= 5 * 1024 * 1024
      ) // 5MB limit
      .test(
        'fileType',
        'Unsupported file type',
        value =>
          value &&
          ['application/pdf', 'image/jpeg', 'image/png'].includes(value[0]?.type)
      )
    ,
  })


  const BankData = useSelector(state => state.Lookup.bankData);
  const LoanProcessStatusData = useSelector(state => state.Lookup.loanProcessStatusData);
  const LoanTypeData = useSelector(state => state.Lookup.loanTypeData);

  const Employee_Type_Data = [{
    value: "Salaried",
    label: "salaried"
  }, {
    value: "Self Employed",
    label: "Self Employed"
  }]




  const handlePayslipUpload = (info, setFieldValue) => {
    const { file, fileList } = info;


    let isFileTypeAllowed = true;

    // fileList.forEach(file => {
    if (!allowedFileTypes.includes(file.type)) {
      isFileTypeAllowed = false;
    }
    // });

    if (file?.originFileObj === undefined && file?.file?.includes("assets/leads/")) {

      setFieldValue('payslips', fileList);
    }
    if (isFileTypeAllowed) {
      if (fileList.length > 3) {
        fileList.splice(-1, 1);
        message.error('You can only upload up to 3 files');
      }
      setFieldValue('payslips', fileList);
    } else {
      message.error('You can only upload PNG, JPEG, or PDF files!');

      // fileList.splice(1);
      // setFieldValue('payslips', fileList);
    }
  }

  const handleAadharCardUpload = (info, setFieldValue) => {
    const { fileList } = info

    let isFileTypeAllowed = true;





    // Iterate over each file in the fileList array
    fileList.forEach(file => {
      if (!allowedFileTypes.includes(file.type)) {
        isFileTypeAllowed = false;
      }
    });

    if (!isFileTypeAllowed) {
      message.error('You can only upload PNG, JPEG, or PDF files!');
    } else {
      if (fileList.length > 1) {
        fileList.splice(-1, 1)
        message.error('You can only upload one file')
      }
      setFieldValue('aadharCard', fileList)
    }


  }

  const handleBankStatementUpload = (info, setFieldValue) => {
    const { fileList } = info


    let isFileTypeAllowed = true;

    // Iterate over each file in the fileList array
    fileList.forEach(file => {
      if (!allowedFileTypes.includes(file.type)) {
        isFileTypeAllowed = false;
      }
    });

    if (!isFileTypeAllowed) {
      message.error('You can only upload PNG, JPEG, or PDF files!');
    } else {
      if (fileList.length > 1) {
        fileList.splice(-1, 1)
        message.error('You can only upload one file')
      }

      setFieldValue('bankStatement', fileList)
    }


  }

  const handlePancardUpload = (info, setFieldValue) => {
    const { fileList } = info

    let isFileTypeAllowed = true;

    // Iterate over each file in the fileList array
    fileList.forEach(file => {
      if (!allowedFileTypes.includes(file.type)) {
        isFileTypeAllowed = false;
      }
    });

    if (!isFileTypeAllowed) {
      message.error('You can only upload PNG, JPEG, or PDF files!');
    } else {
      if (fileList.length > 1) {
        fileList.splice(-1, 1)
        message.error('You can only upload one file')
      }

      setFieldValue('panCard', fileList)
    }


  }

  return (
    <div>
      <Dialog open={open}
        onClose={onClose}>
        <DialogTitle>{leadEditdata?.firstName ? 'Update Lead' : 'Create Lead'}</DialogTitle>
        <DialogContent>
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
                    xs={6}>
                    <Field
                      type="text"
                      name="firstName"
                      label="First Name"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.firstName}</FormHelperText>
                  </Grid>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="lastName"
                      label="Last Name"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.lastName}</FormHelperText>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="email"
                      label="Email"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.email}</FormHelperText>
                  </Grid>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="mobileNo"
                      label="Mobile No"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.mobileNo}</FormHelperText>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="companyName"
                      label="Company Name"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.companyName}</FormHelperText>
                  </Grid>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="salary"
                      label="Salary"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.salary}</FormHelperText>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="doorNumber"
                      label="Door No"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.doorNumber}</FormHelperText>
                  </Grid>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="street"
                      label="Street"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.street}</FormHelperText>
                  </Grid>

                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="city"
                      label="city"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.city}</FormHelperText>
                  </Grid>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="state"
                      label="State"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.state}</FormHelperText>
                  </Grid>

                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="pincode"
                      label="Pincode"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.pincode}</FormHelperText>
                  </Grid>
                  <Grid item
                    xs={6}>
                    <Field
                      type="text"
                      name="loanAmount"
                      label="Loan Amount"
                      as={TextField}
                      fullWidth
                    />
                    <FormHelperText error>{errors.loanAmount}</FormHelperText>
                  </Grid>

                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={6}>
                    <FormControl
                      fullWidth
                      error={touched.bankName && !!errors.bankName}
                    >
                      <InputLabel>Bank Name</InputLabel>
                      <Field
                        as={Select}
                        // defaultValue={initialValues?.bankName}
                        name="bankName"
                        value={values.bankName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="">Select</MenuItem>
                        {BankData.map(option => (
                          <MenuItem key={option?.Bank_Id}
                            value={option?.Bank_Id}>
                            {option?.Bank_Name}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.bankName && errors.bankName && (
                        <FormHelperText>{errors.bankName}</FormHelperText>
                      )}
                    </FormControl>

                  </Grid>
                  <Grid item
                    xs={6}>
                    <FormControl
                      fullWidth
                      error={touched.loanType && !!errors.loanType}
                    >
                      <InputLabel>Loan Type</InputLabel>
                      <Field
                        as={Select}
                        name="loanType"
                        value={values.loanType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="">Select</MenuItem>
                        {LoanTypeData?.map(option => (
                          <MenuItem key={option?.Loan_Type_Id}
                            value={option?.Loan_Type_Id}>
                            {option?.Loan_Type_Name}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.loanType && errors.loanType && (
                        <FormHelperText>{errors.loanType}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={6}>
                    <FormControl
                      fullWidth
                      error={touched.loanProcessStatus && !!errors.loanProcessStatus}
                    >
                      <InputLabel>Loan Process Status</InputLabel>
                      <Field
                        as={Select}
                        name="loanProcessStatus"
                        value={values.loanProcessStatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="">Select</MenuItem>
                        {LoanProcessStatusData?.map(option => (
                          <MenuItem key={option?.Loan_Process_Status_Id}
                            value={option?.Loan_Process_Status_Id}>
                            {option?.Loan_Process_Name}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.loanProcessStatus && errors.loanProcessStatus && (
                        <FormHelperText error>
                          {errors.loanProcessStatus?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item
                    xs={6}>
                    <FormControl
                      fullWidth
                      error={touched.Employee_Type && !!errors.Employee_Type}
                    >
                      <InputLabel>Employee Type
                      </InputLabel>
                      <Field
                        as={Select}
                        name="Employee_Type"
                        value={values.Employee_Type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="">Select</MenuItem>
                        {Employee_Type_Data?.map(option => (
                          <MenuItem key={option?.value}
                            value={option?.value}>
                            {option?.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.Employee_Type && errors.Employee_Type && (
                        <FormHelperText error>
                          {errors.Employee_Type?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={12}>
                    <AntForm.Item
                      validateStatus={
                        touched.payslips && errors.payslips ? 'error' : ''
                      }
                      help={touched.payslips && errors.payslips}
                    >
                      <Field
                        name="payslips"
                        render={({ field }) => (
                          <Dragger
                            {...field}
                            beforeUpload={() => false} // Prevent default upload behavior
                            onChange={info => {
                              handlePayslipUpload(info, setFieldValue)

                            }
                            }
                            fileList={values.payslips}
                            multiple
                          >
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag files to upload Payslips
                            </p>
                            <p className="ant-upload-hint">
                              Support for multiple file uploads (PDF, JPEG, PNG).
                            </p>
                          </Dragger>
                        )}
                      />
                    </AntForm.Item>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={12}>
                    <AntForm.Item
                      validateStatus={
                        touched.aadharCard && errors.aadharCard ? 'error' : ''
                      }
                      help={touched.aadharCard && errors.aadharCard}
                    >
                      <Field
                        name="aadharCard"
                        render={({ field }) => (
                          <Dragger
                            {...field}
                            beforeUpload={() => false} // Prevent default upload behavior
                            onChange={info =>
                              handleAadharCardUpload(info, setFieldValue)
                            }
                            fileList={values.aadharCard}


                            showUploadList={{ showDownloadIcon: false }}
                          >
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag file to upload Aadhar Card
                            </p>
                            <p className="ant-upload-hint">
                              Support for a single file upload (PDF, JPEG, PNG).
                            </p>
                          </Dragger>
                        )}
                      />
                    </AntForm.Item>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={12}>
                    <AntForm.Item
                      validateStatus={
                        touched.panCard && errors.panCard ? 'error' : ''
                      }
                      help={touched.panCard && errors.panCard}
                    >
                      <Field
                        name="panCard"
                        render={({ field }) => (
                          <Dragger
                            {...field}
                            beforeUpload={() => false} // Prevent default upload behavior
                            onChange={info =>
                              handlePancardUpload(info, setFieldValue)
                            }
                            fileList={values.panCard}

                          // showUploadList={{ showDownloadIcon: false }}
                          >
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag file to upload PAN Card
                            </p>
                            <p className="ant-upload-hint">
                              Support for a single file upload (PDF, JPEG, PNG).
                            </p>
                          </Dragger>
                        )}
                      />
                    </AntForm.Item>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 10 }}
                  container
                  spacing={2}>
                  <Grid item
                    xs={12}>
                    <AntForm.Item
                      validateStatus={
                        touched.bankStatement && errors.bankStatement
                          ? 'error'
                          : ''
                      }
                      help={touched.bankStatement && errors.bankStatement}
                    >
                      <Field
                        name="bankStatement"
                        render={({ field }) => (
                          <Dragger
                            {...field}
                            beforeUpload={() => false} // Prevent default upload behavior
                            onChange={info =>
                              handleBankStatementUpload(info, setFieldValue)
                            }
                            fileList={
                              values.bankStatement
                            }
                          // showUploadList={{ showDownloadIcon: false }}
                          >
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag file to upload Bank Statement (last 6
                              months)
                            </p>
                            <p className="ant-upload-hint">
                              Support for a single file upload (PDF, JPEG, PNG).
                            </p>
                          </Dragger>
                        )}
                      />
                    </AntForm.Item>
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
              <div style={{ position: 'absolute', top: '20rem', left: '15rem' }}>
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
