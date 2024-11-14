import React from "react";
import { Box, Typography,  } from "@mui/material";

const ThankYou = ({ setPage }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Thank You for Your Order!
      </Typography>
      <Typography variant="body1" mb={4}>
        Your delicious meal will be ready soon.
      </Typography>
      
    </Box>
  );
};

export default ThankYou;
