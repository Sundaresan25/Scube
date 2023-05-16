import * as React from "react";
import { Box, styled } from "@mui/system";
import {
  Grid,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";

import { Logo } from "../Assests";
import Chromeweb from "../Assests/web.png";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // background: "white",
  width: "100%",
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

const MyGrid = styled(Grid)({
  width: "25%", // for 4 columns, set width to 25%
  "@media (max-width: 960px)": {
    width: "25%", // for 3 columns, set width to 33.33%
  },
  "@media (max-width: 780px)": {
    width: "50%", // for 2 columns, set width to 50%
  },
  "@media (max-width: 400px)": {
    width: "100%", // for 1 column, set width to 100%
  },
});

const LogoContainer = styled("div")({
  padding: "30px 10px",
  "& svg": {
    width: "15rem",
  },

  "@media (max-width: 780px)": {
    padding: "10px 10px",
    "& svg": {
      width: "10rem",
    },
  },
  "@media (max-width: 600px)": {
    padding: "0px 10px",
    "& svg": {
      width: "5rem",
    },
  },
});

const ContainerWrap = styled(Grid)(({ theme }) => ({
  // background: "white",
  width: "95%",
  margin: "10px auto",

  justifyContent: "between",
  [theme.breakpoints.up("md")]: {
    width: "90%",
    display: "flex",
  },
  [theme.breakpoints.up("sm")]: {
    width: "80%",
    display: "flex",
  },
}));

export default function Footer() {
  const data = [
    {
      head: "Features",
      list: [
        "Cookie & Cache",
        "Responsive Layout",
        "Take Screenshot",
        "Live Edit",
        "SEO Panel",
        "What is",
        "Media",
      ],

      id: 0,
    },
    {
      head: "",
      list: [
        "Environment",
        "Browser Support",
        "Tech Stack",
        "Screenshot Audit",
        "Team Sharing",
        "Page Manager",
        "Checklist",
      ],

      id: 1,
    },
    {
      head: "Company",
      list: ["About Us", "Careers", "Contact Us", "Blog"],

      id: 2,
    },
  ];
  return (
    <Box sx={{ background: "#011027" }}>
      <Grid sx={{ py: 3, borderBottom: "2px solid #9da3ac" }}>
        <LogoContainer className="container">
          <Logo />
        </LogoContainer>
      </Grid>

      <Box
        sx={{
          p: 2,
        }}
      >
        <Container>
          <Grid container sx={{ mt: { xs: 1, md: 4, sm: 4 } }}>
            {data.map((details, index) => (
              <MyGrid item key={index}>
                <Grid
                  sx={{
                    color: "white",
                    pb: 2,
                  }}
                >
                  <Grid
                    sx={{
                      height: "3rem",
                    }}
                  >
                    <Typography
                      sx={{
                        my: 1,
                        fontWeight: "700",
                        color: "white",
                        fontSize: { xs: "18px", md: "25px", sm: "20px" },
                      }}
                      variant="h6"
                    >
                      {details.head}
                    </Typography>
                  </Grid>

                  {details.list.map((menu) => (
                    <ListItem
                      sx={{
                        padding: "0px",
                      }}
                    >
                      <ListItemText
                        sx={{
                          textTransform: "capitalize",
                          color: "var(--secondary)",
                          "& span": {
                            fontSize: {
                              xs: "0.9rem",
                              md: "1rem",
                              sm: "1rem",
                            },
                          },
                        }}
                        primary={menu}
                      />
                    </ListItem>
                  ))}
                </Grid>
              </MyGrid>
            ))}

            <MyGrid item>
              <Grid
                sx={{
                  color: "white",
                  pb: 2,
                }}
              >
                <img src={Chromeweb} className="img-fluid" alt="webstore" />
                <Typography
                  sx={{
                    my: 1,
                    fontWeight: "700",
                    color: "white",
                    fontSize: { xs: "18px", sm: "25px", md: "20px" },
                  }}
                  variant="h6"
                >
                  Check out our 9 reviews
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={4}
                  sx={{
                    color: "#00e7b9",
                  }}
                />
                {/* <ChromeWebStoreIcon />
                 */}
              </Grid>
            </MyGrid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 1, md: 3, sm: 3 }, borderTop: "2px solid #9da3ac" }}>
        <ContainerWrap container>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                color: "#8d949f",
                textAlign: "left",
                my: { xs: 1, md: 2, sm: 1 },
                fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
              }}
            >
              © Scube.co
            </Typography>
            <Typography
              sx={{
                color: "var(--secondary)",
                textAlign: "left",
                fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
              }}
            >
              Scube.co & Scube Theme is trading name for Scube Digital Limited.
              <br />
              Scube is a Trademarked with UK Government
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
              "& p": {
                fontSize: { xs: "0.6rem", md: "1rem", sm: "0.6rem" },
              },
            }}
          >
            <Typography
              sx={{
                color: "var(--secondary)",
                m: 1,
              }}
            >
              {" "}
              Terms & Policy
            </Typography>
            <Typography
              sx={{
                color: "var(--secondary)",
                m: 1,
              }}
            >
              {" "}
              Privacy Policy
            </Typography>{" "}
            <Typography
              sx={{
                color: "var(--secondary)",
                m: 1,
              }}
            >
              {" "}
              Certificates
            </Typography>{" "}
            <Typography
              sx={{
                color: "var(--secondary)",
                m: 1,
              }}
            >
              {" "}
              Cookies Policy
            </Typography>
          </Grid>
        </ContainerWrap>
      </Box>
    </Box>
  );
}
