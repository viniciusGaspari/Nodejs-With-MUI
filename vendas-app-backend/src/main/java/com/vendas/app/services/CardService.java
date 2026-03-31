package com.vendas.app.services;

import com.vendas.app.helpers.CardHelper;
import com.vendas.app.models.card.Card;
import lombok.RequiredArgsConstructor;
import org.jspecify.annotations.Nullable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CardService {

    private final CardHelper cardHelper;


    public List<Card> getAllNonDeletedCards() {
        return this.cardHelper.getAllNonDeletedCards();
    }

    public void createNewCard(Card request) {
        this.cardHelper.createNewCard(request);
    }
}
