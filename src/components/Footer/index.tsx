import { Box, Typography } from "@mui/material";
import logopositivo from "../../assets/logopositivo.svg";

export const Footer = () => {
  return (
    <Box
      display="flex"
      padding="3.12rem"
      bgcolor="#000000"
      height="20rem"
      justifyContent="space-around"
    >
      <Box width="5rem">
        <img src={logopositivo} alt="logo lqdi" />
      </Box>
      <Box display="flex" flexDirection="column" width="14rem">
        <Typography variant="h6" fontSize={15} fontWeight={700} color="white">
          Brasil
        </Typography>
        <Typography variant="h6" fontSize={15} fontWeight={400} color="white">
          Rua da Consolação, 4393º andar, Consolação São Paulo +55 11 3280-0283
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="2rem">
        <Box display="flex" flexDirection="column" width="14rem">
          <Typography variant="h6" fontSize={15} fontWeight={700} color="white">
            Portugal
          </Typography>
          <Typography variant="h6" fontSize={15} fontWeight={400} color="white">
            Av. República Nº6 - 1º Andar Lisboa +351 916 029 443
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" width="14rem">
          <Typography variant="h6" fontSize={15} fontWeight={700} color="white">
            Holanda
          </Typography>
          <Typography variant="h6" fontSize={15} fontWeight={400} color="white">
            Jasykoffstraat 631506AT ZaandamThe Netherlands +31 622 333 744
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
