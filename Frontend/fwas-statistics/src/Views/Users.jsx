import CountCard from "../components/CountCard";
import Grid from '@mui/material/Grid2';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import UserCharts from '../components/Charts/UserCharts';
import Button from '@mui/material/Button';

function Users() {
    const [user,setData] = useState([{}])
      useEffect(()=>{
        get_user_dashboard()
      },[])
      async function get_user_dashboard(){
        let api = await fetch("http://localhost:5000/user_dashboard")
        let user_json = await api.json()
        setData(user_json) 
      }
      
    return (
        <div className="container1">
            <br />
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 2 }}>
                    <CountCard class1="cardUser" count={user.total_users} title="Total Users" />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <CountCard class1="cardUser" count={user.active_users} title="Active Users" />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <CountCard class1="cardUser" count={user.inactive_users} title="Inactive Users" />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <CountCard class1="cardUser" count={user.agencies} title="Agencies" />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <CountCard class1="cardUser" count={user.job_titles} title="Job Titles" />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <CountCard class1="cardUser" count={user.phone_providers} title="Phone Providers" />
                </Grid>
            </Grid>
            <br />
            <UserCharts />

        </div>
    );
}
export default Users