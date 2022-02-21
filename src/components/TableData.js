import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Grid,
  TablePagination,
  // TableFooter
} from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core";

//use this command to install appropriate dependency => npm install @material-ui/core --save

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableContainer: {
    margin: "20px auto",
    // borderRadius: 20,
    maxWidth: 800,
  },
  tableHead: {
    fontWeight: 800,
    fontSize: 18,
    // backgroundColor: "#C05D69",
    backgroundImage: "linear-gradient(to bottom, #C05D69, #E0E0E0)"
  },
  tableRow: {
    "&:nth-child(even)": {
      backgroundColor: "#E0E0E0",
    },
  },
  tableData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function TableData() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function createData(team, player, price, matches) {
    return { team, player, price, matches };
  }

  const rows = [
    createData("MI", "Rohit Sharma", 15, 200),
    createData("CSK", "MS Dhoni", 18, 180),
    createData("SRH", "David Warner", 11, 190),
    createData("RCB", "Virat Kohli", 14, 205),
    createData("MI", "Rohit Sharma", 15, 200),
    createData("CSK", "MS Dhoni", 18, 180),
    createData("SRH", "David Warner", 11, 190),
    createData("RCB", "Virat Kohli", 14, 205),
    createData("MI", "Rohit Sharma", 15, 200),
    createData("CSK", "MS Dhoni", 18, 180),
    createData("SRH", "David Warner", 11, 190),
    createData("RCB", "Virat Kohli", 14, 205),
    createData("MI", "Rohit Sharma", 15, 200),
    createData("CSK", "MS Dhoni", 18, 180),
    createData("SRH", "David Warner", 11, 190),
    createData("RCB", "Virat Kohli", 14, 205),
    createData("MI", "Rohit Sharma", 15, 200),
    createData("CSK", "MS Dhoni", 18, 180),
    createData("SRH", "David Warner", 11, 190),
    createData("RCB", "Virat Kohli", 14, 205),
    createData("MI", "Rohit Sharma", 15, 200),
    createData("CSK", "MS Dhoni", 18, 180),
    
  ];

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Paper >
    <TableContainer component={Paper} className={classes.tableContainer} sx={{maxHeight: 500}}>
      <Table className={classes.table} size='small' stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead} align="center">
              IPL Team
            </TableCell>
            <TableCell className={classes.tableHead} align="center">
              Player Name
            </TableCell>
            <TableCell className={classes.tableHead} align="center">
              Price
            </TableCell>
            <TableCell className={classes.tableHead} align="center">
              Matches Played
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, i) => {
            return (
              <TableRow key={i} className={classes.tableRow}>
                {/* by using src="." it will pick the 1st letter of the text provided for its avatar */}
                <TableCell className={classes.tableData} align="center">
                  <Grid container>
                  <Grid item sm={4}><Avatar alt={item.team} src="." /></Grid>
                  <Grid item sm={8}>{item.team}</Grid>
                  </Grid>
                </TableCell>
                <TableCell align="center">{item.player}</TableCell>
                <TableCell align="center">{item.price} Cr</TableCell>
                <TableCell align="center">{item.matches}</TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
     
    </TableContainer>
    
      
    </Paper>
  );
}

export default TableData;
