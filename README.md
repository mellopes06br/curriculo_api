# Currículo API

Uma API simples para gerenciar dados de currículo — ideal para integrar a um site pessoal, portfólio ou aplicativo de currículo digital.

## 🔍 Visão geral

Este projeto disponibiliza endpoints para criar, ler, atualizar e remover informações de currículo (por exemplo: dados pessoais, experiências de trabalho, formações e habilidades).  
Ele foi desenvolvido em **Node.js**, com foco em ser um backend leve, rápido e fácil de integrar em aplicações web.

## 🛠 Tecnologias

- Node.js  
- Express  
- Rotas RESTful  
- Configuração de deploy via Vercel (`vercel.json`)  

## ✅ Funcionalidades

- Criar, listar, atualizar e remover informações de currículo  
- Endpoints separados por tipo de dado (pessoa, experiência, habilidades)  
- Retorno no formato JSON  
- Tratamento básico de erros (validações, 404, 500)  
- Deploy automático pela Vercel  

## 📘 Exemplos de uso (Endpoints)

### 🔹 Criar Pessoa

**POST** `/api/pessoa`

```json
{
  "name": "",
  "email": "",
  "phone_nbr": "",
  "linkedin_url": "",
  "about": ""
}


###🔹 Criar Experiência

POST /api/experiencia

É necessário informar o ID da pessoa a que a experiência pertence.

{
  "title": "",
  "start_date": "",
  "end_date": null,
  "description": "",
  "personId": 
}

###🔹 Criar Habilidade

POST /api/habilidade

É necessário informar o ID da pessoa a que a habilidade pertence.

{
  "name_abi": "",
  "level": "",
  "personId": 
}
