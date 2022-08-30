import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "Origin City", label: "Origin City", minWidth: 170 },
  { id: "Origin State", label: "Origin State", minWidth: 100 },
  {
    id: "Destination City",
    label: "Destination City",
    minWidth: 170,
  },
  {
    id: "Destination State",
    label: "Destination State",
    minWidth: 170,
  },
  {
    id: "EquipmentType",
    label: "EquipmentType",
    minWidth: 170,
  },
  {
    id: "Revenue",
    label: "Revenue",
    minWidth: 170,
  },
  {
    id: "Company",
    label: "Company",
    minWidth: 170,
  },
  {
    id: "DaysToPay",
    label: "DaysToPay",
    minWidth: 170,
  },
  {
    id: "Edit",
    label: "Edit",
    minWidth: 170,
  },
];

function createData(
  originCity,
  originState,
  destinationCity,
  destinationState,
  equipmentType,
  revenue,
  company,
  daysToPay
) {
  return {
    originCity,
    originState,
    destinationCity,
    destinationState,
    equipmentType,
    revenue,
    company,
    daysToPay,
  };
}

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = props.rows.map((row) => {
    console.log(row);
    const {
      originCity,
      originState,
      destinationCity,
      destinationState,
      equipmentType,
      revenue,
      company,
      daysToPay,
    } = row;
    return createData(
      originCity,
      originState,
      destinationCity,
      destinationState,
      equipmentType,
      revenue,
      company,
      daysToPay
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
