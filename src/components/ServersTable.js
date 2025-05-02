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
import { Box, CircularProgress, Typography } from "@mui/material";
import { GET_SERVERS_ROUTE } from "@/lib/constants";
import useSWR from "swr";
import { CheckedIcon } from "@/icons";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllServersSection = () => {
  const [page, setPage] = useState(1);

  const { data: servers, isLoading } = useSWR(
    GET_SERVERS_ROUTE(page),
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const rowsPerPage = servers?.meta.per_page ?? 10;

  const pages = useMemo(() => {
    return servers?.meta.total
      ? Math.ceil(servers.meta.total / rowsPerPage)
      : 0;
  }, [servers?.meta.total, rowsPerPage]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage + 1);
  };

  return (
    <Paper
      className="max-w-[calc(100vw-3rem)] w-full z-[1]"
      sx={{ backgroundColor: "#FFFFFF99" }}
    >
      <TableContainer className="rounded-2xl">
        <Table aria-label="VPN Servers">
          <TableHead className="bg-green-600">
            <TableRow>
              <TableCell
                colSpan={2}
                sx={{ color: "white", fontWeight: 700, fontSize: 14 }}
              >
                Country
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 14 }}>
                City
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 14 }}>
                AdBlock
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 14 }}>
                Threat Block
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 14 }}>
                Status
              </TableCell>
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

            {servers && servers.data.length === 0 && (
              <TableRow>
                <TableCell colSpan={7}>
                  <Typography variant="body2" align="center" p={4}>
                    No Servers Found
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {servers &&
              servers.data.map((item) => (
                <TableRow key={item.image_url} className="capitalize">
                  <TableCell>
                    <Image
                      className="w-9 h-7 rounded-md"
                      src={item.image_url}
                      alt="flag not found"
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL={item.image_url}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.sub_server.name}</TableCell>
                  <TableCell>
                    <CheckedIcon />
                  </TableCell>
                  <TableCell>
                    <CheckedIcon />
                  </TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {pages > 1 && (
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={servers ? servers.meta.total : 0}
          rowsPerPage={rowsPerPage}
          page={page - 1}
          onPageChange={handleChangePage}
        />
      )}
    </Paper>
  );
};

export default AllServersSection;
