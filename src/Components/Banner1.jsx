import * as React from "react";
import { styled } from "@mui/system";
import {
  Typography,
  useMediaQuery,
  ListItem,
  ListItemText,
  Toolbar,
  IconButton,
  Drawer,
  List,
  Box,
  Grid,
} from "@mui/material";
import BgCover from "../Assests/hero-banner.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GButton from "./Global/Gbutton";
import cover_image from "../Assests/cover1.png";
import { Logo, LogoutIcon } from "../Assests";
import { Menu, WorkOutlineOutlined } from "@mui/icons-material";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  // breakpoints depend on screen
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

const TextContainer = styled("div")(({ theme }) => ({
  paddingRight: theme.spacing(0),
  paddingBottom: theme.spacing(0),
  textAlign: "center",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    paddingRight: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    textAlign: "left",
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    paddingRight: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    width: "80%",
    textAlign: "left",
  },
}));

const Image = styled("img")({
  maxWidth: "70%",
  height: "auto",
});

const DrawerList = styled(List)({
  width: 250,
});

// const Navbar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "transparent",
// }));

const NavbarWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  [theme.breakpoints.up("md")]: {
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "80%",
  },
}));

const StyledButton = styled("a")({
  textTransform: "capitalize",
  textDecoration: "none",
  color: "white",
  margin: "5px",
  "&:hover": {
    color: "#823EF0",
    textDecoration: "none",
  },
  "@media (max-width:780px)": {
    // apply the styles only for mobile devices
    display: "none",
  },
});

export default function Banner1(props) {
  // menu data
  const menus = [
    {
      label: "Product",
      id: 0,
    },
    {
      label: "Resources",
      id: 1,
    },
    {
      label: "Company",
      id: 2,
    },
    {
      label: "Pricing",
      id: 3,
    },
  ];
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width:780px)"); // check if the screen size is larger than 780px

  // function to open drawer in mobile view
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  // mobile resposnive list
  const list = (
    <DrawerList onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      {menus?.map((details, index) => (
        <ListItem button>
          <a
            href={"/"}
            style={{
              textTransform: "capitalize",
              textDecoration: "none",
              color: "#16077c",
            }}
          >
            <ListItemText primary={details.label} />
          </a>
        </ListItem>
      ))}
      <GButton label={"Request Demo"} color="#16077c" background="#00e7b9" />
      <LogoutIcon />
    </DrawerList>
  );
  return (
    <Grid
      sx={{
        background: `url(${BgCover})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        py: 2,
        pb: { xs: 2, md: 5, sm: 3 },
      }}
    >
      {/* <Navbar position="static"> */}
      <NavbarWrap>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {isDesktop && (
            <div>
              <Logo
                style={{
                  width: "8rem",
                  margin: "0px 10px",
                }}
              />
              {/* map the menus  */}
              {menus.map((details, index) => (
                <StyledButton
                  sx={{
                    mx: 2,
                  }}
                  href={"/"}
                >
                  {details.label}
                </StyledButton>
              ))}
            </div>
          )}
          {/* conditional rendering based on screen */}
          {isDesktop ? (
            <div>
              <LogoutIcon />
              <GButton
                label={"Request Demo"}
                color="#16077c"
                background="#00e7b9"
              />
            </div>
          ) : (
            <>
              <Logo
                style={{
                  width: "8rem",
                  margin: "0px 10px",
                }}
              />
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: "white" }}
                onClick={toggleDrawer(true)}
              >
                <Menu />
              </IconButton>
            </>
          )}
        </Toolbar>
      </NavbarWrap>
      {/* </Navbar> */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>{" "}
      <Container className="position-relative">
        <div className="col-lg-6 px-3 px-md-2 d-flex align-items-center justify-content-center">
          <TextContainer>
            <Typography
              sx={{
                my: 2,
                mb: { xs: 2, md: 4, sm: 4 },
                color: "#FFFFFF",
                fontWeight: "700",

                fontSize: { xs: "20px", md: "35px", sm: "35px" },
              }}
              variant="h6"
            >
              Get Website audit report in a click with Breeze application
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "13px", md: "18px", sm: "18px" },
              }}
            >
              Breeze avails you detailed audit behind website pages within a few
              steps
            </Typography>
            <Grid marginTop={2}>
              <GButton
                label={"Get Started Free"}
                color="#16077c"
                background="#00e7b9"
                icon={<ArrowForwardIcon />}
              />
              <GButton
                label={"Explore Breeze"}
                color="white"
                background="#060E3B"
                icon={<WorkOutlineOutlined />}
              />
            </Grid>
          </TextContainer>
        </div>
        <div className="col-lg-6 p-2">
          <div className=" d-flex align-items-center justify-content-center">
            <Image src={cover_image} alt="cover_image" />
          </div>
          <Typography
            sx={{
              color: "#ffffff99",
              fontSize: { xs: "12px", md: "15px", sm: "15px" },
              textAlign: "center",
            }}
          >
            Breeze is the free website audit tool that provides website audit
            reports for you in a click
          </Typography>
        </div>
      </Container>
    </Grid>
  );
}
