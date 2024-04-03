import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import {
  Box,
  Button,
  Link,
  Stack,
  Dialog,
  DialogTitle,
  CircularProgress,
  DialogContent,
  DialogActions,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material'
import { message } from 'antd'
import PersonalInfoStep from '../../components/createBasicInfo'
import ContactInfoStep from '../../components/verificationInfo'
import Authentication from '../../components/Authentication'
import { useAuth } from 'src/hooks/use-auth'
import { Layout as AuthLayout } from 'src/layouts/auth/layout'
import { partnerSingUp } from '../../action/apiActions'


const steps = ['Basic Info', 'Aditional Info', 'Authentication']

const Page = () => {
  const router = useRouter()
  const auth = useAuth()

  const [activeStep, setActiveStep] = useState(0)
  const [activeStepFlag, setActiveStepFlag] = useState(false)
  const [activeFlag, setActiveFlag] = useState(false)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sendOtpFlag, setSendOtpFlag] = useState(false)
  const [imgString, setImageString] = useState('')
  const [flag, setFlag] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1)
  }

  const handleNext = () => {
    if (activeStep === 2) {

    } else {
      setActiveStep(prevStep => prevStep + 1)
    }

  }

  const getStepContent = (step, formikProps) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfoStep
            formikProps={formikProps}
            setActiveFlag={setActiveFlag}
            setLoading={setLoading}
            setSendOtpFlag={setSendOtpFlag}
            sendOtpFlag={sendOtpFlag}
          />
        )
      case 1:
        return <ContactInfoStep formikProps={formikProps} />
      default:
        return <Authentication formikProps={formikProps} />
    }
  }

  const convertImageToBase64 = (file, callback) => {
    const reader = new FileReader()

    reader.onload = function (event) {
      // `event.target.result` contains the Base64-encoded string
      const base64String = event?.target?.result?.split(',')[1]
      callback(base64String)
    }

    // Read the file as Data URL (Base64)
    reader.readAsDataURL(file)
  }

  const validateVerificationInfo = values => {
    const errors = {}

    if (activeStep === 1) {
      setActiveStepFlag(false)
      setActiveFlag(false)
      if (!values.doorNumber) {
        errors.doorNumber = 'Door Number is Required'
      }
      if (!values.PAN) {
        errors.PAN = 'PAN Number is Required'
      }
      if (!values.PinCode) {
        errors.PinCode = 'Pin Code is Required'
      }
      if (!values.State) {
        errors.State = 'State is Required'
      }
      if (!values.City) {
        errors.City = 'City is Required'
      }
      if (!values.Street) {
        errors.Street = 'Street is Required'
      }

      if (!values.panNumber) {
        errors.panNumber = 'PAN Card is Required'
      }

      if (
        values.doorNumber &&
        values.PAN &&
        values.PinCode &&
        values.State &&
        values.City &&
        values.Street &&
        values.panNumber
      ) {
        setActiveStepFlag(true)
        setActiveFlag(true)
        if (values.panNumber) {
          convertImageToBase64(values.panNumber, base64String => {
            setImageString(base64String)
            // You can use the base64String as needed (e.g., send it to the server)
          })
        }
      } else {
        setActiveStepFlag(false)
        setActiveFlag(false)
      }
    }
    return errors
  }

  const validateAuthInfo = values => {
    const errors = {}
    if (activeStep === 2) {
      setActiveStepFlag(false)
      setActiveFlag(false)

      if (!values.password) {
        errors.password = 'Password is required'
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long'
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required'
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match'
      }

      if (!values.agreedToTerms) {
        errors.agreedToTerms = 'Please Agree to the terms and conditions'
      }

      if (values.password && values.confirmPassword && values.agreedToTerms) {
        setActiveStepFlag(true)
        setActiveFlag(true)
      } else {
        setActiveStepFlag(false)
        setActiveFlag(false)
      }
    }

    return errors
  }

  const validateBasicInfo = values => {
    const errors = {}

    if (activeStep == 0) {
      // setActiveFlag(false)

      if (!values.firstName) {
        errors.firstName = 'First Name is Required'
      }

      if (!values.lastName) {
        errors.lastName = 'Last Name is Required'
      }

      if (!values.email) {
        errors.email = 'Email Address isRequired'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      } else {
        console.log("eeeeeeeemail.", values.email)
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number Required'
      } else if (!/^[0-9]{10}$/g.test(values.phoneNumber)) {
        errors.phoneNumber = 'InValid Phone Number'
      } else {
        setSendOtpFlag(values.phoneNumber)
      }

      if (!values.otp) {
        errors.otp = 'OTP Required'
      } else if (values.otp && loading === false) {
        //
      }

      if (
        values.firstName &&
        values.lastName &&
        values.phoneNumber &&
        values.email &&
        values.otp
      ) {
        setActiveStepFlag(true)
      } else {
        setActiveStepFlag(false)
      }
    }

    return errors
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '-90px',
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
          }}
        >
          <div>
            <Stack spacing={1}
              sx={{ mb: 3 }}>
              <Typography variant="h4">Register</Typography>
              <Typography color="text.secondary"
                variant="body2">
                Already have an account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/login"
                  underline="hover"
                  variant="subtitle2"
                >
                  Log in
                </Link>
              </Typography>
            </Stack>

            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                otp: '',
                doorNumber: '',
                PAN: '',
                PinCode: '',
                State: '',
                City: '',
                Street: '',
                password: '',
                confirmPassword: '',
                agreedToTerms: '',
                panNumber: null,
              }}
              validate={
                activeStep === 0
                  ? validateBasicInfo
                  : activeStep === 1
                    ? validateVerificationInfo
                    : activeStep === 2 && validateAuthInfo
              }
              onSubmit={(values, actions) => {

                let data = {
                  Email_Id: values.email,
                  First_Name: values.firstName,
                  Id_Proof_Image: imgString,
                  Last_Name: values.lastName,
                  Mobile_Number: values.phoneNumber,
                  PAN_Number: values.PAN,
                  Password: values.password,
                  Profile_Status_Id: 1,
                  Referral_Code: values.Referral,
                  Subscribtion_Id: 0,
                  Terms_and_Condition_Status: values.agreedToTerms,
                  User_Id: 0,
                  User_Role_Id: 2,
                  State: values.State,
                  Street: values.Street,
                  City: values.City,
                  Pincode: values.PinCode,
                  Door_no: values.doorNumber,
                }

                actions.setSubmitting(false);
                // if (activeStep === 2) {
                partnerSingUp(data, setLoading).then(res => {

                  if (res?.Profile_Status === "Pending") {
                    // auth.signIn(res[0]?.user_role)
                    router.push('/pending')
                  } else {
                    message.error('something went wrong please try again after sometime')
                  }
                })
                // }


              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div></div>
                  <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    style={{ marginBottom: '2.5rem' }}
                  >
                    {steps.map(label => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>

                  <div>
                    {getStepContent(activeStep)}

                    <div style={{ marginTop: '1rem' }}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={handleBack}
                          variant="contained"
                          color="primary"
                          style={{ marginRight: '1rem', width: '7rem' }}
                        >
                          Back
                        </Button>
                      )}

                      <Button
                        type={"submit"}
                        variant="contained"
                        color="primary"
                        style={{ width: '7rem' }}
                        onClick={activeStep !== 2 ? handleNext : null}
                        disabled={!activeFlag}
                      >
                        {activeStep === 2 ? 'Submit' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            <Dialog open={open}
              onClose={handleClose}>
              <DialogTitle>Success</DialogTitle>
              <DialogContent>
                <p>Please wait for admin approval.</p>
              </DialogContent>
              <DialogActions style={{ textAlign: 'center' }}>
                <Button href="/"
                  onClick={handleClose}
                  color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Box>
      </Box>
      <div>
        {loading ? (
          <div style={{ position: 'absolute', top: '20rem', left: '20rem' }}>
            <CircularProgress />
          </div>
        ) : (
          // Your main content goes here once loading is complete
          <div></div>
        )}
      </div>
    </>
  )
}

Page.getLayout = page => <AuthLayout>{page}</AuthLayout>

export default Page
