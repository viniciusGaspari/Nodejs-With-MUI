package com.vendas.app.helpers;

import com.vendas.app.models.card.Card;
import com.vendas.app.repositories.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CardHelper {

    private final CardRepository cardRepository;


    public List<Card> getAllNonDeletedCards() {
        return this.cardRepository.findAll();
    }

    public void createNewCard(Card request) {
        this.cardRepository.save(request);
    }
}
