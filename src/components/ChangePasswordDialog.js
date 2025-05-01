"use client";

import React, { useState } from "react";
import { PASSWORD_INVALID_ERROR_MESSAGE, PASSWORD_REGEX } from "@/lib/utils";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { UPDATE_USER_PASSWORD_ROUTE } from "@/lib/constants";
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

const ChangePasswordDialog = () => {
  const [open, setOpen] = useState(false);
  const notify = useNotifications();
  const { user } = useUserCookie();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
    reset,
  } = useForm({
    defaultValues: {
      old_password: "",
      password: "",
      confirm_password: "",
    },
  });

  const submit = async (values) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios
        .post(
          UPDATE_USER_PASSWORD_ROUTE,
          { old_password: values.old_password, new_password: values.password },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        notify.show(res.message, {
          severity: "success",
          autoHideDuration: 3000,
        });
        setOpen(false);
      } else {
        notify.show(res.message, {
          severity: "error",
          autoHideDuration: 3000,
        });
        setErrorMessage(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Filed to change password";
      notify.show(errorMessage, {
        severity: "error",
        autoHideDuration: 3000,
      });
      setErrorMessage(errorMessage);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <>
      <Button color="success" variant="contained" onClick={() => setOpen(true)}>
        Update Password
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="p-6"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle className="flex flex-col gap-1 text-2xl font-semibold">
          Update Password
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-y-4"
          >
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

            <TextField
              variant="standard"
              label="Old Password"
              placeholder="Type old password"
              color="success"
              fullWidth
              margin="dense"
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      src="/Log-icon/privatePassword.svg"
                      alt="Password Icon"
                      width={20}
                      height={15}
                    />
                  </InputAdornment>
                ),
              }}
              error={errors.old_password ? true : false}
              helperText={
                errors.old_password ? errors.old_password.message : ""
              }
              {...register("old_password", {
                required: { value: true, message: "Type old password" },
                //   pattern: {
                //     value: PASSWORD_REGEX,
                //     message: PASSWORD_INVALID_ERROR_MESSAGE,
                //   },
              })}
            />

            <TextField
              variant="standard"
              label="Change Password"
              placeholder="Type new password"
              color="success"
              fullWidth
              margin="dense"
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      src="/Log-icon/privatePassword.svg"
                      alt="Password Icon"
                      width={20}
                      height={15}
                    />
                  </InputAdornment>
                ),
              }}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : ""}
              {...register("password", {
                required: { value: true, message: "Type new password" },
                pattern: {
                  value: PASSWORD_REGEX,
                  message: PASSWORD_INVALID_ERROR_MESSAGE,
                },
                validate: (value) => {
                  const old_password = getValues("old_password");
                  if (value === old_password)
                    return "New password same as old password";
                  return true;
                },
              })}
            />

            <TextField
              variant="standard"
              label="Confirm Password"
              placeholder="Confirm password"
              color="success"
              fullWidth
              margin="dense"
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      src="/Log-icon/privatePassword.svg"
                      alt="Password Icon"
                      width={20}
                      height={15}
                    />
                  </InputAdornment>
                ),
              }}
              error={errors.confirm_password ? true : false}
              helperText={
                errors.confirm_password ? errors.confirm_password.message : ""
              }
              {...register("confirm_password", {
                required: {
                  value: true,
                  message: "Please confirm the password",
                },
                validate: (value) => {
                  const password = getValues("password");
                  if (value !== password) return "Password do not match";
                  return true;
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

export default ChangePasswordDialog;
