"use client";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Import eye icon
import { IconButton } from '@mui/material'; // Import IconButton for clickable icon

import { useRouter } from 'next/navigation';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'fullName', label: 'Full Name', minWidth: 170 },
  { id: 'email', label: 'Email ID', minWidth: 170 },
  { id: 'age', label: 'Age', minWidth: 50, align: 'right' },
  { id: 'applicationStatus', label: 'Application Status', minWidth: 170 },
  { id: 'mlScore', label: 'ML Score', minWidth: 100, align: 'right' },
  { id: 'view', label: 'View', minWidth: 50 },
];

function createData(id, fullName, email, age, applicationStatus, mlScore) {
  return { id, fullName, email, age, applicationStatus, mlScore };
}

// Sample data for rows
const rows = [
  createData(1, 'John Doe', 'john@example.com', 28, 'Approved', 0.85),
  createData(2, 'Jane Smith', 'jane@example.com', 34, 'Pending', 0.75),
  createData(3, 'Alice Johnson', 'alice@example.com', 30, 'Rejected', 0.60),
  createData(4, 'Bob Brown', 'bob@example.com', 45, 'Approved', 0.90),
  createData(5, 'Charlie Davis', 'charlie@example.com', 23, 'Pending', 0.70),
  createData(6, 'Emily Wilson', 'emily@example.com', 29, 'Approved', 0.95),
  createData(7, 'Daniel Lee', 'daniel@example.com', 32, 'Rejected', 0.50),
  createData(8, 'Sophia Miller', 'sophia@example.com', 26, 'Pending', 0.80),
  createData(9, 'James Wilson', 'james@example.com', 40, 'Approved', 0.88),
  createData(10, 'Liam Brown', 'liam@example.com', 35, 'Pending', 0.72),
];

export default function StickyHeadTable() {
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewClick = (id) => {
    // Add logic to handle view click
    alert(`View clicked for applicant with ID: ${id}`);
     router.push(`/admin/Applications/${id}`);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'view' ? (
                            <IconButton onClick={() => handleViewClick(row.id)}>
                              <VisibilityIcon />
                            </IconButton>
                          ) : (
                            value
                          )}
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
