import { useCallback, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { myprofileChanges } from '../../action/apiActions'
import { message } from 'antd'


export const AccountProfileDetails = () => {

  const profileData = useSelector(state => state.auth.authData)


  const formik = useFormik({
    initialValues: {
      email: profileData[0]?.Email_Id,
      phone: profileData[0]?.Mobile_Number,
      PAN: profileData[0]?.PAN_Number,
      Referral: profileData[0]?.Referral_Code,
      password: '',
      cnfPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      cnfPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {

      try {
        const apiData =
        {
          "User_Id": profileData[0]?.User_Id,
          "Password": values?.password
        }

        myprofileChanges(apiData).then((res) => {
          if (res?.status === "success") {
            message.success('Successfully Updated Password')
          }
        })

      } catch (err) {
        helpers.setStatus({ success: false })
        helpers.setErrors({ submit: err.message })
        helpers.setSubmitting(false)

      }
    },
  })





  return (
    <form

      onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader subheader=""
          title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container
              spacing={3}>


              <Grid xs={12}
                md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  disabled={true}
                  required
                  value={formik?.values?.email}
                />
              </Grid>
              <Grid xs={12}
                md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  disabled={true}
                  type="number"
                  value={formik?.values?.phone}
                />
              </Grid>


            </Grid>
            <Grid container
              spacing={3}>


              <Grid xs={12}
                md={6}>
                <TextField
                  fullWidth
                  label="PAN Number"
                  name="PAN"
                  disabled={true}
                  required
                  value={formik?.values?.PAN}
                />
              </Grid>
              <Grid xs={12}
                md={6}>
                <TextField
                  fullWidth
                  label="Referral Code"
                  name="Referral"
                  disabled={true}
                  // type="number"
                  value={formik?.values?.Referral}
                />
              </Grid>


            </Grid>
            <Grid container
              spacing={3}>


              <Grid xs={12}
                md={6}>
                <TextField
                  fullWidth
                  label="New Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={!!(formik.touched.password && formik.errors.password)}

                  helperText={formik.touched.password && formik.errors.password}

                  value={formik?.values?.password}
                />
              </Grid>
              <Grid xs={12}
                md={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="cnfPassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={!!(formik.touched.cnfPassword && formik.errors.cnfPassword)}
                  helperText={formik.touched.cnfPassword && formik.errors.cnfPassword}
                  value={formik?.values?.cnfPassword}
                />
              </Grid>


            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>



          <Button variant="contained" type="submit">Save details</Button>
        </CardActions>
      </Card>
    </form>
  )
}
