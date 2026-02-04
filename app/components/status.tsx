import { Circle, LocationOnOutlined } from "@mui/icons-material";
import { Badge, Stack, useMediaQuery, useTheme } from "@mui/material";

export default function Status({ dark }: { dark: boolean }) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(640));

  return (
    <div>
      {isSmall && (
        <Stack
          direction="row"
          spacing={2}
          className="flex w-full justify-center pt-4 text-sm text-zinc-400"
        >
          <Badge
            style={{
              color: dark ? "" : "#313131",
              borderColor: dark ? "" : "#bebebe",
              transition: "all .3s",
            }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-transparent"
          >
            <LocationOnOutlined
              fontSize="small"
              sx={{ color: dark ? "" : "#4a4a4a", transition: "all .3s" }}
            />
            <span>Kolkata, India</span>
          </Badge>

          <Badge
            style={{
              color: dark ? "" : "#313131",
              borderColor: dark ? "" : "#bebebe",
              transition: "all .3s",
            }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-transparent"
          >
            <Circle sx={{ fontSize: 12, color: "#22c55e" }} />
            <span>Open to work</span>
          </Badge>
        </Stack>
      )}
    </div>
  );
}
