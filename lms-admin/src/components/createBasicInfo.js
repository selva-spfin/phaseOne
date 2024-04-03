// PersonalInfoStep.js

import React, { useState, useEffect } from 'react'
import { Field, ErrorMessage } from 'formik'
import { TextField, Button, Grid } from '@mui/material'
import { message } from 'antd'
import {
  checkPhoneNumber,
  checkEmail

} from '../action/apiActions'
import useDebounce from './useDebounce';


const PersonalInfoStep = ({
  setActiveFlag,
  setLoading,
  setSendOtpFlag,
  sendOtpFlag,
}) => {
  const [messageApi, setMessageApi] = useState('')

  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(30)
  const [mobileNumber, setMobileNumber] = useState('')
  const [otpVerify, setOtpVerify] = useState('')
  const [emailId, setEmailId] = useState()
  const [flag, setFlag] = useState(false)
  const [isLoading, setIsLoading] = useState(false);



  const debouncedEmail = useDebounce(emailId, 500);


  useEffect(() => {
    if (debouncedEmail) {
      setIsLoading(true);
      // Assuming checkEmailAvailability is a function that sends a request to check if the email is available
      checkEmailAvailability(debouncedEmail)
        .then((response) => {
          // setIsEmailAvailable(response.available);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error checking email availability:', error);
          setIsLoading(false);
        });
    }
  }, [debouncedEmail]);




  const EmailCheckValidation = (val) => {

    // setEmailId(val)
    if (val?.value.includes(".com")) {
      setFlag(true)

      checkEmail(val?.value).then(res => {
        if (res?.data[0]?.Response === "Already Exists") {

          message.error('Email Id already exists');
        }
      })


    } else {
      setFlag(false)
    }


  }
  const handleSendOtp = async () => {
    if (mobileNumber.length === 10) {
      // setOtpSent(false);
      checkPhoneNumber(mobileNumber).then(res => {
        if (res?.data[0]?.Response === "Not Exists") {
          setOtpSent(true);
          resendOTP();
        } else {
          message.error('phone number already exists');
          setOtpSent(false);
        }
      })
    } else {
      message.error('Invalid phone number');
      setOtpSent(false);
    }
  };


  const verifyFn = () => {
    setActiveFlag(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      message.success('Otp verified Successfully')
    }, 3000)
  }

  useEffect(() => {
    // Function to handle the countdown logic
    const interval = setInterval(() => {
      // Decrease seconds if greater than 0
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }

      // When seconds reach 0, decrease minutes if greater than 0
      if (seconds === 0) {
        if (minutes === 0) {
          // Stop the countdown when both minutes and seconds are 0
          clearInterval(interval)
        } else {
          // Reset seconds to 59 and decrease minutes by 1
          setSeconds(59)
          setMinutes(minutes - 1)
        }
      }
    }, 1000) // Run this effect every 1000ms (1 second)

    return () => {
      // Cleanup: stop the interval when the component unmounts
      clearInterval(interval)
    }
  }, [seconds])

  const resendOTP = () => {
    setMinutes(0)
    setSeconds(30)
  }

  return (
    <div>
      <Grid container
        spacing={2}>
        <Grid item
          xs={6}>
          <Field
            as={TextField}
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="firstName"
            component="div"
          />
        </Grid>
        <Grid item
          xs={6}>
          <Field
            as={TextField}
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="lastName"
            component="div"
          />
        </Grid>

        <Grid item
          xs={12}>
          <Field
            as={TextField}
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          // onChange={(event) => {
          //   // Handle field changes here if needed
          //   console.log('Field changed:', event.target.value);
          // }}

          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="email"
            component="div"
          />
        </Grid>
        <Grid item
          xs={12}>
          <Field
            as={TextField}
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <Button
                  variant="text"
                  color="primary"
                  style={{ height: '3rem', width: '10rem', borderRadius: '0%' }}
                  onClick={() => handleSendOtp()}
                  disabled={
                    mobileNumber?.length === 10 && otpSent == false
                      ? false
                      : true
                  }
                >
                  {otpSent ? 'OTP Sent' : 'Send OTP'}
                </Button>
              ),
            }}
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="phoneNumber"
            component="div"
          />
        </Grid>
        {otpSent && (
          <Grid item
            xs={12}
            style={{ textAlign: 'right', color: 'blue' }}>
            {seconds > 0 || minutes > 0 ? (
              <div>
                Time Remaining:{' '}
                <span style={{ fontWeight: 600 }}>
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </span>
              </div>
            ) : (
              <a
                disabled={seconds > 0 || minutes > 0}
                style={{
                  color: seconds > 0 || minutes > 0 ? 'blue' : 'blue',
                }}
                onClick={resendOTP}
              >
                Resend OTP
              </a>
            )}
          </Grid>
        )}
        <Grid item
          xs={12}>
          {otpSent && (
            <div>
              <Field
                as={TextField}
                label="OTP Verification"
                name="otp"
                variant="outlined"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <div>
                      <Grid item
                        xs={3}>
                        <Button
                          variant="text"
                          // color={"success"}
                          style={{
                            height: '3rem',
                            width: '8rem',
                            borderRadius: '0%',
                          }}
                          onClick={() => {
                            verifyFn()
                          }}
                          disabled={
                            mobileNumber?.length === 10 &&
                              otpVerify?.length === 4
                              ? false
                              : true
                          }
                        >
                          {'OTP Verify'}
                        </Button>
                      </Grid>
                      {/* <Grid item xs={3}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ height: "3rem", width: "10rem", borderRadius: "0%" }}
                        onClick={handleSendOtp}

                        disabled={otpSent}
                      >
                        {'Resent OTP'}
                      </Button>
                    </Grid> */}
                    </div>
                  ),
                }}
              />
              <ErrorMessage
                style={{ color: 'red', fontSize: 'smaller' }}
                name="otp"
                component="div"
              />
            </div>
          )}
        </Grid>

        <Field name="phoneNumber">
          {({ field }) => {
            if (Number(field.value)) {
              setMobileNumber(field.value)
              // handleSendOtp()

            } else {
              setMobileNumber(0)
            }
          }}
        </Field>

        <Field name="email">
          {({ field }) => {
            setEmailId(field)
          }}
        </Field>

        <Field name="PAN">{({ field }) => { }}</Field>

        <Field name="otp">{({ field }) => setOtpVerify(field.value)}</Field>
      </Grid>
    </div>
  )
}

export default PersonalInfoStep
