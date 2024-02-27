import Head from 'next/head';
import NextLink from 'next/link';
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';

const Page = () => (
  <>
    <Head>
      <title>Application Status - Pending</title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: 'center',
            }}
          >
            <img
              alt="Application Pending"
              src="/assets/errors/pending.png"
              style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 300,
              }}
            />
          </Box>
          <Typography align="center" sx={{ mb: 3 }} variant="h4">
            Your application is currently pending admin approval.
          </Typography>
          <Typography align="center" sx={{ mb: 3 }} variant="body1">
            Please be patient while we review your submission. If you have any
            queries, feel free to contact us using the information below:
          </Typography>
          <Typography align="center" variant="h6">
            Contact Information for Queries:
          </Typography>
          <Typography align="center" variant="body1">
            Email: <a href="mailto:lmsqueries@spfinnacle.com">lmsqueries@spfinnacle.com</a>
          </Typography>
          <Typography align="center" variant="body1">
            Phone:  +91 9876543210
          </Typography>
          <Button
           style={{marginRight:30}}
            component={NextLink}
            href="/auth/login/"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowLeftIcon />
              </SvgIcon>
            }
            sx={{ mt: 3 }}
            variant="contained"
          >
            Go back to Login
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default Page;
