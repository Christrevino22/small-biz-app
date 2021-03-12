import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
// import DeleteIcon from '@material-ui/icons/Delete'
// import Chart from '../containers/Chart'
// import Total from '../containers/Total'
// import AddCar from '../containers/AddCar'

const HomeListing = (props) => {
  console.log("I HAVE PROPS", props.buisness);
  return (
    <Container maxWidth="lg" className="car-container">
      {/* <h4>Welcome, {props.user.username}</h4> */}

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        {}
        {/* <TableBody>
          {props.listings.map((listing, idx) => (
            <TableRow key={listing.id}>
              <TableCell component="th" scope="row">
                {listing.id}
              </TableCell>
              <TableCell>{listing["name"]}</TableCell>
              <TableCell>{listing[""]}</TableCell>
              <TableCell>{listing["cylinders"]}</TableCell>
              <TableCell>{listing["horsepower"]}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </Container>
  );
};

export default HomeListing;

{
  /* <TableCell>
    {/* <DeleteIcon
        // add onClick method here
        onClick={() => props.removeCar(idx)}
        className="icon text-red" /> */
}
