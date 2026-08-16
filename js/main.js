/* =====================================================================
   IMAGENS — cole aqui as URLs vindas do F12 do site atual
   (aba Elements/Network > clique na imagem > Copy image address).
   Ex.: "https://lamicvivamais.com.br/wp-content/uploads/2024/01/2-cartoes.png"
   Deixando em branco (""), a seção mostra o gráfico/placeholder alternativo.
   Ou aponte para arquivos locais em /img (ex.: "img/familia.jpg").
   ===================================================================== */
const IMAGES = {
  hero: "",            // arte principal do topo (ex.: imagem "2 cartões")
  familia: "",         // foto grande da faixa de imagens
  clinica: "",         // foto menor 1
  laboratorio: "",     // foto menor 2
  grupo: {             // logos das empresas do Grupo LAMIC
    "Laboratório LAMIC": "",
    "Clínica Clemir Arrais": "",
    "Endoclinic do Cariri": ""
  },
  logos: {             // logos dos parceiros: "Nome exato do parceiro": "url"
    // "Laboratório LAMIC": "https://lamicvivamais.com.br/wp-content/uploads/newlogo_lamic.png"
  }
};

document.getElementById('yr').textContent = new Date().getFullYear();
const hdr = document.getElementById('hdr');
addEventListener('scroll',()=>hdr.classList.toggle('stuck',scrollY>10));
const burger=document.getElementById('burger'),mm=document.getElementById('mobileMenu');
burger.addEventListener('click',()=>{const o=mm.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mm.classList.remove('open');burger.setAttribute('aria-expanded',false)}));

/* ---------- SLOTS DE IMAGEM ---------- */
function fillPhoto(id,url,cap,hint){
  const el=document.getElementById(id); if(!el) return;
  if(url){el.innerHTML=`<img src="${url}" alt="${cap}" loading="lazy"><span class="cap">${cap}</span>`;}
  else{el.classList.add('empty');el.innerHTML=`<span class="hint"><b>${cap}</b>${hint}</span>`;}
}
fillPhoto('phMain',IMAGES.familia,'Saúde para toda a família','Espaço para a foto principal do site atual — preencha IMAGES.familia.');
fillPhoto('phA',IMAGES.clinica,'Consultas e exames','Preencha IMAGES.clinica.');
fillPhoto('phB',IMAGES.laboratorio,'Rede própria LAMIC','Preencha IMAGES.laboratorio.');
if(IMAGES.hero){
  document.querySelector('.art').innerHTML=`<img class="hero-photo" src="${IMAGES.hero}" alt="Cartão LAMIC Viva+">`;
}
document.querySelectorAll('.logo-card').forEach(c=>{
  const n=c.querySelector('.name').textContent.trim(), u=IMAGES.grupo[n];
  if(u) c.insertAdjacentHTML('afterbegin',`<img class="logo-img" src="${u}" alt="${n}" loading="lazy">`);
});

/* ---------- BENEFÍCIOS ---------- */
const icons = {
  doctor:'<path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  xray:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8v8M15 8v8M9 12h6"/>',
  blood:'<path d="M12 3s6 6.7 6 10.5A6 6 0 0 1 6 13.5C6 9.7 12 3 12 3z"/>',
  gine:'<circle cx="12" cy="8" r="4"/><path d="M12 12v9M9 18h6"/>',
  heart:'<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 20.5l8.8-8.8a5 5 0 0 0 0-6.1z"/>',
  ear:'<path d="M7 9a5 5 0 1 1 10 0c0 3-3 3.5-3 6a3 3 0 0 1-6 .5"/>',
  tooth:'<path d="M7 3c3 0 3 1.5 5 1.5S14 3 17 3s3 4-1 8c-1 3-1 9-2.5 9S12 15 12 15s-1 5-2.5 5S8 14 7 11C3 7 4 3 7 3z"/>',
  bone:'<path d="M6 6l12 12M4 8a2.5 2.5 0 1 1 4-4 2.5 2.5 0 0 1 4 4M16 12a2.5 2.5 0 1 1 4 4 2.5 2.5 0 0 1-4 4"/>',
  pills:'<circle cx="7" cy="7" r="4"/><rect x="12" y="12" width="9" height="9" rx="4.5" transform="rotate(45 16.5 16.5)"/>',
  glasses:'<circle cx="6" cy="14" r="3.2"/><circle cx="18" cy="14" r="3.2"/><path d="M9.2 14h5.6M3 11l2-5M21 11l-2-5"/>',
  vaccine:'<path d="M14 4l6 6M17 7l-9 9-3 1 1-3 9-9M5 19l1 1"/>',
  psi:'<path d="M12 3a6 6 0 0 0-6 6c0 2 1 3 1 5h10c0-2 1-3 1-5a6 6 0 0 0-6-6zM9 18h6M10 21h4"/>'
};
const benefits=[
  {i:'doctor',off:'até 50%',t:'Consultas especializadas',d:'Mais de 20 especialidades médicas na rede credenciada.',list:['Cardiologia adulto e pediátrico','Cirurgia do aparelho digestivo','Clínica médica','Coloproctologia','Endocrinologia','Fisioterapia','Fonoaudiologia','Gastroenterologia','Geriatria','Ginecologia','Neurocirurgia','Nutrição clínica e esportiva','Obstetrícia','Oftalmologia','Ortopedia','Otorrinolaringologia','Psicologia','Psiquiatria','Terapia integrativa','Urologia']},
  {i:'xray',off:'até 50%',t:'Exames de imagem e diagnóstico',d:'Parcelamento em até 8x no cartão de crédito.',list:['Ressonância magnética','Tomografia computadorizada','Mamografia digital','Raio-X digital','Ultrassonografia geral','Ultrassonografia obstétrica 3D e 4D','Densitometria óssea','Angiotomografia de coronárias','Ecocardiograma adulto, pediátrico e fetal','Doppler venoso e arterial','Holter, MAPA e teste ergométrico','Audiometria e imitanciometria','Emissões otoacústicas (teste da orelhinha)','Espirometria e teste cardiopulmonar','Videonasolaringoscopia e videolaringoscopia']},
  {i:'blood',off:'até 50%',t:'Exames laboratoriais',d:'Parcelamento em até 10x no cartão de crédito.',list:['Exames laboratoriais diversos','Biologia molecular','Sorologia da COVID-19','Teste do pezinho','Anatomia patológica','Exames toxicológicos']},
  {i:'gine',off:'até 10%',t:'Ginecologia e obstetrícia',d:'Consultas e procedimentos ambulatoriais.',list:['Procedimentos ambulatoriais em ginecologia','Colposcopia','Biópsias','Implantes']},
  {i:'heart',off:'até 50%',t:'Cardiologia',d:'Consultas e exames cardiológicos completos.',list:['Exames especializados em cardiologia','Testes de avaliação cardiopulmonar','Atendimento adulto e pediátrico']},
  {i:'ear',off:'até 30%',t:'Otorrinolaringologia',d:'Parcelamento em até 10x no cartão de crédito.',list:['Exames diagnósticos','Testes fonoaudiológicos','Cirurgias']},
  {i:'tooth',off:'até 20%',t:'Odontologia',d:'Do preventivo à estética dental.',list:['Procedimentos odontológicos','Ortodontia','Endodontia','Estética']},
  {i:'bone',off:'até 40%',t:'Ortopedia e terapias',d:'Parcelamento em até 10x no cartão de crédito.',list:['Órteses','Imobilização','Atendimento em fisioterapia']},
  {i:'pills',off:'até 20%',t:'Farmácias e manipulação',d:'Medicamentos, manipulados e perfumaria.',list:['Produtos manipulados','Produtos industrializados','Medicamentos','Atendimento farmacêutico gratuito']},
  {i:'glasses',off:'até 20%',t:'Óticas',d:'Parcelamento em até 10x no cartão de crédito.',list:['Armações','Lentes','Serviços óticos']},
  {i:'vaccine',off:'até 20%',t:'Vacinação',d:'Parcelamento em até 10x sem juros.',list:['Vacinas infantis','Vacinas para adultos','Vacinas para idosos','Vacinas para gestantes']},
  {i:'psi',off:'até 40%',t:'Saúde mental e bem-estar',d:'Psicoterapia, psicanálise e terapia ocupacional.',list:['Psicoterapia adulto e adolescente','Psicanálise','Terapia ocupacional','Academias e nutrição esportiva']}
];
document.getElementById('benGrid').innerHTML = benefits.map(b=>`
  <article class="ben">
    <div class="top">
      <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#0E3B1C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[b.i]}</svg></span>
      <span class="off">${b.off}</span>
    </div>
    <h4>${b.t}</h4>
    <p>${b.d}</p>
    <details><summary>Ver o que está incluso</summary><ul>${b.list.map(l=>`<li>${l}</li>`).join('')}</ul></details>
  </article>`).join('');

/* ---------- PARCEIROS ---------- */
const wa = n => `https://wa.me/${n}`;
const partners=[
 {n:'Laboratório LAMIC',c:'Laboratório',r:'Análises clínicas',off:'até 50% em exames',d:'12 unidades de coleta pelo Cariri, com parcelamento em até 10x.',links:[['WhatsApp (88) 9.8834-0130',wa('5588988340130')],['laboratoriolamic.com.br','https://www.laboratoriolamic.com.br']],addr:'Rua Padre Cícero, 759 — Centro, Juazeiro do Norte'},
 {n:'Clínica Clemir Arrais',c:'Imagem',r:'Exames de imagem',off:'até 50% em imagem',d:'3 unidades em Juazeiro do Norte, parcelamento em até 10x.',links:[['WhatsApp (88) 9.9642-4041',wa('5588996424041')],['clemirarrais.com.br','http://www.clemirarrais.com.br']],addr:'Unidades Salesianos, Centro e Pátio Cariri'},
 {n:'Unicardio Cariri',c:'Clínicas',r:'Cardiologia',off:'até 28%',d:'Consultas e exames de imagem e cardiopulmonares.',links:[['WhatsApp (88) 9.9625-8033',wa('5588996258033')],['unicardiocariri.com','http://www.unicardiocariri.com']],addr:'Rua Elísio Gonçalves de Oliveira, 120 — Triângulo, Juazeiro do Norte'},
 {n:'Ottos Otorrinolaringologia',c:'Clínicas',r:'Otorrino',off:'até 20%',d:'Descontos em consultas e exames.',links:[['WhatsApp (88) 9.9470-0808',wa('5588994700808')],['clinicaottos.com.br','http://www.clinicaottos.com.br']],addr:'Central Park — Rua Catulo da Paixão Cearense, 135, salas 1106/1107'},
 {n:'Clínica de Olhos do Cariri',c:'Clínicas',r:'Oftalmologia',off:'até 30% em consultas',d:'Central de agendamentos (88) 3512-5500.',links:[['WhatsApp (88) 9.9608-6742',wa('5588996086742')],['clinicadeolhosdocariri.com.br','http://www.clinicadeolhosdocariri.com.br']],addr:'Rua Padre Cícero, 462 — Centro, Juazeiro do Norte'},
 {n:'Urocariri',c:'Clínicas',r:'Urologia',off:'até 15%',d:'Consultas e exames especializados.',links:[['WhatsApp (88) 9.9753-4959',wa('5588997534959')]],addr:'Cariri Medical Center — Av. Eduardo Mclain, 440, sala 303'},
 {n:'Clinicare',c:'Clínicas',r:'Multiespecialidades',off:'15% à vista',d:'Especialidades médicas, exames e pequenas cirurgias.',links:[['WhatsApp (88) 9.9958-8107',wa('5588999588107')]],addr:'Office Cariri — Rua Prof.ª Maria Nilde Couto Bem, 220, salas 115/116'},
 {n:'INEC — Instituto Neurológico Endovascular do Cariri',c:'Clínicas',r:'Neuro e geriatria',off:'até 30%',d:'Neurocirurgia, neuropediatria, geriatria e ortopedia.',links:[['WhatsApp (88) 9.8150-2000',wa('5588981502000')]],addr:'Unique Empresarial — Rua Raimundo Machado da Silva, 60, sala 1103'},
 {n:'Clínica Médica Nossa Senhora das Graças',c:'Clínicas',r:'Oftalmo e otorrino',off:'até 16,67%',d:'Descontos em consultas no Crato.',links:[['WhatsApp (88) 9.8118-0142',wa('5588981180142')]],addr:'Av. Duque de Caxias, 639 — Pinto Madeira, Crato'},
 {n:'Clínica de Ortopedia do Crato',c:'Clínicas',r:'Ortopedia',off:'40% em consultas',d:'Ortopedia adulto e infantil, e 20% em exames de imagem.',links:[['WhatsApp (88) 9.9956-1694',wa('5588999561694')]],addr:'Rua 7 de Setembro, 50 — São Miguel, Crato'},
 {n:'Vittalida',c:'Clínicas',r:'Ginecologia',off:'até 10%',d:'Consultas e procedimentos ginecológicos ambulatoriais.',links:[['WhatsApp (88) 9.9331-1000',wa('5588993311000')]],addr:'Pátio Corporate Cariri — Rua Catulo da Paixão Cearense, 175'},
 {n:'Dra. Daiany Dantas Varela',c:'Profissionais',r:'Ginecologia e obstetrícia',off:'até 15%',d:'Consultas, exames e procedimentos; parcelamento em até 3x.',links:[['WhatsApp (88) 9.9259-0514',wa('5588992590514')]],addr:'Rua Júlio Sampaio, 365 — Frei Damião, Milagres'},
 {n:'Dr. Ananias Arrais',c:'Profissionais',r:'Cardiologia e ecocardiografia',off:'até 16%',d:'Consultas, ecocardiograma, MAPA, holter e doppler de carótidas.',links:[['WhatsApp (88) 9.9294-0199',wa('5588992940199')]],addr:'Cardio Care — Rua Manoel Morais, 183, Campos Sales'},
 {n:'Dr. Josenildo Linhares',c:'Profissionais',r:'Endocrinologia e metabologia',off:'até 18%',d:'Não aceita cartão de crédito.',links:[['WhatsApp (88) 9.9610-6054',wa('5588996106054')]],addr:'Rua Padre Cícero, 781, 1º andar, sala 102 — Centro, Juazeiro do Norte'},
 {n:'Nefroimagem',c:'Clínicas',r:'Nefro, reumato e nutrição',off:'10% à vista',d:'Nutricionista, nefrologista e reumatologista.',links:[['WhatsApp (88) 9.9987-5511',wa('5588999875511')]],addr:'Pátio Cariri — Rua Catulo da Paixão Cearense, 175, sala 1402'},
 {n:'Nathalya Matias',c:'Profissionais',r:'Nutrição — saúde da mulher',off:'30% em consultas',d:'Consulta pelo Viva+ a R$ 180,00.',links:[['WhatsApp (88) 9.8834-0130',wa('5588988340130')]],addr:'Rua Padre Cícero, 759 — Centro, Juazeiro do Norte'},
 {n:'Joíza Matias',c:'Profissionais',r:'Nutrição — CRN 34934/P',off:'Desconto exclusivo',d:'Atendimento nutricional para associados.',links:[['WhatsApp (88) 9.9791-9319',wa('5588997919319')]],addr:'Rua Delmiro Gouveia, 517, 1º andar — Salesianos, Juazeiro do Norte'},
 {n:'Nutriclínica',c:'Profissionais',r:'Nutrição clínica',off:'30% de desconto',d:'Consultoria personalizada, planos alimentares e suporte pós-consulta.',links:[['WhatsApp (88) 9.9990-7306',wa('5588999907306')]],addr:'Unique Condominium, sala 2003 — Triângulo, Juazeiro do Norte'},
 {n:'Maria Eduarda Bonfim',c:'Bem-estar',r:'Psicologia — CRP 11/19812',off:'15% de desconto',d:'Psicoterapia para adolescentes e adultos, presencial e online.',links:[['WhatsApp (88) 9.9791-5697',wa('5588997915697')]],addr:'Rua Padre Cícero, 759 — Centro, Juazeiro do Norte'},
 {n:'Novamente — Complexo Terapêutico',c:'Bem-estar',r:'Psicoterapia',off:'até 40%*',d:'Descontos nas sessões de psicoterapia. *Consulte condições.',links:[['WhatsApp (88) 9.9628-2203',wa('5588996282203')]],addr:'Rua José Arnaldo Jatay Pedrosa, 917 — Jardim Gonzaga, Juazeiro do Norte'},
 {n:'Adalmiran Vasconcelos',c:'Bem-estar',r:'Psicanálise',off:'20% em consultas',d:'Consultas especializadas em psicanálise.',links:[['WhatsApp (88) 9.9214-7876',wa('5588992147876')]],addr:'Unique Empresarial — Torre Trade, 11º andar, sala 1105'},
 {n:'Larissa R. Costa',c:'Bem-estar',r:'Terapia ocupacional',off:'15% de desconto',d:'Pagamento via PIX.',links:[['WhatsApp (88) 9.9838-0352',wa('5588998380352')]],addr:'Rua Arnóbio Barcelar Caneca, 696, lojas 03 e 04 — Lagoa Seca'},
 {n:'LAMIC Vacinas',c:'Vacinas',r:'Imunização',off:'até 20%',d:'Parcelamento em até 10x sem juros no cartão de crédito.',links:[['WhatsApp (88) 9.9740-9991',wa('5588997409991')],['lamicvacinas.com.br','https://lamicvacinas.com.br']],addr:'Rua Padre Cícero, 759 — Juazeiro do Norte'},
 {n:'Farmácia Center Farma',c:'Farmácias',r:'Drogaria',off:'até 20%',d:'Descontos em medicamentos.',links:[['WhatsApp (88) 9.9371-6853',wa('5588993716853')]],addr:'Rua Radialista Coelho Alves, 460 — Tiradentes, Juazeiro do Norte'},
 {n:'Farmácia MedFarma',c:'Farmácias',r:'Drogaria',off:'20% a 50%',d:'20% em medicamentos e até 50% em fraldas, perfumaria e dermocosméticos.',links:[['WhatsApp (88) 9.9948-6264',wa('5588999486264')]],addr:'Rua Sousa Presa, 107 — Centro, Milagres'},
 {n:'Farmácia Confiança',c:'Farmácias',r:'Drogaria',off:'até 20%',d:'Parcelamento em até 4x no cartão de crédito.',links:[['WhatsApp (88) 9.9436-8196',wa('5588994368196')]],addr:'Juazeiro do Norte — (88) 3530-1208'},
 {n:'Roval Farmácia de Manipulação',c:'Farmácias',r:'Manipulação',off:'até 15%',d:'15% à vista em manipulados acima de R$ 100 e 5% a 10% em revenda.',links:[['WhatsApp Juazeiro (88) 9.9916-2629',wa('5588999162629')],['WhatsApp Cariri (88) 9.9634-7726',wa('5588996347726')]],addr:'Juazeiro do Norte e região'},
 {n:'Kariri Fórmulas',c:'Farmácias',r:'Manipulação',off:'15% de desconto',d:'Desconto sobre o valor original dos manipulados.',links:[['WhatsApp (88) 9.9974-6060',wa('5588999746060')]],addr:'Rua Catulo da Paixão Cearense, 175 — Juazeiro / Rua Senador Pompeu, 288 — Crato'},
 {n:'Óticas Diniz Juazeiro do Norte',c:'Óticas',r:'Ótica',off:'até 20%',d:'Descontos em lentes e armações.',links:[['WhatsApp (88) 9.8140-2066',wa('5588981402066')]],addr:'Rua São Pedro, 630 — Centro, Juazeiro do Norte'},
 {n:'Cleótica',c:'Óticas',r:'Ótica',off:'até 20%',d:'Parcelamento em até 10x no carnê e no cartão de crédito.',links:[['WhatsApp (88) 9.9288-9128',wa('5588992889128')]],addr:'Araripe — CE'},
 {n:'Cariri Med',c:'Bem-estar',r:'Artigos médicos e ortopédicos',off:'5% a 10%',d:'Aluguel e manutenção de equipamentos com 10% de desconto; até 5x no cartão.',links:[['WhatsApp (88) 9970-5500',wa('558899705500')]],addr:'Av. Padre Cícero, 3191-A — Muriti, Crato'},
 {n:'Nutrishop',c:'Bem-estar',r:'Suplementos',off:'15% na loja',d:'Exceções: marcas PACCO e Nutrição Essencial e itens promocionais do mês.',links:[['WhatsApp Juazeiro (88) 9.9714-4832',wa('5588997144832')],['WhatsApp Crato (88) 9.8171-3408',wa('5588981713408')]],addr:'Juazeiro do Norte e Crato'},
 {n:'RL Nutrisport',c:'Bem-estar',r:'Suplementos e fitoterápicos',off:'até 13%',d:'Suplementos, acessórios e fitoterápicos.',links:[['WhatsApp (88) 9.8159-2463',wa('5588981592463')]],addr:'Rua Manoel Lopes Bezerra, 15, sala 02 — Lagoa Seca'},
 {n:'Health Suplementos',c:'Bem-estar',r:'Suplementos',off:'até 20%',d:'Pagamentos à vista ou no cartão.',links:[['WhatsApp (88) 9.9216-5881',wa('5588992165881')]],addr:'Juazeiro do Norte — CE'},
 {n:'Academia ViaFit',c:'Academias',r:'Musculação e coletivas',off:'7,7% no plano anual',d:'Plano anual pago por recorrência.',links:[['WhatsApp (88) 9.9688-5130',wa('5588996885130')],['viafitacademia.com.br','https://www.viafitacademia.com.br']],addr:'Av. Leão Sampaio, 1270 — Lagoa Seca, Juazeiro do Norte'},
 {n:'Academia R3',c:'Academias',r:'Musculação',off:'20% na musculação',d:'Desconto para associados Viva+.',links:[['WhatsApp (88) 9.9862-9806',wa('5588998629806')]],addr:'Rua José de Matos França, 100 — Lagoa Seca, Juazeiro do Norte'},
 {n:'BandsFit',c:'Academias',r:'Modalidades coletivas',off:'50% na 1ª parcela',d:'Spinning, dance, training, workout, core, lutas, pilates, GAP e flow.',links:[['WhatsApp (88) 9.8872-7599',wa('5588988727599')],['academiabandsfit.com.br','https://academiabandsfit.com.br/']],addr:'Av. Padre Cícero, 1116 — São Miguel, Crato'},
 {n:'Balneário do Caldas',c:'Lazer',r:'Lazer e hospedagem',off:'50% na entrada',d:'Até 25% de desconto nas diárias do Hotel das Fontes, em Barbalha.',links:[['WhatsApp (88) 9.8166-8020',wa('5588981668020')],['balneariodocaldas.com.br','https://balneariodocaldas.com.br']],addr:'Barbalha — CE'},
 {n:'Rockfeller Language Center',c:'Lazer',r:'Idiomas',off:'35% nas mensalidades',d:'Desconto em todo o curso de inglês.',links:[['WhatsApp (88) 9.9949-9825',wa('5588999499825')],['rockfellerjuazeiro.com.br','https://rockfellerjuazeiro.com.br/']],addr:'Av. Eduardo McLain, 19 — Santa Tereza, Juazeiro do Norte'},
 {n:'Siaht Calçados e Acessórios',c:'Lazer',r:'Varejo',off:'15% de desconto',d:'Parcelamento em até 12x sem juros.',links:[['WhatsApp (88) 9.9365-8358',wa('5588993658358')]],addr:'Travessa Jacob Félix, 207 — Centro, Milagres'}
];
const cats=['Todos',...[...new Set(partners.map(p=>p.c))]];
let active='Todos', expanded=false;
const filters=document.getElementById('filters'),grid=document.getElementById('netGrid'),
      moreBtn=document.getElementById('moreBtn'),count=document.getElementById('netCount');
