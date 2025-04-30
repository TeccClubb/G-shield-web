"use client";
import { useState } from "react";
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
<<<<<<< Updated upstream
=======
import ForgotPasswordModal from "@/components/forgetPassword";
>>>>>>> Stashed changes

export default function LoginButtonWithModal({ open, handleClose }) {
    const [tab, setTab] = useState(0);
    const handleTabChange = (_, newValue) => setTab(newValue);


    return (
<<<<<<< Updated upstream
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
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "green", // Tab indicator color
                    },
                }}
                sx={{
                    "& .MuiTab-root": {
                        color: "gray", // Default text color
                    },
                    "& .Mui-selected": {
                        color: "black",
                        fontWeight: "bold" // Selected tab text color
                    },
                }}
=======
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                sx={{ "& .MuiDialog-paper": { maxHeight: '98vh' } }}
>>>>>>> Stashed changes
            >
                <Tab label="Sign In" />
                <Tab label="Create an account" />
            </Tabs>


            <DialogContent sx={{ pt: 1, px: 10 }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    {tab === 0 ? "Welcome Back" : "Create Your Account"}
                </Typography>


                <TextField
                    variant="standard"
                    label="Email or Username"
                    fullWidth
                    margin="dense"
                    type="email"
                    defaultValue="jovanca@gmail.com"
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

                <TextField
                    variant="standard"
                    label="Password"
                    fullWidth
                    margin="dense"
                    type="password"
                    defaultValue="**********"
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

                <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                    <FormControlLabel
                        sx={{ color: "gray" }}
                        control={
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "green", // unchecked color
                                    '&.Mui-checked': {
                                        color: "green", // checked color
                                    }
                                }}
                            />
                        }
                        label="Remember Me"
                    />
                    <Button size="small" sx={{ color: "green" }}>
                        Forgot Password
                    </Button>
                </Box>

<<<<<<< Updated upstream

                <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    sx={{ borderRadius: "8px", textTransform: "none", mb: 1 }}
                >
                    Login
                </Button>

                <Divider sx={{ color: "gray" }}>Instant Login</Divider>
=======
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    centered
                    textColor="inherit"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "green", // Tab indicator color
                        },
                    }}
                    sx={{
                        "& .MuiTab-root": {
                            color: "gray", // Default text color
                        },
                        "& .Mui-selected": {
                            color: "black",
                            fontWeight: "bold" // Selected tab text color
                        },
                    }}
                >
                    <Tab label="Sign In" />
                    <Tab label="Create an account" />
                </Tabs>


                <DialogContent sx={{ pt: 1, px: 10 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        {tab === 0 ? "Welcome Back" : "Create Your Account"}
                    </Typography>


                    <TextField
                        variant="standard"
                        label="Email or Username"
                        fullWidth
                        margin="dense"
                        type="email"
                        defaultValue="jovanca@gmail.com"
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
>>>>>>> Stashed changes


<<<<<<< Updated upstream
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
                        color: "green", // set text color
                        borderColor: "gray", // optional: to match border color
                        '&:hover': {
                            borderColor: 'gray',
                            color: 'gray',
                        }
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
                        color: "green", // set text color
                        borderColor: "gray", // optional: to match border color
                        '&:hover': {
                            borderColor: 'gray',
                            color: 'gray',
                        }
                    }}
                >
                    Continue with Apple
                </Button>
            </DialogContent>
        </Dialog>
=======
                    <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                        <FormControlLabel
                            sx={{ color: "gray" }}
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: "green", // unchecked color
                                        '&.Mui-checked': {
                                            color: "green", // checked color
                                        }
                                    }}
                                />
                            }
                            label="Remember Me"
                        />
                        <Button size="small" onClick={() => {
                                handleClose();         // Close login modal
                                setForgetOpen(true);   // Open forget password modal
                            }} sx={{ color: "green" }}>
                            Forgot Password
                        </Button>
                    </Box>


                    <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        sx={{ borderRadius: "8px", textTransform: "none", mb: 1 }}
                    >
                        Login
                    </Button>

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
                            color: "green", // set text color
                            borderColor: "gray", // optional: to match border color
                            '&:hover': {
                                borderColor: 'gray',
                                color: 'gray',
                            }
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
                            color: "green", // set text color
                            borderColor: "gray", // optional: to match border color
                            '&:hover': {
                                borderColor: 'gray',
                                color: 'gray',
                            }
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

>>>>>>> Stashed changes
    );
}
