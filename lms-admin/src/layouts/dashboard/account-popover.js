import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from '@mui/material'
import { useAuth } from 'src/hooks/use-auth'
import { useSelector, useDispatch } from 'react-redux'
import { resetStates } from 'src/redux/slices/overViewSlice'


export const AccountPopover = props => {
  const dispatch = useDispatch();
  const { anchorEl, onClose, open } = props

  const profileData = useSelector(state => state.auth.authData)
  const router = useRouter()
  const auth = useAuth()

  const handleSignOut = useCallback(() => {
    onClose?.()
    auth.signOut();
    dispatch(resetStates())
    router.push('/auth/login')
  }, [onClose, auth, router])

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary"
          variant="body2">
          {profileData[0]?.First_Name + "  " + profileData[0]?.Last_Name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  )
}

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
}
