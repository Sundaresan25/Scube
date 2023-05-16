import { Typography, styled } from "@mui/material";

// bread crumb
const Container = styled("div")(({ theme }) => ({
  width: "90%",
  margin: "10px auto",
  [theme.breakpoints.up("md")]: {
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "80%",
  },
}));
export default function BreadCrumb() {
  return (
    <>
      <Container>
        <Typography
          sx={{
            color: "#16077c",
            fontSize: { xs: "0.7rem", md: "1.5rem", sm: "1rem" },
          }}
        >
          Breeze / Product / Page Audit
        </Typography>
      </Container>
    </>
  );
}
