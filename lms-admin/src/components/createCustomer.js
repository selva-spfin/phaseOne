import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from '@mui/material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { message } from 'antd'

const CreateCustomer = ({ open, onClose, onSubmit }) => {
  const [loanTypeVal, setLoanType] = useState('')

  const [dynamicSchema, setDynamicSchema] = React.useState(
    yup.object().shape({
      firstName: yup.string().required('First Name is required'),
      lastName: yup.string().required('Last Name is required'),
      mobileNo: yup.number().required('Mobile No is required'),
      companyName: yup.string().required('Company Name is required'),
      // Others: yup.string().required('Others is required'),
      companyName: yup.string().required('Company Name is required'),

      AAdhar: yup
        .number()
        .required('Salary is required')
        .positive('AAdhar Card must be Number'),

      pan: yup.string().required('Salary is required'),
    })
  )

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    setError,
    trigger,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(dynamicSchema),
    defaultValues: {},
  })

  React.useEffect(() => {
    reset({}) // Reset to defaultValues or an empty object
  }, [open, reset])

  const handleFileUpload3 = info => {
    // Limit the number of files to 3
    const { file, fileList } = info

    if (fileList.length > 1) {
      fileList.splice(-1, 1) // Remove the last file if more than 3
      message.error('You can only upload up to 1 files')
    }

    // Update the form value
    setValue('files3', fileList)

    // Handle other file upload logic if needed
  }
  const handleFileUpload2 = info => {
    // Limit the number of files to 3
    const { file, fileList } = info

    if (fileList.length > 1) {
      fileList.splice(-1, 1) // Remove the last file if more than 3
      message.error('You can only upload up to 1 files')
    }

    // Update the form value
    setValue('files2', fileList)

    // Handle other file upload logic if needed
  }
  const handleFileUpload1 = info => {
    // Limit the number of files to 3
    const { file, fileList } = info

    if (fileList.length > 1) {
      fileList.splice(-1, 1) // Remove the last file if more than 3
      message.error('You can only upload up to 1 files')
    }

    // Update the form value
    setValue('files1', fileList)

    // Handle other file upload logic if needed
  }

  const handleFileUpload = info => {
    // Limit the number of files to 3
    const { file, fileList } = info

    if (fileList.length > 3) {
      fileList.splice(-1, 1) // Remove the last file if more than 3
      message.error('You can only upload up to 3 files')
    }

    // Update the form value
    setValue('files', fileList)

    // Handle other file upload logic if needed
  }

  const handleLoanTypeChange = event => {
    setLoanType(event.target.dataset.value)
  }

  const handleFormSubmit = data => {
    onSubmit(data)
    onClose()
  }

  const customRequest = async ({ onSuccess, onError, file }) => {
    // Custom request logic, e.g., upload file to server

    // For demonstration purposes, simulate an upload delay
    setTimeout(() => {
      // Mock success
      onSuccess()

      // Mock error
      // onError(new Error("Upload failed"));
    }, 1000)
  }

  return (
    <Dialog open={open}
onClose={onClose}>
      <DialogTitle>Add Customer</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Grid container
spacing={2}>
            <Grid item
xs={6}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item
xs={6}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item
xs={6}>
              <Controller
                name="mobileNo"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mobile No"
                    error={!!errors.mobileNo}
                    helperText={errors.mobileNo?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item
xs={6}>
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Company Name"
                    error={!!errors.companyName}
                    helperText={errors.companyName?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item
xs={6}>
              <Controller
                name="salary"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Salary"
                    error={!!errors.salary}
                    helperText={errors.salary?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item
xs={6}>
              <Controller
                name="AAdhar"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="AAdhar Card"
                    error={!!errors.AAdhar}
                    helperText={errors.AAdhar?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item
xs={6}>
              <Controller
                name="pan"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="pan card"
                    error={!!errors.pan}
                    helperText={errors.pan?.message}
                    fullWidth
                  />
                )}
              />
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
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateCustomer
