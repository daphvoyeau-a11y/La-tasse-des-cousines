/* La Tasse des Cousines – script commun : en-tête, pied de page, contenus de l'accueil */
const $ = s => document.querySelector(s);
const cur = location.pathname.split('/').pop() || 'index.html';
const links = [['index.html','Accueil'],['index.html#salon','Notre salon'],['index.html#vitrine','Notre vitrine'],['index.html#produits','Nos boissons'],['recette.html','Nos recettes'],['index.html#avis','Nos avis'],['contact.html','Contact']];
const img = (f, a, c = '') => `<img src="images/${f}" alt="${a}" loading="lazy" class="w-full h-full object-cover ${c}" onerror="this.style.display='none'">`;

// ---------- En-tête ----------
const nav = links.map(([h,t]) => `<a href="${h}" class="px-3 py-1.5 rounded-lg text-sm font-semibold ${!h.includes('#') && h === cur ? 'bg-pc text-white' : 'text-mute hover:bg-s3 hover:text-ink'}">${t}</a>`).join('');
const mob = links.map(([h,t]) => `<a href="${h}" class="py-2 font-semibold text-primary">${t}</a>`).join('');
$('#site-header').innerHTML = `<header class="fixed inset-x-0 top-0 z-50 bg-surf/90 backdrop-blur-xl shadow">
<div class="h-20 max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
<a href="index.html" class="flex items-center gap-3"><span class="w-11 h-11 rounded-full bg-s4 flex items-center justify-center"><span class="material-symbols-outlined text-primary">local_cafe</span></span>
<span class="leading-tight"><b class="block font-serif text-primary text-lg">La Tasse des Cousines</b><small class="text-sec font-semibold text-xs">Salon de thé artisanal à Nantes</small></span></a>
<nav class="hidden xl:flex gap-1" aria-label="Navigation principale">${nav}</nav>
<div class="flex items-center gap-2"><a href="contact.html" class="btn hidden sm:inline-flex">Réserver une table</a>
<button id="menu-btn" aria-label="Ouvrir le menu" class="xl:hidden w-11 h-11 rounded-lg bg-s3 text-primary flex items-center justify-center"><span class="material-symbols-outlined">menu</span></button></div></div>
<nav id="mobile-menu" class="hidden xl:hidden px-5 pb-4 flex flex-col bg-surf" aria-label="Menu mobile">${mob}</nav></header>`;
$('#menu-btn').onclick = () => $('#mobile-menu').classList.toggle('hidden');

// ---------- Pied de page ----------
$('#site-footer').innerHTML = `<footer class="bg-s2 pt-12 pb-6"><div class="max-w-7xl mx-auto px-5 md:px-8">
<div class="grid md:grid-cols-3 gap-8 mb-8">
<div><b class="font-serif text-primary text-xl block mb-2">La Tasse des Cousines</b><p class="text-mute text-sm">Un salon de thé chaleureux au cœur de Nantes : pâtisseries maison, boissons du monde et espace enfant, ouvert à tous.</p></div>
<div><b class="text-primary block mb-2">Nous trouver</b><p class="text-mute text-sm">14 Rue des Épices Célestes<br>44000 Nantes (quartier Bouffay)<br>Tramway ligne 1 : Bouffay</p>
<p class="text-mute text-sm mt-3">Lun–ven : 8h30–19h30<br>Samedi : 9h00–20h00<br>Dimanche : 10h00–19h00</p></div>
<div><b class="text-primary block mb-2">Informations</b><ul class="text-sm text-mute space-y-1">
<li><a class="hover:text-primary" href="recette.html">Nos recettes</a></li><li><a class="hover:text-primary" href="contact.html">Contact et réservation</a></li>
<li><a class="hover:text-primary" href="mentions-legales.html">Mentions légales</a></li><li><a class="hover:text-primary" href="politique-confidentialite.html">Politique de confidentialité</a></li></ul></div></div>
<p class="text-xs text-mute border-t border-s4 pt-4">© 2026 La Tasse des Cousines. Site réalisé dans le cadre d'un projet pédagogique : l'entreprise, l'adresse et les coordonnées sont fictives.</p></div></footer>`;

