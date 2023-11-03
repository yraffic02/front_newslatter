import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import seta from "../../assets/Icons/Icon.svg";

interface IcardArticle {
  title: string;
  description: string;
  children: ReactNode;
}

export const CardArticle = ({ description, title, children }: IcardArticle) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'column',
        width: '20rem',
        height: '34.75rem',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      }}
    >
        <Box> 
          {children}
        </Box>
          <Typography variant="h1" fontSize={24} fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="h2" fontSize={16} fontWeight={400}>
            {description}
          </Typography>
        <Button
          sx={{
            color: "#000000",
            fontWeight: "700",
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          Ir para o artigo <img src={seta} alt="botão prosseguir" />
        </Button>
    </Box>
  );
};
