// PersonalInfoStep.js

import React, { useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import { TextField, Button, Grid } from '@mui/material'

const VerificationInfoStep = () => {
  return (
    <div>
      <Grid container
spacing={2}>
        <Grid item
xs={6}>
          <Field
            as={TextField}
            label="Door number"
            name="doorNumber"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="doorNumber"
            component="div"
          />
        </Grid>
        <Grid item
xs={6}>
          <Field
            as={TextField}
            label="Street"
            name="Street"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="Street"
            component="div"
          />
        </Grid>

        <Grid item
xs={6}>
          <Field
            as={TextField}
            label="City"
            name="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="City"
            component="div"
          />
        </Grid>
        <Grid item
xs={6}>
          <Field
            as={TextField}
            label="State"
            name="State"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="State"
            component="div"
          />
        </Grid>
        <Grid item
xs={6}>
          <Field
            as={TextField}
            label="Pin code"
            name="PinCode"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="PinCode"
            component="div"
          />
        </Grid>
        <Grid item
xs={6}>
          <Field
            as={TextField}
            label="Referral Code (Optional)"
            name="Referral"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="Referral"
            component="div"
          />
        </Grid>

        <Grid item
xs={6}>
          <Field
            as={TextField}
            label="PAN Number"
            name="PAN"
            type="PAN"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="PAN"
            component="div"
          />
        </Grid>
        <Grid item
xs={6}>
          <div
            style={{
              color: '#6C737F',
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: '0.7rem',
            }}
          >
            pan Number
          </div>
          <Field name="panNumber"
type="file">
            {({ field, form }) => (
              <div>
                <input
                  type="file"
                  id="panNumber"
                  name="panNumber"
                  onChange={event => {
                    form.setFieldValue(
                      'panNumber',
                      event.currentTarget.files[0]
                    )
                  }}
                />
              </div>
            )}
          </Field>
          <ErrorMessage
            style={{ color: 'red', fontSize: 'smaller' }}
            name="panNumber"
            component="div"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default VerificationInfoStep
