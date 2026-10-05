# Studio Margô: site de demonstração para salão de beleza feminino

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página do salão deles. Conteúdo, preços e nomes são fictícios.

## Ver no ar
No GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**. O link fica em `https://SEU-USUARIO.github.io/demo-salao-beleza/`.

## Personalizar para um cliente sem editar código
Acrescente parâmetros ao link e a página já aparece com o WhatsApp e o nome do cliente:

```
https://SEU-USUARIO.github.io/demo-salao-beleza/?wa=5515991234567&nome=Studio%20da%20Cliente
```

- `wa`: número com código do país e DDD, só dígitos. Troca todos os botões, o formulário e o telefone exibido.
- `nome`: troca o nome do salão no topo, no rodapé e na aba do navegador.

## Entregar de verdade ao cliente
Antes de publicar para o cliente, troque no `index.html`:

- [ ] Número do WhatsApp: busque `5500900000000` e `(00) 90000-0000`.
- [ ] Nome, endereço, horários e link do Google Maps.
- [ ] Tabela de serviços e preços.
- [ ] Equipe: nomes e descrições reais.
- [ ] **Depoimentos**: substitua pelos de clientes reais ou apague a seção.
- [ ] Remova a frase "Site de demonstração" do rodapé.

As cores ficam no início do `style.css` (`:root`) e as fontes no `<link>` do `<head>`.

## Arquivos
`index.html` (conteúdo) · `style.css` (visual) · `script.js` (WhatsApp, parâmetros do link e formulário de agendamento)
