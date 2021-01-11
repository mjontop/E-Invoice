import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  //   SvgIcon,
  //   Tab,
  //   Tabs,
  //   AppBar,
  makeStyles
  //   Typography,
  //   Box,
  //   Grid,
  //   TextField,
  //   DialogContent,
  //   DialogTitle,
  //   Dialog,
  //   DialogActions
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bg_grey: {
    marginTop: '1%',
    backgroundColor: '#23C4ED',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  bg_light: {
    backgroundColor: '#23C4ED'
  }
}));

const GenerateIRN = () => {
  const classes = useStyles();

  return (
    <>
      <div className="row">
        <div className="col-6 ">
          <div className="p-2">
            <Link to="/" className="">
              Home
            </Link>
            <span>/ view all invoices</span>
          </div>
        </div>
        <div className="col-6" style={{ right: '1%' }}>
          <Button color="primary">Primary</Button>
        </div>
      </div>
      <div className={`${classes.bg_grey} row`}>
        <div className="col">
          <div className="text-center">
            <span>All Documents</span>
            <br />
            <b>0</b>
          </div>
        </div>

        <div className="col">
          <div className="text-center">
            <span>IRN Generated</span>
            <br />
            <b>0</b>
          </div>
        </div>
        <div className="col">
          <div className="text-center">
            <span>IRN Failed</span>
            <br />
            <b>0</b>
          </div>
        </div>
        <div className="col">
          <div className="text-center">
            <span>IRN Not Generated</span>
            <br />
            <b>0</b>
          </div>
        </div>
        <div className="col">
          <div className="text-center">
            <span>IRN Cancelled</span>
            <br />
            <b>0</b>
          </div>
        </div>
      </div>
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-12 col-md-7">
            <b>Select invoice to generate IRN </b>
            <span>in order to take any action</span>
          </div>
          <div className="float-left col">
            <Button className="mx-1" color="primary">
              Download
            </Button>
            <Button className="mx-1" variant="contained" color="primary">
              Print
            </Button>
            <Button
              className="mx-1 bg-danger"
              variant="contained"
              color="secondary"
            >
              Generate IRN
            </Button>
          </div>
        </div>
      </div>
      <div className="p-2 mt-4 ">
        <table className="table">
          <thead className="thead-dark bg-primary text-white rounded">
            <tr>
              <th scope="col">
                <input type="checkbox" name="" id="" />
              </th>
              <th scope="col">Invoice ID</th>
              <th scope="col">IRN Status</th>
              <th scope="col">Eway Bill Number</th>
              <th scope="col">Invoice Date</th>
              <th scope="col">Doc Type</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Custumer GSTIN</th>
              <th scope="col">Taxable Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="checkbox" name="" id="" />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" name="" id="" />
              </th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" name="" id="" />
              </th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" name="" id="" />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" name="" id="" />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" name="" id="" />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" name="" id="" />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" name="" id="" />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GenerateIRN;