// ---------- Apparition douce des sections ----------
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }), { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- Contenus de l'accueil ----------
if ($('#salon-grid')) {
  const salon = [['salon-general.jpg','Vue générale du salon','Espace commun','Tons terracotta et bordeaux, grandes tables en bois pour les retrouvailles.'],
  ['espace-enfant.jpg','Espace enfant du salon','Famille','Un coin douillet avec jouets en bois et livres illustrés pour les petits.'],
  ['salon-velours.jpg','Fauteuils en velours bordeaux','Détente','Fauteuils profonds et lumières douces pour lire en savourant un thé.'],
  ['comptoir.jpg','Comptoir et vitrine de pâtisseries','Comptoir','Vitrine de douceurs fraîches préparées chaque matin.']];
  $('#salon-grid').innerHTML = salon.map(([f,a,t,d]) => `<article class="card"><div class="h-52 bg-s3">${img(f,a)}</div><div class="p-5"><span class="text-xs font-bold text-sec">${t}</span><h3 class="font-serif text-primary text-xl mb-1">${a}</h3><p class="text-sm text-mute">${d}</p></div></article>`).join('');

  const pat = [['cornes-gazelle.jpg','Cornes de gazelle','Amandes pilées et eau de fleur d\'oranger, voile de sucre glace.','2,20','amandes'],
  ['makrout.jpg','Makrout au miel','Semoule dorée, cœur de dattes à la cannelle, miel tiède.','2,40','miel'],
  ['chebakia.jpg','Chebakia au miel','Rose tressée à la cannelle, nappée de miel et de sésame grillé.','2,30','miel'],
  ['briouates.jpg','Briouates aux amandes','Triangles croustillants fourrés à la pâte d\'amande.','2,60','amandes'],
  ['tarte-tatin.jpg','Tarte tatin','Pommes confites, caramel au beurre salé, pâte croustillante.','3,90','classiques'],
  ['eclair.jpg','Éclair au chocolat','Pâte à choux fraîche, crème pâtissière au chocolat noir.','3,40','classiques'],
  ['madeleines.jpg','Madeleines au miel','Cœur moelleux au beurre frais et miel de fleurs.','1,80','classiques'],
  ['cookie.jpg','Cookie chocolat et pécan','Croustillant autour, fondant au centre.','2,60','classiques']];
  $('#vitrine-grid').innerHTML = pat.map(([f,n,d,p,c]) => `<article class="card flex flex-col" data-cat="${c}"><div class="h-44 bg-s3 relative">${img(f,n)}<span class="absolute top-3 right-3 px-3 py-1 rounded-full bg-gold text-ink font-bold text-sm">${p} €</span></div><div class="p-4"><h3 class="font-serif text-primary text-lg mb-1">${n}</h3><p class="text-sm text-mute">${d}</p></div></article>`).join('');
  document.querySelectorAll('[data-filter]').forEach(b => b.onclick = () => {
    document.querySelectorAll('[data-filter]').forEach(x => { x.className = 'btn btn-alt'; x.setAttribute('aria-pressed','false'); });
    b.className = 'btn'; b.setAttribute('aria-pressed','true');
    document.querySelectorAll('#vitrine-grid article').forEach(a => a.style.display = (b.dataset.filter === 'all' || a.dataset.cat === b.dataset.filter) ? 'flex' : 'none');
  });

  const dr = [['the-menthe.jpg','Thé à la menthe','Thé vert, menthe fraîche froissée à la main, fleur d\'oranger.','3,20'],
  ['chai.jpg','Chaï masala','Lait, cannelle, cardamome, girofle et gingembre frais.','3,80'],
  ['bissap.jpg','Bissap chaud ou frais','Fleurs d\'hibiscus infusées, menthe, vanille et muscade.','3,40'],
  ['cafe.jpg','Café de torréfaction locale','Espresso ou allongé, notes fruitées.','2,20'],
  ['chocolat-chaud.jpg','Chocolat chaud maison','Chocolat noir 70 % fondu au lait entier, chantilly fouettée main.','3,90'],
  ['citronnade.jpg','Citronnade maison','Citron pressé, fleur d\'oranger et sucre de canne.','3,50']];
  $('#drinks-grid').innerHTML = dr.map(([f,n,d,p]) => `<article class="card flex gap-4 p-4 items-center"><div class="w-24 h-24 rounded-xl overflow-hidden bg-s3 shrink-0">${img(f,n)}</div><div><h3 class="font-serif text-primary text-lg">${n} <span class="text-sec text-base">· ${p} €</span></h3><p class="text-sm text-mute">${d}</p></div></article>`).join('');

  const av = [['SM','Sarah M.','Visite en famille','Un vrai havre de paix. Le coin enfant a sauvé notre goûter et les cornes de gazelle sont divines.'],
  ['KI','Karim et Inès','Habitués du samedi','Le bissap chaud et le makrout sont exceptionnels, pour des prix très accessibles.'],
  ['FD','Fatima D.','Pause télétravail','J\'y viens pour un vrai thé à la menthe. L\'accueil est si chaleureux qu\'on s\'y sent comme chez soi.']];
  $('#avis-grid').innerHTML = av.map(([i,n,r,t]) => `<figure class="card p-6"><blockquote class="font-serif italic text-primary text-lg mb-4">« ${t} »</blockquote><figcaption class="flex items-center gap-3"><span class="w-10 h-10 rounded-full bg-s4 flex items-center justify-center font-bold text-primary">${i}</span><span><b class="text-primary block">${n}</b><small class="text-mute">${r}</small></span></figcaption></figure>`).join('');
}

// ---------- Formulaire de contact ----------
const f = $('#reservation-form');
if (f) f.onsubmit = e => { e.preventDefault(); /* Pour un envoi réel : brancher Formspree (action="https://formspree.io/f/xxxx") */ $('#form-feedback').classList.remove('hidden'); f.reset(); };
