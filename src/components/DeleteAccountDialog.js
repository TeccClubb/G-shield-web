"use client";

import React, { useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";

import axios, { AxiosError } from "axios";
import { DELETE_USER_ACCOUNT_ROUTE } from "@/lib/constants";
import { useUserCookie } from "@/hooks/use-cookies";
import { useRouter } from "next/navigation";
import { useNotifications } from "@toolpad/core/useNotifications";

const DeleteAccountDialog = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const notify = useNotifications();
  const { user, removeUserCookie } = useUserCookie();

  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDeleteAccount = async () => {
    try {
      setErrorMessage("");
      setLoading(true);
      const res = await axios
        .delete(DELETE_USER_ACCOUNT_ROUTE, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => res.data);
      if (res.status) {
        removeUserCookie();
        notify.show(res.message, {
          severity: "success",
          autoHideDuration: 3000,
        });
        router.refresh();
      } else {
        setErrorMessage(res.message);
        notify.show(res.message, {
          severity: "error",
          autoHideDuration: 3000,
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Filed to change name";
      setErrorMessage(errorMessage);
      notify.show(errorMessage, {
        severity: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button color="error" variant="contained" onClick={() => setOpen(true)}>
        Delete Account
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} className="p-4">
        <DialogTitle className="flex flex-col gap-1 text-2xl font-semibold">
          Delete Account
        </DialogTitle>
        <DialogContent>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

          <p>
            Are you sure you want to delete your account? This action cannot be
            undone, and all your data will be permanently removed.
          </p>
        </DialogContent>
        <DialogActions>
          <Button
            loading={isLoading}
            loadingPosition="end"
            size="large"
            color="error"
            variant="contained"
            onClick={handleDeleteAccount}
          >
            Delete
          </Button>
          <Button
            color=""
            size="large"
            variant="outlined"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAccountDialog;
