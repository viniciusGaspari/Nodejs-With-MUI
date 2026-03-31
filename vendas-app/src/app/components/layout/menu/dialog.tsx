"use client";
import React, { useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Box, Typography
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useRouter } from "next/navigation";
import { createNewCard } from "service/card/card.service";
import { CardElements } from "models/card.model";

export const CadastroDialog: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(""); // Usaremos como string para a máscara R$
  const [descricao, setDescricao] = useState("");
  const [imagemBase64, setImagemBase64] = useState(""); 
  const [nomeArquivo, setNomeArquivo] = useState("");

  // 1. Máscara de Moeda (R$) em tempo real
  const handlePrecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
    if (!valor) {
      setPreco("");
      return;
    }
    const formatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(valor) / 100);
    setPreco(formatado);
  };

  // 2. Conversão da foto do PC para Base64
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNomeArquivo(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSalvar = async () => {

      const precoNumerico = preco
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim();

      const newCard: CardElements = {
        cardTitle: nome,
        cardPrice: precoNumerico,
        cardDescription: descricao,
        cardImageUrl: imagemBase64, 
      };

      await createNewCard(newCard as CardElements);
      
      router.refresh();
      handleFecharEResetar();
    
  };

  const handleFecharEResetar = () => {
    setNome("");
    setPreco("");
    setDescricao("");
    setImagemBase64("");
    setNomeArquivo("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleFecharEResetar} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: "bold" }}>Cadastrar Novo Produto</DialogTitle>
      
      <DialogContent dividers>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}>
          <TextField 
            label="Nome do Produto" 
            fullWidth 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          />
          
          <TextField 
            label="Preço" 
            fullWidth 
            placeholder="R$ 0,00"
            value={preco} 
            onChange={handlePrecoChange} 
          />

          {/* Área de Seleção de Foto */}
          <Box sx={{ border: '1px dashed #ccc', p: 2, textAlign: 'center', borderRadius: 1 }}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<PhotoCamera />}
              sx={{ mb: 1 }}
            >
              Escolher Foto do PC
              <input hidden accept="image/*" type="file" onChange={handleFileChange} />
            </Button>
            
            {nomeArquivo && (
              <Typography variant="caption" display="block">
                Arquivo selecionado: <strong>{nomeArquivo}</strong>
              </Typography>
            )}
            
            {imagemBase64 && (
              <Box sx={{ mt: 2 }}>
                <img 
                  src={imagemBase64} 
                  alt="Preview" 
                  style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0,0,0,0.1)' }} 
                />
              </Box>
            )}
          </Box>

          <TextField 
            label="Descrição Detalhada" 
            fullWidth 
            multiline 
            rows={3} 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)} 
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button onClick={handleFecharEResetar} color="inherit" variant="outlined">
          Cancelar
        </Button>
        <Button 
          disabled={!nome || !preco || !imagemBase64} 
          onClick={handleSalvar} 
          variant="contained"
          color="primary"
        >
          Salvar no Banco
        </Button>
      </DialogActions>
    </Dialog>
  );
};