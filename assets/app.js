// Arma las tarjetas de propuestas a partir de proyectos.json.
// En cada landing: <ul data-propuestas data-excluir="slug"> muestra las demás (máx. 3).
// En el catálogo: <ul data-propuestas> muestra todas.
(async function () {
  const lista = document.querySelector('[data-propuestas]');
  if (!lista) return;
  const base = lista.dataset.base || './';
  let proyectos = [];
  try {
    const r = await fetch(base + 'proyectos.json', { cache: 'no-cache' });
    proyectos = (await r.json()).filter(p => p.activo !== false);
  } catch (e) { console.error('No se pudo leer proyectos.json', e); }
  const excluir = lista.dataset.excluir;
  if (excluir) proyectos = proyectos.filter(p => p.slug !== excluir).slice(0, 3);
  const seccion = lista.closest('[data-seccion-propuestas]');
  if (!proyectos.length) { if (seccion && excluir) seccion.hidden = true; else lista.insertAdjacentHTML('afterend','<p class="vacio">Pronto vas a ver acá nuevas propuestas.</p>'); return; }
  lista.innerHTML = proyectos.map(p => `
    <li class="tarjeta"><a href="${base}${p.slug}/">
      <img src="${base}${p.slug}/img/portada.webp" alt="${p.nombre}" loading="lazy" width="800" height="600">
      <div class="datos"><h3>${p.nombre}</h3><p class="zona">${p.tipo} en ${p.zona}</p></div>
    </a></li>`).join('');
})();
