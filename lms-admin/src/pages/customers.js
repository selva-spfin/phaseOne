import { useCallback, useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon'
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon'
import PlusIcon from '@heroicons/react/24/solid/PlusIcon'
import CreateCustomer from 'src/components/createCustomer'
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material'
import { useSelection } from 'src/hooks/use-selection'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { CustomersTable } from 'src/sections/customer/customers-table'
import { CustomersSearch } from 'src/sections/customer/customers-search'
import { applyPagination } from 'src/utils/apply-pagination'
import { useCustomer } from 'src/hooks/use-customer'
import { useCustomerContext } from 'src/contexts/customers-context'
import { useSelector } from 'react-redux'

const Page = () => {
  const customerList = useSelector((state) => state.customer.customerList);
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [searchQuery, setSearchQuery] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const handleSearch = query => {
    setSearchQuery(query)
  }

  const useCustomers = (page, rowsPerPage) => {
    return useMemo(() => {
      if (customerList) {
        return applyPagination(customerList, page, rowsPerPage)
      }
    }, [page, rowsPerPage, customerList])
  }

  const useCustomerIds = customers => {
    return useMemo(() => {
      if (customerList) {
        return customers.map(customer => customer?.id)
      }
    }, [customers])
  }

  const handlePageChange = useCallback((event, value) => {
    setPage(value)
  }, [])

  const handleRowsPerPageChange = useCallback(event => {
    setRowsPerPage(event.target.value)
  }, [])

  var customers = useCustomers(page, rowsPerPage)
  var customersIds = useCustomerIds(customers)
  var customersSelection = useSelection(customersIds)

  return (
    <>
      <Head>
        <title>Customers | SP Finnacle</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row"
              justifyContent="space-between"
              spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Customers</Typography>
                <Stack alignItems="center"
                  direction="row"
                  spacing={1}>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  onClick={() => setOpenModal(!openModal)}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CustomersSearch data={customerList}
              onSearch={handleSearch} />
            <CreateCustomer
              open={openModal}
              onClose={() => setOpenModal(!openModal)}
              onSubmit={el => createCustomerData(el)}
            />
            <CustomersTable
              count={customerList?.length}
              items={customerList}
              onDeselectAll={customersSelection?.handleDeselectAll}
              onDeselectOne={customersSelection?.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection?.handleSelectAll}
              onSelectOne={customersSelection?.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection?.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  )
}

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default Page
