# Lumina Beauty: site de demonstração para salão de beleza feminino

Site estático (HTML, CSS e JavaScript puro, sem build) que mostra a clientes como ficaria a página de uma rede de beleza moderna. Nome, preços, endereços e números são fictícios.

## Inspiração
Estilo de rede de beleza brasileira (promoção no topo, categorias de serviço, agendamento rápido, WhatsApp, assinatura mensal), inspirado em redes como Espaçolaser, Jacques Janine e Studio W. É "inspirado em", não cópia: nome, logotipo (SVG original), textos e ilustrações são próprios. Nenhuma imagem externa.

## Identidade
- Cores: magenta `#E4007C`, roxo `#3B0A57` e `#5B1A7E`, off-white rosado `#FFF6FA`, amarelo de destaque `#FFD23F`. Gradiente magenta para roxo nos destaques.
- Fonte: Plus Jakarta Sans (Google Fonts), com fallback para a fonte do sistema.
- Cores no início do `style.css` (`:root`).

## Ver no ar
No GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**. O link fica em `https://SEU-USUARIO.github.io/demo-salao-beleza/`.

## Personalizar para um cliente sem editar código
```
https://SEU-USUARIO.github.io/demo-salao-beleza/?wa=5515991234567&nome=Studio%20da%20Cliente
```
- `wa`: número com código do país e DDD, só dígitos. Troca botões, formulário e telefone exibido.
- `nome`: troca o nome da marca no topo, no rodapé e na aba do navegador.

## Checklist de entrega ao cliente
- [ ] Número do WhatsApp: busque `5500900000000` e `(00) 90000-0000`.
- [ ] Nome, logotipo (SVG `#i-logo` no `index.html`) e cores da marca do cliente.
- [ ] Endereços, horários e unidades reais (seção Unidades e opções do formulário).
- [ ] Serviços, planos do Clube e preços reais (ou remova a seção de planos).
- [ ] Promoção da faixa do topo e selo de preço do hero.
- [ ] Números da faixa "ilustrativos": troque pelos reais ou remova.
- [ ] Profissionais do formulário: nomes reais.
- [ ] Perguntas frequentes revisadas.
- [ ] Remova a frase "Site de demonstração" do rodapé.

## Arquivos
`index.html` (conteúdo) · `style.css` (visual) · `script.js` (WhatsApp, parâmetros do link e formulário)
