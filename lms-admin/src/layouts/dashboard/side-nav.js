import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import PropTypes from 'prop-types'
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon'
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon'
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Logo } from 'src/components/logo'
import { Scrollbar } from 'src/components/scrollbar'
import { items, items1 } from './config'
import { SideNavItem } from './side-nav-item'

export const SideNav = props => {
  const { open, onClose } = props
  const pathname = usePathname()
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'))

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: '#FFF',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32,
            }}
          >
            <img alt=""
              src="/favicon-16x16.png" />
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px',
            }}
          >
            <div>
              <Typography color="inherit"
                variant="subtitle1">
                {window.sessionStorage?.getItem('uAuth') === '2'
                  ? 'Partner Portal'
                  : 'Telecaller Portal'}
              </Typography>
            </div>
            {/* <SvgIcon
              fontSize="small"
              sx={{ color: 'neutral.500' }}
            >
              <ChevronUpDownIcon />
            </SvgIcon> */}
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {window.sessionStorage.getItem('uAuth') === '3'
              ? items1.map(item => {
                const active = item.path ? pathname === item.path : false

                return (
                  <SideNavItem
                    active={active}
                    disabled={item.disabled}
                    external={item.external}
                    icon={item.icon}
                    key={item.title}
                    path={item.path}
                    title={item.title}
                  />
                )
              })
              : items.map(item => {
                const active = item.path ? pathname === item.path : false

                return (
                  <SideNavItem
                    active={active}
                    disabled={item.disabled}
                    external={item.external}
                    icon={item.icon}
                    key={item.title}
                    path={item.path}
                    title={item.title}
                  />
                )
              })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          {window.sessionStorage?.getItem('uAuth') === '2' ? (
            <div>
              <Typography color="neutral.100"
                variant="subtitle2">
                Need more features?
              </Typography>
              <Typography color="neutral.500"
                variant="body2">
                Upgrade to premium partner.
              </Typography>
            </div>
          ) : (
            <Typography
              color="neutral.100"
              variant="subtitle2"
              style={{ textAlign: 'center' }}
            >
              Focus on the solution, Not a problem
            </Typography>
          )}

          <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%',
              },
            }}
          >
            <img
              alt="Go to pro"
              src={
                window.sessionStorage?.getItem('uAuth') == '2'
                  ? '/assets/devias-kit-pro.png'
                  : '/assets/telecaller.png'
              }
            />
          </Box>
        </Box>
      </Box>
    </Scrollbar>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{ zIndex: theme => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}