filters.innerHTML=cats.map(c=>`<button class="chipf" data-c="${c}" aria-pressed="${c===active}">${c}</button>`).join('');
function initials(n){return n.replace(/[^A-Za-zÀ-ÿ ]/g,' ').trim().split(/\s+/).filter(w=>w.length>2).slice(0,2).map(w=>w[0]).join('').toUpperCase()}
function render(){
  const list=partners.filter(p=>active==='Todos'||p.c===active);
  const show=expanded?list:list.slice(0,9);
  grid.innerHTML=show.map(p=>`
    <article class="net">
      <span class="mono">${IMAGES.logos[p.n]?`<img src="${IMAGES.logos[p.n]}" alt="${p.n}" loading="lazy">`:initials(p.n)}</span>
      <h4>${p.n}</h4>
      <span class="role">${p.r}</span>
      <p>${p.d}</p>
      <span class="off">${p.off}</span>
      <div class="contact">
        ${p.links.map(l=>`<a href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join('')}
        <span>${p.addr}</span>
      </div>
    </article>`).join('');
  moreBtn.style.display=list.length>9?'inline-flex':'none';
  moreBtn.textContent=expanded?'Ver menos':`Ver todos os ${list.length} parceiros`;
  count.textContent=`${partners.length} parceiros credenciados no Cariri.`;
}
filters.addEventListener('click',e=>{
  const b=e.target.closest('.chipf'); if(!b) return;
  active=b.dataset.c; expanded=false;
  filters.querySelectorAll('.chipf').forEach(x=>x.setAttribute('aria-pressed',x===b));
  render();
});
moreBtn.addEventListener('click',()=>{expanded=!expanded;render()});
render();
