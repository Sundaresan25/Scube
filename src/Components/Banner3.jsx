import * as React from "react";
import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";

import Space from "../Assests/workspace.svg";
import GButton from "./Global/Gbutton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Container = styled("div")(({ theme }) => ({
  display: "flex",

  margin: "10px auto",
  width: "80%",

  flexDirection: "row",
  alignItems: "center",

  "@media (max-width:780px)": {
    width: "90%",
  },
  "@media (max-width:600px)": {
    flexDirection: "column",
    alignItems: "center",
    // background: "white",
    width: "100%",
  },
}));

export default function Banner3(props) {
  // const icon = [<Card3Icon />, <Card2Icon />, <Card3Icon />];

  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      <Container>
        <Grid container sx={{ mt: "20px" }}>
          <Grid
            item
            xs={12}
            md={6}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="p-2 position-relative "
          >
            {" "}
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "var(--primary)",
                  margin: { xs: "5px", md: "10px" },
                  fontWeight: "500",
                  fontSize: { xs: "1.3rem", md: "2.125rem", sm: "1.8rem" },
                }}
              >
                Sign up to
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "var(--primary)",
                  margin: { xs: "5px", md: "10px" },
                  fontWeight: "700",
                  fontSize: { xs: "1.3rem", md: "2.125rem", sm: "1.8rem" },
                }}
              >
                The Breeze Web App
              </Typography>
              <Typography
                sx={{
                  color: "var(--secondary)",
                  margin: { xs: "5px", md: "10px" },
                  fontSize: { xs: "0.7rem", md: "1.5rem", sm: "1rem" },
                }}
              >
                Some of the features that make Breeze one of the best website
                toolkits available today
              </Typography>
              <GButton
                label={"Get Started"}
                color="white"
                background="#0962e8"
                icon={<ArrowForwardIcon />}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="p-2 position-relative"
          >
            <img src={Space} alt="multiple_image" className="img-fluid" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
