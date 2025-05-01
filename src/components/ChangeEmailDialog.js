"use client";

import React, { useState } from "react";
import { EMAIL_INVALID_ERROR_MESSAGE, EMAIL_REGEX } from "@/lib/utils";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { UPDATE_USER_INFO_ROUTE } from "@/lib/constants";
import { useUserCookie } from "@/hooks/use-cookies";
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
import Image from "next/image";
import { useNotifications } from "@toolpad/core/useNotifications";

const ChangeEmailDialog = () => {
  const [open, setOpen] = useState(false);
  const notify = useNotifications();
  const { user, setUserCookie } = useUserCookie();
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const submit = async (values) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios
        .post(
          UPDATE_USER_INFO_ROUTE,
          { email: values.email, name: user.name },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        setUserCookie({ ...user, email: values.email });
        notify.show(res.message, {
          severity: "success",
          autoHideDuration: 3000,
        });
        reset();
        setOpen(false);
      } else {
        notify.show(res.message, {
          severity: "error",
          autoHideDuration: 3000,
        });
        setError("root", { type: "manual", message: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Filed to change email";
      notify.show(errorMessage, {
        severity: "error",
        autoHideDuration: 3000,
      });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button color="success" variant="contained" onClick={() => setOpen(true)}>
        Update Email
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="p-6"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle className="flex flex-col gap-1 text-2xl font-semibold">
          Update Email Address
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(submit)}>
            {errors.root && (
              <Alert severity="error">{errors.root.message}</Alert>
            )}

            <TextField
              variant="standard"
              label="Email Address"
              fullWidth
              margin="dense"
              type="email"
              color="success"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      src="/Log-icon/email.svg"
                      alt="Email Icon"
                      width={20}
                      height={15}
                    />
                  </InputAdornment>
                ),
              }}
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : ""}
              {...register("email", {
                required: { value: true, message: "Enter email address" },
                pattern: {
                  value: EMAIL_REGEX,
                  message: EMAIL_INVALID_ERROR_MESSAGE,
                },
              })}
            />
            <DialogActions>
              <Button
                loading={isLoading}
                loadingPosition="end"
                fullWidth
                type="submit"
                size="large"
                color="success"
                variant="contained"
              >
                Update
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChangeEmailDialog;
