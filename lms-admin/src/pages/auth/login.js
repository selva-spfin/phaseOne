import { useCallback, useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material'
import { useAuth } from 'src/hooks/use-auth'
import { useSelector, useDispatch } from 'react-redux';
import { setAuthList } from '../../redux/slices/authSlice';
import { setBankList, setLoanStatusList, setLoanTypeList, setProfileStatusList, setUserRoleList } from '../../redux/slices/lookup';
import { setTargetVal } from '../../redux/slices/overViewSlice';
import { Layout as AuthLayout } from 'src/layouts/auth/layout'
import { LoginApi, getLookupData } from '../../action/apiActions'

const Page = () => {
  const router = useRouter()
  const auth = useAuth()
  const dispatch = useDispatch();

  const [method, setMethod] = useState('email')
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        if (values.email && values.password) {
          const loginData = {
            user_password: values.password,
            user_name: values.email,
          }
          LoginApi(loginData).then(res => {
            if (res?.length > 0) {
             if(res[0].Profile_Status_Id === 6){
              auth.signIn(res[0]?.user_role)
              dispatch(setAuthList(res))
              dispatch(setTargetVal(res[0]?.Target))
              getLookupData("bank").then(res => {
                dispatch(setBankList(res))
              })

              getLookupData("loan_process_status").then(res => {
                dispatch(setLoanStatusList(res))
              })

              getLookupData("loan_type").then(res => {
                dispatch(setLoanTypeList(res))
              })

              getLookupData("profile_status").then(res => {
                dispatch(setProfileStatusList(res))
              })

              getLookupData("user_role").then(res => {
                dispatch(setUserRoleList(res))
              })

              router.push('/')
             }else{
              router.push('/pending')
             }
            } else {
              helpers.setErrors({ submit: 'Something wrong, please try again!!!' })
            }
          })
        } else {
          helpers.setErrors({ submit: 'Please check your email and password' })
        }
      } catch (err) {
        helpers.setStatus({ success: false })
        helpers.setErrors({ submit: err.message })
        helpers.setSubmitting(false)
      }
    },
  })

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value)
  }, [])

  const handleSkip = useCallback(() => {
    auth.skip()
    router.push('/')
  }, [auth, router])

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
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
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary"
                variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <form noValidate
              onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography color="error"
                  sx={{ mt: 3 }}
                  variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
              <Alert color="primary"
                severity="info"
                sx={{ mt: 3 }}>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <span>
                    If any registration queries please contact us at
                  </span>
                  {'\n'}
                  <p> <b> IT@spfinnacle.com / +91 9876543210</b></p>
                </div>
              </Alert>
            </form>
          </div>
        </Box>
      </Box>
    </>
  )
}

Page.getLayout = page => <AuthLayout>{page}</AuthLayout>

export default Page
