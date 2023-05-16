import { Button, styled } from "@mui/material";

// global Button

export default function GButton(props) {
  const { label, color, background, borderColor, variant, icon } = props;
  const StyledButton = styled(Button)({
    textTransform: "capitalize",
    margin: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    "&:hover": {},
    ["@media (max-width:780px)"]: {
      fontSize: "13px",
    },
    ["@media (max-width:600px)"]: {
      fontSize: "10px",
    },
  });
  return (
    <>
      <StyledButton
        startIcon={icon}
        sx={{ color: color, background: background, borderColor: borderColor }}
        variant={variant}
      >
        {label}
      </StyledButton>
    </>
  );
}
