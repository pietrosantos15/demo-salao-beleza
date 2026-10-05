# Ateliê Alba: site de demonstração para salão feminino

Site estático (HTML, CSS e JavaScript puro, sem build) que mostra a clientes como ficaria a página de um salão de bairro premium. Nome, endereço, preços, equipe e depoimentos são fictícios.

## Inspiração
Estrutura de landing de salões tradicionais e de captação local (Jacques Janine e salões de bairro com agendamento por WhatsApp): hero com foto, serviços com preço "a partir de", galeria, equipe, como agendar, endereço e horário, FAQ. Layout, textos e marca são próprios.

## Identidade
- Paleta: verde-oliva `#2E3A2A`, blush `#E8C9C0`, creme `#FAF5EF`, dourado suave `#B98A5E` (início do `style.css`).
- Fontes: Cormorant Garamond (títulos) e Jost (texto), via Google Fonts, com fallback.

## Imagens
Fotos do Unsplash por hotlink (licença permite uso comercial), em `index.html`. Na entrega, troque pelas fotos do cliente: salve em `assets/` e altere o `src`.
- Hero: cabeleireira fazendo escova (photo-1580618672591-eb180b1a973f).
- Serviços, ao lado de Estética facial: cliente fazendo as unhas (photo-1632345031435-8727f6897d53).
- Noivas e madrinhas: cabeleireira usando modelador de cachos (photo-1629397685944-7073f5589754).
- Trabalhos: loiro iluminado (photo-1605980766335-d3a41c7332a1), corte (photo-1634449571010-02389ed0f9b0), esmaltação rosa (photo-1519014816548-bf5fe059798b), limpeza de pele (photo-1570172619644-dfd03ed5d881), cadeiras do salão (photo-1600948836101-f9ffda59d250), cabelo ondulado (photo-1470259078422-826894b933aa).

## Ver no ar
GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**.

## Personalizar sem editar código
`?wa=5515991234567&nome=Studio%20da%20Cliente`
- `wa`: WhatsApp com código do país e DDD, só dígitos.
- `nome`: troca o nome da marca.

## Checklist de entrega
- [ ] WhatsApp: busque `5500900000000` e `(00) 90000-0000`.
- [ ] Nome, monograma, cores, endereço, horários.
- [ ] Serviços, preços e equipe reais.
- [ ] Fotos reais no lugar das do Unsplash; remova a nota "Imagens ilustrativas" e a frase "Site de demonstração".
