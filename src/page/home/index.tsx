import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import { MyButton } from "../../components/Button";
import { CardArticle } from "../../components/CardArticle";
import teclado from "../../assets/teclado.png";
import pessoa from "../../assets/pessoa.png";
import { CardNewsletter } from "../../components/CardNewsletter";
import { Forms } from "../../components/Form";
import { Footer } from "../../components/Footer";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          marginTop: "9rem",
          height: "75vh",
          paddingX: "3.12rem",
        }}
        position="relative"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "30rem",
            gap: "2.7rem",
            marginTop: "4rem",
          }}
        >
          <Typography variant="h1" fontSize={36} fontWeight={600}>
            Construímos estratégias, design e tecnologia de ponta para o seu
            negócio
          </Typography>
          <Typography variant="h2" fontSize={20} fontWeight={500}>
            Converse com nossa equipe sobre o seu projeto.
          </Typography>
          <MyButton text="Começar" type="secondary" width="9.3rem" />
        </Box>
        <Box position='absolute' top='60px' left='650px'>
          <img src={img1} alt="" />
        </Box>
        <Box position='absolute' top='178px' left='951px'>
          <img src={img2} alt="" />
        </Box>
        <Box position='absolute' top='368px' left='650px'>
          <img src={img3} alt="" />
        </Box>
        <Box position='absolute' top='514px' left='350px'>
          <img src={img4} alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          borderTop: "2px solid #E7EBEE",
          backgroundColor: "#ffff",
          height: "100vh",
          paddingX: "3.12rem",
          gap: "2rem",
        }}
      >
        <CardArticle
          title="Por que é importante ter um site de qualidade?"
          description="Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão..."
          children={<img src={teclado} alt="Teclado" />}
        />
        <CardArticle
          title="6 dicas para trabalhar com marketing digital com verba limitada"
          description="Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão..."
          children={<img src={pessoa} alt="Teclado" />}
        />
        <CardNewsletter />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#ffff",
          paddingX: "3.12rem",
          paddingBottom: "2rem",
          gap: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "30rem",
            gap: "2.7rem",
          }}
        >
          <Typography variant="h1" fontSize={36} fontWeight={600}>
            Viva uma nova experiência de comunicação integrada com foco nos
            resultados.
          </Typography>
          <Typography variant="h2" fontSize={20} fontWeight={500}>
            Escreva-nos sobre o seu projeto
          </Typography>
        </Box>
        <Forms />
      </Box>
      <Footer />
    </>
  );
}

export default App;
