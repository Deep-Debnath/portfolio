import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import {
  TextField,
  Button,
  Alert,
  Stack,
  CircularProgress,
} from "@mui/material";
import FadeUp from "../assets/fadeup";

export default function Contact({ dark }: { dark: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateName = (value: string = name) => {
    const error = !value.trim()
      ? "Name is required"
      : value.trim().length < 3
        ? "Name must be at least 3 characters"
        : "";

    setErrors((prev) => ({ ...prev, name: error }));
    return !error;
  };

  const validateEmail = (value: string = email) => {
    const error = !value.trim()
      ? "Email is required"
      : !/^\S+@\S+\.\S+$/.test(value)
        ? "Enter a valid email address"
        : "";

    setErrors((prev) => ({ ...prev, email: error }));
    return !error;
  };

  const validateMessage = (value: string = message) => {
    const error = !value.trim()
      ? "Message is required"
      : value.trim().length < 10
        ? "Message must be at least 10 characters"
        : "";

    setErrors((prev) => ({ ...prev, message: error }));
    return !error;
  };

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    e?.preventDefault();

    if (!validateName()) return;
    if (!validateEmail()) return;
    if (!validateMessage()) return;

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_e1y9n2h",
        "template_vwow8iv",
        { name, email, message },
        "kUazJhZkZUaygtNsS",
      );

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});

      setTimeout(() => setSuccess(false), 4000);
    } catch {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeUp>
      {success && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <Alert severity="success" variant="filled">
            Message sent successfully!
          </Alert>
        </div>
      )}

      <div
        id="Contact"
        className="max-w-xl mx-auto px-4 pt-16 sm:pt-24 pb-10 rounded-3xl "
      >
        <h2
          className={`text-3xl sm:text-4xl text-center font-semibold transition duration-300 mb-3 ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          Get in touch
        </h2>
        <div
          className={`w-30 h-1 mb-3 relative left-[50%] -translate-x-1/2 transition duration-300 rounded-full ${
            dark ? "bg-gray-700" : "bg-gray-300"
          }`}
        />
        <p
          className={`text-sm text-center pb-2 transition duration-300 ${dark ? "text-gray-300" : "text-gray-700"}`}
        >
          Please contact me directly at{" "}
          <a
            className="font-bold hover:underline"
            href="mailto:deepdebnath7432@gmail.com"
          >
            deepdebnath7432@gmail.com{" "}
          </a>
          or through this form.
        </p>
        <Stack>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <TextField
              label="Name"
              value={name}
              onChange={(e) => {
                const v = e.target.value;
                setName(v);
                validateName(v);
              }}
              sx={{
                transition: "all .3s",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: dark ? "#444" : "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#888",
                  },
                },
              }}
              error={!!errors.name}
              helperText={errors.name || "Recommended: 3+ characters"}
              fullWidth
              InputLabelProps={{
                style: { color: dark ? "#bbb" : "#555" },
              }}
              FormHelperTextProps={{
                style: {
                  transition: "all .3s",
                  color: errors.name ? "#f44336" : dark ? "#aaa" : "#777",
                },
              }}
              InputProps={{
                style: {
                  color: dark ? "#fff" : "#000",
                  borderRadius: 8,
                  transition: "all .3s",
                },
              }}
            />

            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                const v = e.target.value;
                setEmail(v);
                validateEmail(v);
              }}
              error={!!errors.email}
              helperText={errors.email || "Use a valid email address"}
              fullWidth
              InputLabelProps={{
                style: { color: dark ? "#bbb" : "#555" },
              }}
              FormHelperTextProps={{
                style: {
                  transition: "all .3s",
                  color: errors.email ? "#f44336" : dark ? "#aaa" : "#777",
                },
              }}
              InputProps={{
                style: {
                  color: dark ? "#fff" : "#000",
                  borderRadius: 8,
                  transition: "all .3s",
                },
              }}
              sx={{
                transition: "all .3s",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: dark ? "#444" : "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#888",
                  },
                },
              }}
            />

            <TextField
              label="Message"
              multiline
              rows={5}
              value={message}
              onChange={(e) => {
                const v = e.target.value;
                setMessage(v);
                validateMessage(v);
              }}
              error={!!errors.message}
              helperText={errors.message || "Minimum 10 characters recommended"}
              fullWidth
              InputLabelProps={{
                style: { color: dark ? "#bbb" : "#555" },
              }}
              FormHelperTextProps={{
                style: {
                  transition: "all .3s",
                  color: errors.message ? "#f44336" : dark ? "#aaa" : "#777",
                },
              }}
              InputProps={{
                style: {
                  color: dark ? "#fff" : "#000",
                  borderRadius: 8,
                  transition: "all .3s",
                },
              }}
              sx={{
                transition: "all .3s",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: dark ? "#444" : "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#888",
                  },
                },
              }}
            />

            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              sx={{
                mx: "10px",
                borderRadius: "999px",
                padding: "10px",
                backgroundColor: dark ? "#fff" : "#171717",
                color: dark ? "#171717" : "#fff",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: dark ? "#f0f0f0" : "#111",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                },
              }}
            >
              {loading ? <CircularProgress size={22} /> : "Send Message"}
            </Button>
          </form>
        </Stack>
      </div>
    </FadeUp>
  );
}
