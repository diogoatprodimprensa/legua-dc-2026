# Légua Diário de Coimbra

Landing page oficial da **XXVII Légua Diário de Coimbra** - corrida de 5 km que se realiza anualmente no feriado municipal de Coimbra (4 de julho).

## Sobre o Evento

- **Data:** 4 de julho de 2026
- **Local:** Centro histórico de Coimbra
- **Partida:** Rua da Sofia (09h30 corrida / 09h31 caminhada)
- **Chegada:** Praça 8 de Maio
- **Distância:** 5 km homologados

### Provas

| Prova | Descrição | Cronometragem |
|-------|-----------|---------------|
| Corrida | 5 km competitivos | SIM |
| Caminhada | 5 km não competitivos | NÃO |

## Estrutura do Projeto

```
legua-coimbra/
├── src/
│   ├── index.html           # Página principal (single-page)
│   └── assets/
│       ├── images/          # Logos, favicon, og-image
│       └── ASSETS.md        # Lista de assets necessários
├── README.md                # Este ficheiro
└── CLAUDE.md                # Instruções para desenvolvimento com Claude
```

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, Grid, Flexbox)
- JavaScript vanilla (countdown, scroll reveal)
- Google Fonts (Poppins)

## Cores da Marca

```css
--blue:    #0075B8;   /* Azul principal Légua */
--blue-dk: #005A8F;   /* Azul escuro */
--blue-lt: #3399CC;   /* Azul claro */
--navy:    #0D1B2A;   /* Fundo escuro */
--cream:   #F4F1EC;   /* Fundo claro */
--gold:    #C9A84C;   /* Destaque dourado */
```

## Desenvolvimento Local

Basta abrir o ficheiro `src/index.html` num browser. Não são necessárias dependências externas.

```bash
# Ou com um servidor local
npx serve src
```

## Organização

- **Diário de Coimbra** - Organizador principal
- **Câmara Municipal de Coimbra** - Coorganização
- **Associação Distrital de Atletismo de Coimbra (ADAC)** - Coorganização técnica

## Contactos

- **Email:** legua@diariocoimbra.pt
- **Telefone:** +351 916 604 977
- **Inscrições:** [lap2go.com](https://lap2go.com)

## Licença

Todos os direitos reservados - Diário de Coimbra, 2026
