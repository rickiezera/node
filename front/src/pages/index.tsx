import { useEffect, useState } from 'react';
import { Title, Text, Container, Button } from '@mantine/core';

export default function Home() {
  const [message, setMessage] = useState<string>('');

  // Função para buscar uma frase ao clicar no botão
  const fetchFrase = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/frase');
      const data = await response.text();
      setMessage(data);
    } catch (err) {
      console.error('Erro ao buscar frase:', err);
      setMessage('Ops! Não consegui pegar uma frase engraçada.');
    }
  };

  // Fetch inicial (opcional, pode remover se não quiser carregar na inicialização)
  useEffect(() => {
    fetchFrase();
  }, []);

  return (
    <Container>
      <Title order={1}>Minha Interface Simples</Title>
      <Text>Mensagem do Backend: {message}</Text>
      <Button variant="filled" color="blue" onClick={fetchFrase}>
        Clique aqui
      </Button>
    </Container>
  );
}