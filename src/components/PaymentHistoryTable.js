"use client";

import React, { useMemo, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { GET_PURCHASE_HISTORY_ROUTE } from "@/lib/constants";
import useSWR from "swr";
import { getFormattedDate } from "@/lib/utils";
import { useUserCookie } from "@/hooks/use-cookies";
import DownloadInvoiceButton from "./DownloadInvoiceButton";
import { Box, CircularProgress, Typography } from "@mui/material";

const PaymentHistoryTable = () => {
  const { user } = useUserCookie();

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    }).then((res) => res.json());

  const [page, setPage] = useState(1);

  const { data: history, isLoading } = useSWR(
    GET_PURCHASE_HISTORY_ROUTE(page),
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const rowsPerPage = history?.meta.per_page ?? 5;

  const pages = useMemo(() => {
    return history?.meta.total
      ? Math.ceil(history.meta.total / rowsPerPage)
      : 0;
  }, [history?.meta.total, rowsPerPage]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className="max-w-[calc(100vw-3rem)]">
      <TableContainer>
        <Table
          aria-label="Payment History"
          stickyHeader
          //   classNames={{
          //     th: "text-white bg-primary",
          //     wrapper: "bg-opacity-60",
          //   }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Plan Name</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Amount Paid</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Invoice</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={7}>
                  <Box display="flex" justifyContent="center" p={4}>
                    <CircularProgress color="success" />
                  </Box>
                </TableCell>
              </TableRow>
            )}

            {history && history.data.length === 0 && (
              <TableRow>
                <TableCell colSpan={7}>
                  <Typography variant="body2" align="center" p={4}>
                    No Purchase History
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {history &&
              history.data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.plan.name}</TableCell>
                  <TableCell>
                    {item.plan.duration + " " + item.plan.duration_unit}
                  </TableCell>
                  <TableCell>${item.amount_paid}</TableCell>
                  <TableCell>{getFormattedDate(item.start_date)}</TableCell>
                  <TableCell>{getFormattedDate(item.end_date)}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <DownloadInvoiceButton
                      purchaseId={item.id}
                      token={user.access_token}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {pages > 1 && (
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={history ? history.data.length : 0}
          rowsPerPage={rowsPerPage}
          page={page - 1}
          onPageChange={handleChangePage}
        />
      )}
    </Paper>
  );
};

export default PaymentHistoryTable;
