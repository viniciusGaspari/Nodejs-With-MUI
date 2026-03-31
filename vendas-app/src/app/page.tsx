import { Box, Grid, Container } from "@mui/material";
import { Layout, Menu } from "components";
import { getAllNonDeletedCards } from "service/card/card.service";

export default async function Home() {
  const allCards = await getAllNonDeletedCards();
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Menu />
      </Box>
      <Box>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          {allCards.map((card) => (
          <Grid key={card.cardId} size={{ xs: 12, sm: 6, md: 4 }}>
            <Layout
              cardId={card.cardId}
              cardDescription={card.cardDescription}
              cardPrice={card.cardPrice}
              cardImageUrl={card.cardImageUrl}
              cardTitle={card.cardTitle}
            />
          </Grid>
          ))}
        </Grid>
      </Container>
      </Box>
    </div>
  );
}
