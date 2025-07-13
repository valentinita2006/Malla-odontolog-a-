const ramos = [
  // PRIMER AÑO
  { nombre: "Química general y orgánica", requisitos: [], desbloquea: ["Bioquímica general"] },
  { nombre: "Biología celular", requisitos: [], desbloquea: ["Bioquímica general", "Biología molecular y genética", "Histoembriologia"] },
  { nombre: "Anatomía humana", requisitos: [], desbloquea: ["Anatomía humana cabeza y cuello"] },
  { nombre: "Matemáticas y física aplicada", requisitos: [], desbloquea: ["Estadística"] },
  { nombre: "Introducción a la odontologia", requisitos: [], desbloquea: ["Promoción y prevención en salud"] },
  { nombre: "Estrategias para el aprendizaje", requisitos: [], desbloquea: ["Antropología"] },

  { nombre: "Bioquímica general", requisitos: ["Química general y orgánica", "Biología celular"], desbloquea: ["Farmacología 1", "Cariologia y microbiología oral"] },
  { nombre: "Biología molecular y genética", requisitos: ["Biología celular"], desbloquea: ["Microbiología general", "Fisiología humana"] },
  { nombre: "Anatomía humana cabeza y cuello", requisitos: ["Anatomía humana"], desbloquea: ["Fisiología humana", "Histologia oral", "Preclinico y materiales dentales 1", "Fisiología oral"] },
  { nombre: "Histoembriologia", requisitos: ["Biología celular"], desbloquea: ["Histologia oral"] },
  { nombre: "Promoción y prevención en salud", requisitos: ["Introducción a la odontologia"], desbloquea: ["Preclinico y materiales dentales 1", "Salud poblacional"] },
  { nombre: "Antropología", requisitos: ["Estrategias para el aprendizaje"], desbloquea: [] },

  // SEGUNDO AÑO
  { nombre: "Ética", requisitos: [], desbloquea: ["Electivo de formación integral 1"] },
  { nombre: "Fisiología humana", requisitos: ["Biología molecular y genética", "Anatomía humana cabeza y cuello"], desbloquea: ["Patología general", "Fisiología oral", "Farmacología 1"] },
  { nombre: "Microbiología general", requisitos: ["Biología molecular y genética"], desbloquea: [] },
  { nombre: "Histologia oral", requisitos: ["Histoembriologia", "Anatomía humana cabeza y cuello"], desbloquea: ["Cariologia y microbiología oral"] },
  { nombre: "Preclinico y materiales dentales 1", requisitos: ["Promoción y prevención en salud", "Anatomía humana cabeza y cuello"], desbloquea: ["Preclinico y materiales dentales 2", "Simulación de clínica integral 1"] },
  { nombre: "Salud poblacional", requisitos: ["Promoción y prevención en salud"], desbloquea: [] },

  { nombre: "Electivo de formación integral 1", requisitos: ["Ética"], desbloquea: [] },
  { nombre: "Farmacología 1", requisitos: ["Bioquímica general", "Fisiología humana"], desbloquea: ["Farmacología 2"] },
  { nombre: "Fisiología oral", requisitos: ["Fisiología humana", "Anatomía humana cabeza y cuello"], desbloquea: ["Imagenologia diagnóstica 1", "Inició a la clínica integral 1", "Simulación clínica integral 2"] },
  { nombre: "Cariologia y microbiología oral", requisitos: ["Bioquímica general", "Histologia oral"], desbloquea: ["Patología oral 1", "Inició a la clínica integral 1", "Simulación clínica integral 2", "Preclinico y rehabilitación oral 1"] },
  { nombre: "Patología general", requisitos: ["Fisiología humana"], desbloquea: ["Patología oral 1"] },
  { nombre: "Preclinico y materiales dentales 2", requisitos: ["Preclinico y materiales dentales 1"], desbloquea: ["Imagenologia diagnóstica 1", "Inició a la clínica integral 1", "Simulación clínica integral 2", "Preclinico y rehabilitación oral 1"] },
  { nombre: "Simulación de clínica integral 1", requisitos: ["Preclinico y materiales dentales 1"], desbloquea: ["Inició a la clínica integral 1", "Simulación clínica integral 2", "Imagenologia diagnóstica 1", "Preclinico y rehabilitación oral 1", "Bioetica"] },

  // TERCER AÑO
  { nombre: "Imagenologia diagnóstica 1", requisitos: ["Fisiología oral", "Preclinico y materiales dentales 2", "Simulación de clínica integral 1"], desbloquea: ["Imagenologia diagnóstica 2"] },
  { nombre: "Farmacología 2", requisitos: ["Farmacología 1"], desbloquea: [] },
  { nombre: "Patología oral 1", requisitos: ["Cariologia y microbiología oral", "Patología general"], desbloquea: ["Patología oral 2"] },
  { nombre: "Estadística", requisitos: ["Matemáticas y física aplicada"], desbloquea: [] },
  { nombre: "Inició a la clínica integral 1", requisitos: ["Fisiología oral", "Cariologia y microbiología oral", "Preclinico y materiales dentales 2", "Simulación de clínica integral 1"], desbloquea: ["Inició a la clínica integral 2"] },
  { nombre: "Preclinico y rehabilitación oral 1", requisitos: ["Cariologia y microbiología oral", "Preclinico y materiales dentales 2", "Simulación de clínica integral 1"], desbloquea: ["Preclinico y rehabilitación oral 2", "Simulación clínica integral 3", "Introducción a la clínica"] },
  { nombre: "Simulación clínica integral 2", requisitos: ["Fisiología oral", "Cariologia y microbiología oral", "Preclinico y materiales dentales 2", "Simulación de clínica integral 1"], desbloquea: ["Preclinico y rehabilitación oral 2", "Simulación clínica integral 3", "Introducción a la clínica"] },
  { nombre: "Bioetica", requisitos: ["Simulación de clínica integral 1"], desbloquea: [] },

  { nombre: "Imagenologia diagnóstica 2", requisitos: ["Imagenologia diagnóstica 1"], desbloquea: [] },
  { nombre: "Electivo de formación integral 2", requisitos: [], desbloquea: [] },
  { nombre: "Patología oral 2", requisitos: ["Patología oral 1"], desbloquea: [] },
  { nombre: "Inició a la clínica integral 2", requisitos: ["Inició a la clínica integral 1"], desbloquea: [] },
  { nombre: "Preclinico y rehabilitación oral 2", requisitos: ["Preclinico y rehabilitación oral 1", "Simulación clínica integral 2"], desbloquea: [] },
  { nombre: "Simulación clínica integral 3", requisitos: ["Preclinico y rehabilitación oral 1", "Simulación clínica integral 2"], desbloquea: [] },
  { nombre: "Introducción a la clínica", requisitos: ["Preclinico y rehabilitación oral 1", "Simulación clínica integral 2"], desbloquea: [] },
];

const mallaContainer = document.getElementById("malla");

function renderMalla() {
  mallaContainer.innerHTML = "";
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";

    const requisitosCumplidos = ramo.requisitos.every(req =>
      ramos.find(r => r.nombre === req)?.estado === "aprobado"
    );

    if (!ramo.requisitos.length || requisitosCumplidos) {
      if (ramo.estado !== "aprobado") {
        ramo.estado = "activo";
      }
    } else {
      ramo.estado = "bloqueado";
    }

    if (ramo.estado === "bloqueado") div.classList.add("bloqueado");
    if (ramo.estado === "aprobado") div.classList.add("aprobado");

    div.textContent = ramo.nombre;
    div.onclick = () => {
      if (ramo.estado === "bloqueado") return;
      ramo.estado = "aprobado";
      renderMalla();
    };
    mallaContainer.appendChild(div);
  });
}

renderMalla();
