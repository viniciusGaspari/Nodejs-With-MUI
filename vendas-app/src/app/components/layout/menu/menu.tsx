// src/components/Menu.tsx
"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import { CadastroDialog } from "./dialog"; 

export const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "white", color: "black", boxShadow: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            VENDAS APP
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              startIcon={<AddIcon />} 
              onClick={() => setOpen(true)}
            >
              Novo
            </Button>
            <Button color="inherit" startIcon={<HomeIcon />}>Home</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <CadastroDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};