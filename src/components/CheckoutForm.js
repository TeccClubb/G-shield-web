"use client";

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { PAYMENT_PROCESSING_PAGE_PATH } from "@/lib/pathnames";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { CityIcon, LocationDotIcon, StateIcon } from "@/icons";
import { cn, NAME_INVALID_ERROR_MESSAGE, NAME_REGEX } from "@/lib/utils";
import { useUserCookie } from "@/hooks/use-cookies";
import { useNotifications } from "@toolpad/core/useNotifications";
import { Button, Card, CardContent, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";

const PaymentForm = ({ planId, amount, billingAddress, className }) => {
  const notify = useNotifications();
  const { user } = useUserCookie();
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: (billingAddress && billingAddress.name) || "",
      address: (billingAddress && billingAddress.address) || "",
      city: (billingAddress && billingAddress.city) || "",
      state: (billingAddress && billingAddress.state) || "",
      postal_code: (billingAddress && billingAddress.postal_code) || "",
    },
  });

  useEffect(() => {
    if (errorMessage) {
      notify.show(`Payment failed, ${errorMessage}`, {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
  }, [errorMessage]);

  const submit = async (values) => {
    if (!stripe || !elements) {
      return;
    }

    try {
      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        // Show error to your customer
        setErrorMessage(submitError.message);
        return;
      }

      setLoading(true);
      setErrorMessage(undefined);

      const res = await axios
        .post("/api/create-payment-intent", {
          amount,
        })
        .then((res) => res.data);

      if (!res.clientSecret) {
        setErrorMessage("Client secret is missing");
        return;
      }

      const { error } = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret: res.clientSecret,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: values.name,
              email: user.email,
              address: {
                line1: values.address,
                city: values.city,
                state: values.state,
                postal_code: values.postal_code,
                country: values.country,
              },
            },
          },
          return_url: `${window.location.origin}/${PAYMENT_PROCESSING_PAGE_PATH}?planId=${planId}`,
        },
      });

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={cn("p-6", className)}>
      <CardContent>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
          <TextField
            variant="standard"
            label="Name"
            placeholder="Enter your name"
            fullWidth
            margin="dense"
            type="text"
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Image
                    src="/Log-icon/name.svg"
                    alt="Email Icon"
                    width={20}
                    height={15}
                  />
                </InputAdornment>
              ),
            }}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : ""}
            {...register("name", {
              required: { value: true, message: "Enter your name" },
              pattern: {
                value: NAME_REGEX,
                message: NAME_INVALID_ERROR_MESSAGE,
              },
              minLength: {
                value: 3,
                message: "Username must be at least 3 chars",
              },
            })}
          />

          <TextField
            variant="standard"
            label="Address"
            placeholder="Enter your address"
            fullWidth
            margin="dense"
            type="text"
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocationDotIcon className="text-default-500 pointer-events-none" />
                </InputAdornment>
              ),
            }}
            error={errors.address ? true : false}
            helperText={errors.address ? errors.address.message : ""}
            {...register("address", {
              required: { value: true, message: "Enter your address" },
              minLength: {
                value: 10,
                message: "Address must be at least 10 chars",
              },
            })}
          />

          <TextField
            variant="standard"
            label="City"
            placeholder="Enter your city"
            fullWidth
            margin="dense"
            type="text"
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CityIcon className="w-5 text-default-500 pointer-events-none" />
                </InputAdornment>
              ),
            }}
            error={errors.city ? true : false}
            helperText={errors.city ? errors.city.message : ""}
            {...register("city", {
              required: { value: true, message: "Enter your city" },
              minLength: {
                value: 2,
                message: "city must be at least 2 chars",
              },
            })}
          />

          <div className="flex items-start gap-4">
            <TextField
              variant="standard"
              label="State"
              placeholder="State"
              fullWidth
              margin="dense"
              type="text"
              color="success"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <StateIcon className="w-5 text-default-500 pointer-events-none" />
                  </InputAdornment>
                ),
              }}
              error={errors.state ? true : false}
              helperText={errors.state ? errors.state.message : ""}
              {...register("state", {
                required: { value: true, message: "Enter your state" },
                minLength: {
                  value: 2,
                  message: "state must be at least 2 chars",
                },
              })}
            />
            <TextField
              variant="standard"
              label="Postal Code"
              placeholder="Postal Code"
              fullWidth
              margin="dense"
              type="text"
              color="success"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LocationDotIcon className="text-default-500 pointer-events-none" />
                  </InputAdornment>
                ),
              }}
              error={errors.postal_code ? true : false}
              helperText={errors.postal_code ? errors.postal_code.message : ""}
              {...register("postal_code", {
                required: {
                  value: true,
                  message: "Enter your postal code",
                },
              })}
            />
          </div>

          <PaymentElement />

          {errorMessage && (
            <div className="mt-4 text-danger-500">{errorMessage}</div>
          )}

          <Button
            type="submit"
            color="success"
            variant="contained"
            loading={isLoading}
            loadingPosition="end"
            fullWidth
            disabled={!stripe || !elements || isLoading}
          >
            {isLoading ? "Processing..." : "Pay"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const CheckoutForm = ({ planId, amount, billingAddress, className }) => {
  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  const options = {
    mode: "payment",
    amount,
    currency: "usd",
    appearance: {
      variables: {
        colorPrimary: "#101418",
        colorBackground: "#ffffff00",
        borderRadius: "14px",
        colorText: "#101418",
        colorSuccess: "#2e7d32",
        colorDanger: "#d32f2f",
        colorWarning: "#ed6c02",
      },
    },
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm
        planId={planId}
        amount={amount}
        billingAddress={billingAddress}
        className={className}
      />
    </Elements>
  );
};

export default CheckoutForm;
