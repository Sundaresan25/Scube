import * as React from "react";
import { styled } from "@mui/system"; 
import {
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Audit from "../Assests/page-audit.svg";

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

const ListItemTag = styled(ListItem)(({ theme }) => ({
  width: "100%",
  margin: "20px auto",
  padding: "10px",
}));

export default function Banner2(props) {
  
  const list = [
    {
      title: "Add your webpage URL and  get the report in a click",
      description:
        "Add your webpage URL and get the detailed report by clicking on new page audit and button",

      id: 1,
    },
    {
      title:
        "Get insights into performance ,SEO score and overall opportunities to improve your webpage",
      description:
        "You get details of your performance and SEO score, and overall opportunities to improve your webpage",

      id: 2,
    },
    {
      title: "Save the webpage audit  report  in the Breeze app",
      description:
        "You can save your report of the webpage audit by clicking the save button in the Breeze Web Application",

      id: 3,
    },
  ];

  return (
    <Box
      sx={{
        py: 2,
        my: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "var(--primary)",
          margin: { xs: "5px", md: "10px" },
          fontSize: { xs: "1.3rem", md: "2.125rem", sm: "1.8rem" },
        }}
      >
        Breeze is the best website audit tool you can find
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "var(--secondary)",
          margin: { xs: "5px", md: "10px" },
          fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
        }}
      >
        A glimpse of 'Page Audit' feature inside the Breeze web Application
      </Typography>
      <Container>
        <Grid container sx={{ mt: "20px" }}>
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="p-2 position-relative "
          >
            <img src={Audit} alt="audit_image" className="img-fluid" />
          </Grid>
          <Grid item xs={12} md={6} sm={12} className="p-2 position-relative">
            <Typography
              variant="h5"
              sx={{
                color: "var(--primary)",
                margin: { xs: "5px", md: "10px" },
                fontWeight: "700",
                fontSize: { xs: "1rem", md: "1.5rem", sm: "1.5rem" },
              }}
            >
              Website audit report at your fingertips with Breeze
            </Typography>
            <Typography
              sx={{
                color: "var(--secondary)",
                margin: { xs: "5px", md: "10px" },
                fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
              }}
            >
              Website audit report at your fingertips with Breeze
            </Typography>
            {list.map((data, index) => (
              <ListItemTag className={""} key={index}>
                <ListItemAvatar>
                  <DoneIcon
                    sx={{
                      color: "#16077c",
                      width: "2rem",
                      height: "2rem",

                      "@media (max-width:600px)": {
                        width: "1.3rem",
                        height: "1.3rem",
                      },
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  style={{ overflowWrap: "anywhere" }}
                  primary={
                    <Typography
                      sx={{
                        fontWeight: "600",
                        color: "var(--primary)",
                        fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
                      }}
                    >
                      {data.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        color: "var(--secondary)",
                        fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
                      }}
                    >
                      {data.description}
                    </Typography>
                  }
                />
              </ListItemTag>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
