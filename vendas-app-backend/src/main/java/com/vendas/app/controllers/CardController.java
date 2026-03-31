package com.vendas.app.controllers;

import com.vendas.app.models.card.Card;
import com.vendas.app.services.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CardController {

    private final CardService cardService;

    @GetMapping("/cards")
    public ResponseEntity<List<Card>> getAllNonDeletedCards() {
        return ResponseEntity.ok(this.cardService.getAllNonDeletedCards());
    }

    @PostMapping("/card")
    public ResponseEntity<?> createNewCard(@RequestBody Card request) {
        this.cardService.createNewCard(request);
        return ResponseEntity.ok().build();
    }

}
