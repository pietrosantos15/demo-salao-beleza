/* Personalização por link: ?wa=5511999998888&nome=Nome%20do%20Salão */
const params = new URLSearchParams(location.search);
const WA = (params.get("wa") || "5500900000000").replace(/\D/g, "");
const NOME = params.get("nome");
const waUrl = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const fmtPhone = n => {
  const d = n.replace(/^55/, "");
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
       : d.length === 10 ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}` : n;
};

if (NOME) {
  document.querySelectorAll("[data-brand]").forEach(el => (el.textContent = NOME));
  document.title = NOME + " | Salão de beleza feminino";
}
document.querySelectorAll("a[data-wa]").forEach(a => (a.href = waUrl(a.dataset.wa)));
if (params.get("wa")) document.querySelectorAll("[data-phone]").forEach(el => (el.textContent = fmtPhone(WA)));

/* Formulário de agendamento: monta a mensagem e abre o WhatsApp */
const form = document.getElementById("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(form), nome = f.get("nome").trim();
  const err = document.getElementById("err");
  err.hidden = !!nome;
  if (!nome) return form.nome.focus();
  const quem = f.get("prof") === "Qualquer uma" ? "com qualquer profissional" : `com a ${f.get("prof")}`;
  const msg = `Olá! Sou ${nome}. Quero agendar ${f.get("servico")} ${quem}. Dia preferido: ${f.get("dia")}, ${f.get("turno")}. Tem horário?`;
  window.open(waUrl(msg), "_blank", "noopener");
});
