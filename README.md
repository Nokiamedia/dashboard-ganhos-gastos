# Dashboard Ganhos e Gastos

Este repositório é um dashboard simples para registar e visualizar ganhos e gastos. Este commit inicial adiciona um scaffold mínimo para permitir testes locais e deploy rápido via GitHub Pages.

Conteúdo adicionado:
- index.html — página principal do dashboard
- css/styles.css — estilos básicos
- js/app.js — lógica mínima para demonstração
- README.md — instruções básicas
- LICENSE — licença Apache-2.0 (referência)
- .gitignore — ficheiros a ignorar
- .github/workflows/pages.yml — workflow para deploy para GitHub Pages (on push)

Como usar localmente
1. Fazer clone: git clone https://github.com/Nokiamedia/dashboard-ganhos-gastos.git
2. Abrir `index.html` no browser (é um site estático). Alternativamente usar um servidor local simples: `python -m http.server` e abrir http://localhost:8000

Deploy
- O workflow do GitHub Actions faz upload dos ficheiros para GitHub Pages após cada push para a branch `main`.

Próximos passos recomendados
- Substituir os dados de exemplo por dados reais ou integrar com backend.
- Adicionar testes, validação e linter conforme necessário.
- Verificar se a Pages está corretamente configurada (Settings → Pages) e que a Action tem permissões.

Contacto
- Se precisares de alterações rápidas, diz o que queres adicionar e eu faço.