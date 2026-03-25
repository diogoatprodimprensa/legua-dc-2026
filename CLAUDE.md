# CLAUDE.md - Légua Diário de Coimbra

## Visão Geral do Projeto

Landing page single-page para a **XXVII Légua Diário de Coimbra**, uma corrida de 5 km realizada no feriado municipal de Coimbra (4 de julho de 2026).

## Estrutura

```
src/
├── index.html              # Ficheiro único com HTML, CSS e JS inline
└── assets/
    ├── images/             # Logos, favicon, og-image (ver ASSETS.md)
    └── ASSETS.md           # Lista de assets necessários
```

## Arquitetura CSS

O projeto usa **variáveis CSS** em `:root` para cores e fonte:

```css
--blue:    #0075B8;   /* Cor principal da Légua */
--blue-dk: #005A8F;   /* Hover/estados ativos */
--blue-lt: #3399CC;   /* Acentos claros */
--navy:    #0D1B2A;   /* Fundo escuro principal */
--navy2:   #162333;   /* Fundo escuro secundário */
--cream:   #F4F1EC;   /* Fundo claro */
--gold:    #C9A84C;   /* Destaque/badges */
--f: 'Poppins', sans-serif;
```

## Secções da Página

1. **Topbar** - Navegação sticky com logo DC
2. **Hero** - Título principal, countdown implícito, CTAs
3. **Countdown** - Contagem decrescente até 04/07/2026 09:30
4. **Races** - Comparação Corrida vs Caminhada
5. **Prices** - Fases de inscrição e valores
6. **Program** - Horários do dia do evento
7. **Route** - Percurso com stops visuais
9. **Dorsals** - Levantamento de dorsais
11. **Contact** - Contactos da organização
12. **Footer** - Links e informação legal

## JavaScript

- **Countdown timer**: Atualiza a cada segundo até `2026-07-04T09:30:00`
- **Scroll reveal**: `IntersectionObserver` para animações `.sr.vis`

## Comandos de Build

Não há build - é HTML estático. Para desenvolvimento:

```bash
npx serve src
```

## Layout

- **Hero**: 100vh, suporta imagem/vídeo de fundo (descomentar `.h-bg-media` no HTML)
- **Secções**: Usam classe `.container` para centrar conteúdo a 80% (90% em tablets, 100% em mobile)
- Breakpoints: 1400px, 960px, 600px

## Convenções de Código

- Classes CSS curtas e descritivas (`.h-title`, `.btn-blue`, `.race-price`)
- Prefixos por secção: `h-` (hero), `cd-` (countdown), `pg-` (prices grid)
- `.container` para centrar conteúdo das secções

## Ativos Externos

- **Fontes:** Google Fonts (Poppins)
- **Inscrições:** lap2go.com

## Notas para Desenvolvimento

- Manter o design single-page
- Cores da marca são críticas - ajustar apenas via variáveis CSS
- Testar countdown em diferentes fusos horários
