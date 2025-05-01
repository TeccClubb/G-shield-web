"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    Tabs,
    Tab,
    TextField,
    Box,
    Typography,
    Checkbox,
    FormControlLabel,
    Divider,
    IconButton,
    InputAdornment,
    Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ForgotPasswordModal from "@/components/forgetPassword";

export default function LoginButtonWithModal({ open, handleClose }) {
    const [tab, setTab] = useState(0);
    const handleTabChange = (_, newValue) => setTab(newValue);
    const [OpenForget, setForgetOpen] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (tab === 0) {
            // Sign In
            const { email, password } = data;
            console.log("Sign In Data:", { email, password });
        } else {
            // Create Account
            console.log("Create Account Data:", data);
        }
    };
    

    return (
          <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                sx={{ "& .MuiDialog-paper": { maxHeight: '98vh' } }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" px={2} pt={2}>
                    <Image
                        src="/Log-icon/G-VPN-removebg-preview 1.png"
                        alt="GShield Logo"
                        width={40}
                        height={40}
                    />
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    centered
                    textColor="inherit"
                    TabIndicatorProps={{ style: { backgroundColor: "green" } }}
                    sx={{
                        "& .MuiTab-root": { color: "gray" },
                        "& .Mui-selected": { color: "black", fontWeight: "bold" },
                    }}
                >
                    <Tab label="Sign In" />
                    <Tab label="Create an account" />
                </Tabs>

                <DialogContent sx={{ pt: 1, px: 10 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        {tab === 0 ? "Welcome Back" : "Create Your Account"}
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {tab !== 0 && (
                            <Controller
                                name="username"
                                control={control}
                                rules={{ required: "Username is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        variant="standard"
                                        label="Username"
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.username}
                                        helperText={errors.username?.message}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Image
                                                        src="/Log-icon/account-grey-icon.png"
                                                        alt="User Icon"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        )}

                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: "Email or Username is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    label="Email or Username"
                                    fullWidth
                                    margin="dense"
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
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
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: "Password is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    label="Password"
                                    fullWidth
                                    margin="dense"
                                    type="password"
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
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
                                />
                            )}
                        />

                        <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                            <FormControlLabel
                                sx={{ color: "gray" }}
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: "green",
                                            '&.Mui-checked': { color: "green" }
                                        }}
                                    />
                                }
                                label="Remember Me"
                            />
                            <Button size="small" sx={{ color: "green" }}
                                onClick={() => {
                                    handleClose();
                                    setForgetOpen(true);
                                }}
                            >
                                Forgot Password
                            </Button>
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            fullWidth
                            sx={{ borderRadius: "8px", textTransform: "none", mb: 1 }}
                        >


                            
                            Login
                        </Button>
                    </form>

                    <Divider sx={{ color: "gray" }}>Instant Login</Divider>

                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={
                            <Image
                                src="/Log-icon/Google__G__Logo (1) 1.svg"
                                alt="Google Logo"
                                width={20}
                                height={20}
                            />
                        }
                        sx={{
                            mt: 1,
                            borderRadius: "8px",
                            textTransform: "none",
                            color: "green",
                            borderColor: "gray",
                            '&:hover': { borderColor: 'gray', color: 'gray' },
                        }}
                    >
                        Continue with Google
                    </Button>

                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={
                            <Image
                                src="/Log-icon/Apple.svg"
                                alt="Apple Logo"
                                width={20}
                                height={20}
                            />
                        }
                        sx={{
                            mt: 1,
                            borderRadius: "8px",
                            textTransform: "none",
                            color: "green",
                            borderColor: "gray",
                            '&:hover': { borderColor: 'gray', color: 'gray' },
                        }}
                    >
                        Continue with Apple
                    </Button>
                </DialogContent>
            </Dialog>

            <ForgotPasswordModal
                open={OpenForget}
                onClose={() => setForgetOpen(false)}
            />
        </>
    );
}
