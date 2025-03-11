import React, { useState, useRef } from "react";
import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "./firebaseConfig";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [user, setUser] = useState(null);

  const sendOTP = async () => {
    try {
      if (!phone || phone.length < 10) {
        alert("Enter a valid phone number with country code.");
        return;
      }

      // ✅ Ensure reCAPTCHA is initialized only once
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible", // No manual site key needed
            callback: (response) => {
              console.log("reCAPTCHA verified:", response);
            },
            "expired-callback": () => {
              alert("reCAPTCHA expired. Please try again.");
            },
          }
        );
      }

      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      setConfirmationResult(confirmation);
      alert("OTP sent!");
    } catch (error) {
      console.error("Error during signInWithPhoneNumber:", error);
      alert(error.message);
    }
  };

  const verifyOTP = async () => {
    try {
      const result = await confirmationResult.confirm(otp);
      setUser(result.user);
      alert("Phone number verified successfully!");
    } catch (error) {
      console.error("Error during OTP verification:", error);
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!user ? (
        <>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={sendOTP}>Send otp</button>

          <div id="recaptcha-container"></div>

          {confirmationResult && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={verifyOTP}>Verify Otp</button>
            </>
          )}
        </>
      ) : (
        <h3>Welcome, {user.phoneNumber}!</h3>
      )}
    </div>
  );
};

export default PhoneAuth;
