import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import "./style.css";

export const Forms = () => {
  const [email, setEmail] = useState<String>('')
  const [name, setName] = useState<String>('')

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      name,
      email
    };

    console.log(data)
    fetch("http://127.0.0.1:8000/api/v1/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response.body);
        } else {
          console.error(response.body);
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  };

  return (
    <Box display="flex" flexDirection="column" width="35%">
      <form onSubmit={handleSubmit }>
        <label htmlFor="name">{`Seu nome (requerido)`}</label>
        <input id="name" type="text" className="inputForm" onChange={(e)=> setName(e.target.value)} />
        <label htmlFor="email">{`Seu Email (requerido)`}</label>
        <input id="email" type="text" className="inputForm" onChange={(e)=> setEmail(e.target.value)}/>
        <label htmlFor="ass">Assunto</label>
        <input id="ass" type="text" className="inputForm" />
        <label htmlFor="msg">Messagem</label>
        <textarea id="msg" className="inputForm textarea" />
        <label>Anexe um documento explicando seu projeto</label>
        <Box
          border="2px dashed rgba(63, 63, 63, 0.4)"
          width="100%"
          height="3rem"
          borderRadius="0.6rem"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="1rem"
          marginBottom="1.5rem"
        >
          <label htmlFor="file" className="file">
            Escolher Arquivo
          </label>
          <Typography
            variant="h1"
            fontSize={14}
            fontWeight={500}
            color="#9BA2AE"
          >
            Nenhum arquivo escolhido
          </Typography>
        </Box>
        <input id="file" type="file" className="inputFile" />
        <Button
          sx={{
            backgroundColor: "#000000",
            borderRadius: "40px",
            color: "#ffff",
            width: "7.6rem",
            paddingY: "0.8rem",
          }}
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};
