import * as React from "react";
import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import {
  AppSettingsIcon,
  ArtTrackIcon,
  CheckCirleIcon,
  FastCheckIcon,
  ReplaceIcon,
  SaveIcon,
} from "../Assests";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // background: "white",
  width: "100%",
  height: "100%",
  margin: "10px auto",
  [theme.breakpoints.up("md")]: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    width: "80%",
  },
}));

export default function Card(props) {
  const [values, setValues] = React.useState([
    {
      title: "Check Performance",
      description: "It predicts an overall performance score of webpage",
      icon: <CheckCirleIcon />,
      id: 1,
    },
    {
      title: "Check Accessibility",
      description:
        "Accessability checks the oppurtunities to improve accessibility of webpage",
      icon: <FastCheckIcon />,
      id: 2,
    },
    {
      title: "Check Performance",
      description:
        "Best practices tells you the moral practices to follow for a webpage on internet",
      icon: <ReplaceIcon />,
      id: 3,
    },
    {
      title: "Check Performance",
      description: "It predicts an overall performance score of webpage",
      icon: <ArtTrackIcon />,
      id: 4,
    },
    {
      title: "Check Performance",
      description: "It predicts an overall performance score of webpage",
      icon: <AppSettingsIcon />,
      id: 5,
    },
    {
      title: "Check Performance",
      description: "It predicts an overall performance score of webpage",
      icon: <SaveIcon />,
      id: 6,
    },
  ]);

  return (
    <Box
      sx={{
        my: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "var(--primary)",
          margin: { xs: "5px", md: "10px" },
          fontSize: { xs: "1.3rem", md: "2rem", sm: "2.125rem" },
        }}
      >
        See how a webpage performing in the Breeze web application
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "var(--secondary)",
          margin: { xs: "5px", md: "10px" },
          fontSize: { xs: "0.7rem", md: "1rem", sm: "1rem" },
        }}
      >
        Breeze asses overall performance,SEO score ,and issues in webpage
      </Typography>
      <Container>
        <Grid container sx={{ mt: "20px" }}>
          {values?.map((details, index) => (
            <Grid
              item
              xs={12}
              md={4}
              sm={4}
              className="p-2 p-lg-3 position-relative"
              key={details?.id}
            >
              <Grid
                sx={{
                  p: 2,
                  px: { xs: 2, md: 4, sm: 1 },
                  textAlign: "center",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  background: "white",
                  borderRadius: "10px",
                  height: "100%",
                }}
              >
                {details.icon}
                <Typography
                  sx={{
                    my: 2,
                    color: "var(--primary)",
                    fontSize: { xs: "15px", md: "15px", sm: "15px" },
                  }}
                >
                  {details?.title}
                </Typography>
                {/* <DividerIcon /> */}
                <Typography
                  sx={{
                    my: 2,

                    color: "var(--secondary)",
                    fontWeight: "700",
                    fontSize: { xs: "12px", md: "15px", sm: "12px" },

                    // textAlign: "center",
                  }}
                >
                  {details?.description}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
