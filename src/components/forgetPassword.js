import React, { useState } from "react";
import { Modal, TextField, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";

const ForgotPasswordModal = ({ open, onClose }) => {
  const [email, setEmail] = useState("");

  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white text-center w-full max-w-lg mx-auto p-6 rounded-md shadow-lg relative">
          {/* Header: Logo left, Close right */}
          <div className="flex justify-between items-center mb-6">
          <img src="/shieldVpnLogo.png" alt="Logo" className="w-10 h-10 mr-2" />

            <IconButton onClick={onClose} className="text-gray-500">
              <CloseIcon />
            </IconButton>
          </div>

          {/* Title */}
          <h2 className="text-neutral-800 text-3xl text-  font-medium font-['Poppins'] leading-9">
            Forgot Password ?
          </h2>

          {/* Input */}
          <div className="px-15">

          <div className="mb-4 mt-6">
            <TextField
              fullWidth
              label="Email or Username"
              variant="standard"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: (
                  <EmailIcon className="text-gray-400 mr-2" fontSize="small" />
                ),
              }}
            />
          </div>

          {/* Submit Button */}
          <Button
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#188c41", textTransform: "none",marginTop: "10px" }}
          >
            Submit  
          </Button>

          {/* Back to login */}
          <div className="text-center mt-5">
            <button
              onClick={onClose}
              className=" text-green-700 text-base font-bold font-['DM_Sans'] leading-tight"
            >
              Back to login?
            </button>
          </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
