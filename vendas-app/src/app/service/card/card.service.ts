import { CardElements } from "models/card.model";

const API_URL = "http://127.0.0.1:8080/api";

export const getAllNonDeletedCards = async (): Promise<CardElements[]> => {
    const response = await fetch(`${API_URL}/cards`, {
        cache: "no-store"
    });

    if(!response.ok){
        throw new Error("Erro ao buscar cards no servidor");
    }

    return await response.json(); 
};

export const createNewCard = async (newCard: CardElements): Promise<void> => {
    const response = await fetch(`${API_URL}/card`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
    });
    return await response.json();
};