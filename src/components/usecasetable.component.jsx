import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "./usecasetable.style";
import { virement } from "./virements";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
export default function UseCaseTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [data, setData] = React.useState(virement);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchBarContainer}>
        <TextField
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Recherche par numéro de compte.."
          className={classes.searchBar}
        />
      </div>
      <Paper>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Numero Compte</TableCell>
                <TableCell>CIN</TableCell>
                <TableCell>Code agence</TableCell>
                <TableCell>Montant chiffre</TableCell>
                <TableCell>Montant lettre</TableCell>
                <TableCell>Nom client</TableCell>
                <TableCell>Beneficiaire</TableCell>
                <TableCell>Statut</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {Object.keys(row).map((column) => {
                        if (
                          column !== "rouge" &&
                          column !== "codeAgence" &&
                          column !== "statut"
                        ) {
                          const value = row[column];

                          return (
                            <TableCell
                              key={column}
                              className={
                                row.rouge && row.rouge.includes(column)
                                  ? classes.tableCellRed
                                  : classes.tableCellGreen
                              }
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        } else if (
                          column === "codeAgence" ||
                          column === "statut"
                        ) {
                          const value =
                            column === "codeAgence"
                              ? row.numeroCompte.split(" ").join("").slice(0, 4)
                              : row[column];

                          return (
                            <TableCell key={column}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 30, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
