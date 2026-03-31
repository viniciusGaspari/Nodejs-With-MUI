package com.vendas.app.models.card;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "cards")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_id")
    private Integer cardId;

    @Lob
    @Column(name = "card_image_url")
    private String cardImageUrl;

    @Column(name = "card_title")
    private String cardTitle;

    @Column(name = "card_description")
    private String cardDescription;

    @Column(name = "card_price")
    private Double cardPrice;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", updatable = true)
    private LocalDateTime updatedAt;

    @Column(name = "deleted_at", updatable = false)
    private LocalDateTime deletedAt;


}
