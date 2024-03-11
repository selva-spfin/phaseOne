import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  TextField
} from '@mui/material'
import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setTargetVal } from '../../redux/slices/overViewSlice';
import { targetChanges } from '../../action/apiActions'
import { message } from 'antd'





export const AccountProfile = () => {


  const tragetVal = useSelector(state => state.overView.setTarget)
  const profileData = useSelector(state => state.auth.authData)



  const [flag, setFlag] = useState(1)
  const [target, setTarget] = useState(tragetVal ? tragetVal : 0)

  const dispatch = useDispatch();






  const targetSubmit = () => {
    const apiData =
    {
      "User_Id": profileData[0]?.User_Id,
      "Target": target
    }

    targetChanges(apiData).then((res) => {
      if (res?.status === "success") {
        dispatch(setTargetVal(target))
        setFlag(1)
        message.success('Successfully Updated the Target')
      }
    })

  }

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: "1rem"
          }}
        >

          <Typography gutterBottom
            variant="h6" >
            TARGET LOAN AMOUNT
          </Typography>

          <div style={{ display: flag === 1 ? "flex" : "none" }}>
            <Typography color="text.secondary"
              variant="h5" style={{ flex: 3, marginBottom: "1rem", marginTop: "1rem" }}>
              ₹ {tragetVal || 0}
            </Typography>
            <Typography color="text.secondary" style={{ flex: 3, marginBottom: "1rem", marginTop: "1.5rem", cursor: "pointer" }}
            >
              <a style={{ color: "blue", fontSize: "small" }} onClick={() => setFlag(2)}>set Target</a>
            </Typography>
          </div>
          <div style={{ display: flag === 1 ? "none" : "block" }}>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField
                fullWidth
                label="set Target"
                name="Target"
                onChange={(event) => setTarget(event.target.value)}
                value={target}
                required
              />
            </div>
            <div>
              <Button style={{ marginBottom: "1rem", width: "100%" }} disabled={target ? false : true} variant="contained" onClick={targetSubmit}>Submit</Button>
            </div>
          </div>
        </Box>
      </CardContent>

    </Card>
  )
}
