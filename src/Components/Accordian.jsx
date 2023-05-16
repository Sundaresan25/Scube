import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  background: "white",
  width: "100%",
  margin: "10px auto",
  [theme.breakpoints.up("md")]: {
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "80%",
  },
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    flexDirection: "row-reverse",
    padding: theme.spacing(1, 2), // Add padding to create space between the content and icons
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      //   transform: "rotate(45deg)", // Adjust rotation for the minus icon
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AccordionComponent() {
  const accordionData = [
    {
      heading: "Which is the best tool for the website audit?",
      para: "Breeze is one of the best tools for website audit report. You Can avail it for free in beginner plane",
      id: 0,
    },
    {
      heading: "what is website audit report?",
      para: "Breeze is one of the best tools for website audit report. You Can avail it for free in beginner plane",
      id: 1,
    },
    {
      heading: "Can i download the webpage audit report?",
      para: "Breeze is one of the best tools for website audit report. You Can avail it for free in beginner plane",
      id: 2,
    },
  ];
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
      {accordionData.map((data, index) => (
        <Accordion //Mui accordion used
          key={index}
          expanded={expanded === data.id}
          onChange={handleChange(data.id)}
          sx={{
            borderBottom: "1px solid rgba(0, 0, 0, .125)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <IconButton
                sx={{
                  border: "1px solid #67d29c",
                  padding: "0px",
                  mx: 1,
                }}
              >
                {expanded === data.id ? (
                  <RemoveIcon
                    sx={{
                      color: "#67d29c",
                      width: { xs: "1rem", md: "1rem", sm: "1rem" },
                      height: { xs: "1rem", md: "1rem", sm: "1rem" },
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      color: "#67d29c",
                      width: { xs: "1rem", md: "1rem", sm: "1rem" },
                      height: { xs: "1rem", md: "1rem", sm: "1rem" },
                    }}
                  />
                )}
              </IconButton>
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              sx={{
                color: "var(--primary)",
                fontWeight: "700",
                fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
              }}
            >
              {data.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                color: "var(--secondary)",
                fontSize: { xs: "0.7rem", md: "1rem", sm: "0.9rem" },
              }}
            >
              {data.para}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
