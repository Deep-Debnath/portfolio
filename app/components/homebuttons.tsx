import {
  ArrowForward,
  Download,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";

export default function Buttons({ dark }: { dark: boolean }) {
  return (
    <div className="pt-12 flex justify-center">
      <Stack
        direction={{ sm: "row", xs: "column" }}
        gap={2}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            borderRadius: "999px",
            px: 3,
            py: 1,
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
            bgcolor: dark ? "#f1f1f1" : "#202020",
            color: dark ? "#171717" : "#ffffff",
          }}
        >
          Get in touch
        </Button>

        {/* Projects */}
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            borderRadius: "999px",
            px: 3,
            py: 1,
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
            bgcolor: dark ? "#333333" : "darkolivegreen",
            color: dark ? "#ffffff" : "#fff",
          }}
        >
          View Projects
        </Button>

        <Button
          variant="outlined"
          startIcon={<Download />}
          sx={{
            borderRadius: "999px",
            px: 3,
            py: 1,
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
            borderColor: dark ? "#313131" : "#bebebe",
            color: dark ? "#ffffff" : "#171717",
          }}
        >
          Download CV
        </Button>

        <Stack direction="row" spacing={1}>
          {[GitHub, LinkedIn, Instagram].map((Icon, index) => (
            <IconButton
              key={index}
              aria-label={Icon.name}
              sx={{
                border: "1px solid",
                borderColor: dark ? "#313131" : "#bebebe",
                transition:"all .3s",
                "&:hover": {
                  backgroundColor: dark ? "#1f1f1f" : "#f5f5f5",
                  borderColor: dark ? "#555" : "#999",
                },
              }}
            >
              <Icon
                sx={{
                  color: dark ? "#cccccc" : "#313131",
                  fontSize: "1.9rem",
                }}
              />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
