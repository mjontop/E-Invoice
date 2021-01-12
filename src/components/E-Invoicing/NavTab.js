// /* eslint-disable */
// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import ItemLower from 'src/components/custom/E-Invoicing/ItemLower';
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper
//   }
// }));

// export default function SimpleTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   let info = [
//     {
//       title: 'Branchwise E-Invoices Summary',
//       summary: '',
//       color: '#f5df4d',
//       icon: 'ReceiptIcon'
//     },

//     {
//       title: 'Operational DashBoard',
//       summary: '',
//       color: '#90EE90',
//       icon: 'DashboardIcon'
//     },
//     {
//       title: 'Comparison Reports',
//       summary: '',
//       color: '#3f97cc',
//       icon: 'AssessmentIcon'
//     }
//   ];

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="white">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="simple tabs example"
//         >
//           <Tab label="Reports" {...a11yProps(0)} />
//           <Tab label="Manage EWB" {...a11yProps(1)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         <div style={{ display: 'flex',}}>
//           {info.map(d => (
//             <ItemLower data={d} />
//           ))}
//         </div>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Manage EWB
//       </TabPanel>
//     </div>
//   );
// }
