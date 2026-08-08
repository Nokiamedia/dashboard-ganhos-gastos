# Ganhos & Gastos — Dashboard Financeiro

Um dashboard pessoal, num único ficheiro HTML, para visualizar receitas e despesas a partir de um extrato em `.csv` ou `.xlsx`. Sem servidor, sem conta, sem instalação — os dados são lidos e processados inteiramente no navegador.

## Como usar

1. Abra `index.html` num navegador (duplo clique no ficheiro) ou publique com o GitHub Pages.
2. Clique em **Carregar ficheiro** e escolha o seu extrato em `.csv` ou `.xlsx` (também pode arrastar o ficheiro para a página).
3. Explore o saldo, os gráficos por categoria e por mês, e a tabela de movimentos — com pesquisa, filtros e ordenação por coluna.

Sem dados à mão? **Ver com dados de exemplo** mostra o dashboard com valores fictícios. **Transferir modelo** dá-lhe um `.csv` de partida com o formato certo.

## Formato esperado do ficheiro

| Data       | Descrição      | Categoria  | Tipo    | Valor  |
|------------|-----------------|------------|---------|--------|
| 2026-08-01 | Salário Agosto  | Salário    | Receita | 2200   |
| 2026-08-02 | Renda           | Habitação  | Despesa | 750    |

- **Data** — `AAAA-MM-DD` ou `DD/MM/AAAA`
- **Tipo** — `Receita` ou `Despesa` (também aceita `Entrada`/`Saída`)
- **Valor** — sempre positivo; o sinal vem da coluna Tipo
- **Categoria** — texto livre; categorias como Salário, Alimentação, Transporte, Habitação, Saúde, Lazer, Compras, Contas & Serviços e Educação têm cores próprias nos gráficos, outras usam uma cor neutra

Ver `sample-data.csv` neste repositório para um exemplo completo.

## Publicar com GitHub Pages

Em `Settings → Pages` do repositório, escolha a branch `main` e a pasta `/ (root)` como origem. O site fica disponível em `https://<utilizador>.github.io/<repositório>/`.

## Privacidade

Nenhum dado sai do seu navegador — não há backend, não há armazenamento externo, e o ficheiro carregado nunca é enviado para lado nenhum.
