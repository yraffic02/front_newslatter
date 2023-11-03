import { Box, Typography } from "@mui/material";
import "./style.css";
import insta from "../../assets/Icons/insta.svg";
import face from "../../assets/Icons/face.svg";
import linke from "../../assets/Icons/linke.svg";

export const CardNewsletter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30rem",
        alignItems: "flex-start",
        background: "#090909",
        padding: "3.75rem 2.5rem",
        borderRadius: "2rem",
        gap: "4rem",
      }}
      overflow="hidden"
    >
      <Typography variant="h1" fontSize={32} fontWeight={600} color="#ffff">
        Receba os nossos artigo de interesse na sua caixa de entrada.
      </Typography>
      <input
        type="text"
        placeholder="Escreva aqui seu e-mail..."
        className="input"
      />
      <Box width="7.3rem">
        <Typography variant="h1" fontSize={15} fontWeight={500} color="#ffff">
          Siga-nos em nossas mídias sociais
        </Typography>
      </Box>
      <Box display="flex" gap="1rem">
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "0.9rem",
          }}
        >
          <img src={insta} alt="instagram" height={28} />
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "0.9rem",
          }}
        >
          <img src={face} alt="facebook" height={28} />
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "0.9rem",
          }}
        >
          <img src={linke} alt="linkedin" height={28} />
        </Box>
      </Box>
    </Box>
  );
};
