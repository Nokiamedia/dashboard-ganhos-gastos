// Exemplo mínimo de dados e renderização
const sampleEntries = [
  {date:'2026-08-01',desc:'Salário',type:'income',value:3500.00},
  {date:'2026-08-03',desc:'Supermercado',type:'expense',value:420.75},
  {date:'2026-08-05',desc:'Freelance',type:'income',value:600.00},
  {date:'2026-08-06',desc:'Transporte',type:'expense',value:80.00}
];

function formatBRL(v){
  return v.toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
}

function renderTotals(entries){
  const income = entries.filter(e=>e.type==='income').reduce((s,e)=>s+e.value,0);
  const expense = entries.filter(e=>e.type==='expense').reduce((s,e)=>s+e.value,0);
  const total = income - expense;

  document.getElementById('incomeValue').textContent = formatBRL(income);
  document.getElementById('expenseValue').textContent = formatBRL(expense);
  document.getElementById('totalValue').textContent = formatBRL(total);
}

function renderTable(entries){
  const tbody = document.querySelector('#entriesTable tbody');
  tbody.innerHTML = '';
  entries.forEach(e=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${e.date}</td><td>${e.desc}</td><td>${e.type}</td><td>${formatBRL(e.value)}</td>`;
    tbody.appendChild(tr);
  });
}

// Inicializa
document.addEventListener('DOMContentLoaded', ()=>{
  renderTotals(sampleEntries);
  renderTable(sampleEntries);
});