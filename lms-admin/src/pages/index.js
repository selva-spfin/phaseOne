import Head from 'next/head'
import { subDays, subHours } from 'date-fns'
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { OverviewBudget } from 'src/sections/overview/overview-budget'
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders'
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products'
import { OverviewSales } from 'src/sections/overview/overview-sales'
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress'
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers'
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit'
import { OverviewTraffic } from 'src/sections/overview/overview-traffic'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { getLeadApi } from '../action/apiActions'


const now = new Date()

const Page = () => {

  const tragetVal = useSelector(state => state.overView.setTarget)
  const profileData = useSelector(state => state.auth.authData)

  const [loading, setLoading] = useState(false)
  const [leadCount, setLeadCount] = useState("")

  const [targetComletion, settargetCompletion] = useState("")
  const [leadStausMonth, setLeadStatus] = useState([])
  const [leadCountByMonth, setLeadCountByMonth] = useState([])

  useEffect(() => {

    getLeadApi(
      profileData[0]?.Profile_Status_Id,
      profileData[0]?.User_Id,
      profileData[0]?.User_Role_Id,
      setLoading
    ).then(res => {
      if (res?.statusCode === 200)
        var sum = 0;
      var leadProgress = res?.data ? res.data.filter(filData => filData?.Lead_Status === 1) : []
      var leadApproved = res?.data ? res.data.filter(filData => filData?.Lead_Status === 2) :[]
      var leadDecline = res?.data ? res.data.filter(filData => filData?.Lead_Status === 3): []

      var leadCount = leadProgress?.length
      var leadStatus = [leadApproved?.length, leadProgress?.length, leadDecline?.length]

      setLeadStatus(leadStatus)

      var leadDataAmount = res?.data ? res.data.filter(filData => filData?.Lead_Status === 1).map(data => {

        sum = Number(sum) + Number(data?.Loan_Amount)
        return sum
      }) : 0


      if (leadDataAmount.length > 0) {
        try {
          var completeTarget = (tragetVal / sum) / 10
          settargetCompletion(completeTarget?.toFixed(2))
          setLeadCount(leadCount)
        } catch (err) {
          settargetCompletion(0)
          setLeadCount(leadCount)
        }


      }
      let monthlyData = [];
      if(res?.data){
        monthlyData = getDataByMonths(res?.data) || [];
        monthlyData.length > 0 && setLeadCountByMonth(monthlyData);
      }
    })

  }, [])

  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

  const filterDataByMonth = (month, data=[]) => {
    return data?.filter(item => Number(item.Generated_On.split("/")[1]) === Number(month));
  };

  const getDataByMonths = (data) => {
    const monthlyData = [];
    for (let month = 1; month <= 12; month++) {
      const filteredData = filterDataByMonth(month, data);
      monthlyData.push(filteredData?.length);
    }

    return monthlyData;
  };




  return (
    <>
      <Head>
        <title>Overview</title>
      </Head>
      <Box
        component="main"
        style={{backgroundColor:'#EFEFEF'}}
        sx={{
          flexGrow: 1,
          py: 12,
        }}
      >
        <Container maxWidth="xl">
          <Grid container
            spacing={3}>
            <Grid xs={12}
              sm={9}
              lg={4}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: '100%' }}
                value={`₹ ${tragetVal || 0}`}
              />
            </Grid>
            <Grid xs={12}
              sm={6}
              lg={4}>
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value={leadCount}
              />
            </Grid>
            <Grid xs={12}
              sm={6}
              lg={4}>
              <OverviewTasksProgress sx={{ height: '100%' }}
                value={targetComletion} />
            </Grid>

            <Grid xs={12}
              lg={8}>
              <OverviewSales
                chartSeries={[
                  {
                    name: 'This year',
                    data: leadCountByMonth || [],
                  },
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid xs={12}
              md={6}
              lg={4}>
              <OverviewTraffic
                chartSeries={leadStausMonth}
                labels={['Approved', 'Progress', 'Decline']}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}


Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default Page
