import PropTypes from 'prop-types'
import { format } from 'date-fns'
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import { Scrollbar } from 'src/components/scrollbar'
import { getInitials } from 'src/utils/get-initials'

export const CustomersTable = props => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props


  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  /> */}
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Signed Up</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(customer => {
                const isSelected = selected.includes(customer.id)
                const createdAt = "format(customer?.createdAt, 'dd/MM/yyyy')"

                return (
                  <TableRow hover
key={customer?.id}
selected={isSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={event => {
                          if (event.target.checked) {
                            onSelectOne?.(customer?.id)
                          } else {
                            onDeselectOne?.(customer?.id)
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack alignItems="center"
direction="row"
spacing={2}>
                        <Avatar src={customer.avatar}>
                          {getInitials(customer?.firstName)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {customer?.lastName}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{customer?.companyName}</TableCell>
                    <TableCell>{customer?.mobileNo}</TableCell>
                    <TableCell>{customer?.salary}</TableCell>
                    <TableCell>{customer?.AAdhar}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  )
}

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
}
