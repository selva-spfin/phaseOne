import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TablePagination,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 5,
    backgroundColor: '#FDFDFD',
  },
  paper: {
    padding: 5,
    textAlign: 'left',
  },
}))

const GridView = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {Object.entries(data)
          .filter(
            ([fkey, fvalue]) =>
              fkey !== 'Bank_Id' &&
              fkey !== 'Loan_Type_Id' &&
              fkey !== 'Loan_Process_Status_Id'
          )
          .map(([key, value]) => (
            <Grid item key={key} xs={12} md={3}>
              {console.log(key, value)}
              <div className={classes.paper}>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    margin: 5,
                    color: 'grey',
                  }}
                >{`${key.charAt(0).toUpperCase()}${key.slice(1)}`}</Typography>
                <Typography
                  style={{ fontSize: 14, margin: 5, color: '#2B547E' }}
                >
                  {Array.isArray(value)
                    ? value?.map((data, index) => (
                        <div key={index}>
                          <a
                            target="_blank"
                            href={`https://d6zg14cua4cuh.cloudfront.net/${
                              data.split('#')[1]
                            }`}
                          >
                            Document {index + 1}
                          </a>
                        </div>
                      ))
                    : value}
                </Typography>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

function Row(props) {
  const { row, editArea, setImagedata } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.firstName + ' ' + row.lastName}
        </TableCell>
        <TableCell>{row.companyName}</TableCell>
        <TableCell>{row.city}</TableCell>
        <TableCell>{row.mobileNo}</TableCell>
        <TableCell>{row.loanAmount}</TableCell>
        <TableCell>{row.salary}</TableCell>
        <TableCell>{row.loanProcessStatus}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              editArea(row)
              setImagedata([
                row?.payslips,
                row?.aadharCard,
                row?.panCard,
                row?.bankStatement,
              ])
            }}
          >
            <EditIcon style={{ height: 18, width: 18 }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                style={{ amrgin: 10 }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Details
              </Typography>
              <GridView data={row} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default function CollapsibleTable(props) {
  const {
    count = 0,
    leadData = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
    editArea,
    setImagedata,
  } = props
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Loan Amount</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {leadData && leadData.length > 0 ? (
            leadData?.map(row => (
              <Row
                editArea={editArea}
                setImagedata={setImagedata}
                key={row.id}
                row={row}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} align="center">
                <Typography
                  style={{ marginTop: 20, marginBottom: 20, color: 'grey' }}
                  variant="h6"
                >
                  No Leads available.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </TableContainer>
  )
}
