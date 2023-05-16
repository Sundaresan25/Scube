import * as React from "react";
import { styled } from "@mui/system";
import {
  ListItemText,
  Grid,
  ListItemAvatar,
  Typography,
  ListItem,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircleTickIcon } from "../Assests";
import GButton from "./Global/Gbutton"; //global button

const Container = styled("div")(({ theme }) => ({
  background: "linear-gradient(to bottom, #030f30, #16077c)",
  width: "100%",
  margin: "20px auto",
  borderRadius: "20px",

  [theme.breakpoints.up("sm")]: {
    width: "95%",
    padding: "20px",
    margin: "auto",
  },

  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
}));

const ListItemTag = styled(ListItem)(({ theme }) => ({
  background: "#011027",
  width: "100%",
  margin: "10px auto",
  borderRadius: "20px",
  color: "white",
  padding: "10px",
  "& svg": {
    width: "3rem",
  },

  "@media (max-width:780px)": {
    borderRadius: "10px",
    padding: "5px",
    "& svg": {
      width: "2rem",
    },
  },
  "@media (max-width:600px)": {
    padding: "5px",

    "& svg": {
      width: "2rem",
    },
  },
}));

export default function CardBanner(props) {
  const list = [
    "   Freelancer:$0/Free",
    "Starter:$150 pm/$1800 pa",
    "Pro:$500 pm/$6000 pa",
  ];
  return (
    <Container>
      <Grid container sx={{ mt: "20px" }}>
        <Grid item xs={12} md={8} sm={8} className="p-2 position-relative">
          {/* {details.icon} */}
          <Typography
            sx={{
              my: 2,
              color: "white",
              fontSize: { xs: "1.3rem", md: "2.125rem", sm: "1.8rem" },
            }}
            variant="h4"
          >
            Start Managing your Website
          </Typography>

          <Typography
            sx={{
              my: 2,

              color: "#686894",
              fontWeight: "700",
              fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
            }}
          >
            The first compherensive tool developed for website Mangers.
            <br />
            Everything you needed in one place for your team
          </Typography>

          <GButton
            label={"Get Started Free"}
            variant="outlined"
            color="#16077c"
            background="#00e7b9"
            icon={<ArrowForwardIcon />}
          />

          <GButton
            label={"Sign up with Google"}
            variant="outlined"
            color="white"
            borderColor="white"
          />

          <Typography
            sx={{
              my: 2,

              color: "#686894",
              fontWeight: "700",
              // fontSize: "15px",
              fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
            }}
          >
            No credit card required
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={4} className="p-2 ">
          {list.map((data, index) => (
            <ListItemTag className={""} key={index}>
              <ListItemAvatar>
                <CircleTickIcon />
              </ListItemAvatar>
              <ListItemText
                style={{ overflowWrap: "anywhere" }}
                primary={
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", md: "1rem", sm: "0.7rem" },
                    }}
                    style={{ fontWeight: "600" }}
                  >
                    {data}
                  </Typography>
                }
              />
            </ListItemTag>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
