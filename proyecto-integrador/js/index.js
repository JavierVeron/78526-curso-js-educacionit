// Variables Globales
const turnosMedicos = [
  {
    id: 1,
    nombrePaciente: "Ana García",
    fecha: "2025-08-01",
    hora: "09:00",
    especialidad: "Cardiología"
  },
  {
    id: 2,
    nombrePaciente: "Juan Pérez",
    fecha: "2025-08-01",
    hora: "09:30",
    especialidad: "Dermatología"
  },
  {
    id: 3,
    nombrePaciente: "María López",
    fecha: "2025-08-01",
    hora: "10:00",
    especialidad: "Pediatría"
  },
  {
    id: 4,
    nombrePaciente: "Carlos Rodríguez",
    fecha: "2025-08-02",
    hora: "10:30",
    especialidad: "Oftalmología"
  },
  {
    id: 5,
    nombrePaciente: "Laura Fernández",
    fecha: "2025-08-02",
    hora: "11:00",
    especialidad: "Traumatología"
  },
  {
    id: 6,
    nombrePaciente: "Pedro Gómez",
    fecha: "2025-08-02",
    hora: "11:30",
    especialidad: "Ginecología"
  },
  {
    id: 7,
    nombrePaciente: "Sofía Martínez",
    fecha: "2025-08-03",
    hora: "09:00",
    especialidad: "Neurología"
  },
  {
    id: 8,
    nombrePaciente: "Diego Sánchez",
    fecha: "2025-08-03",
    hora: "09:30",
    especialidad: "Urología"
  },
  {
    id: 9,
    nombrePaciente: "Valeria Díaz",
    fecha: "2025-08-03",
    hora: "10:00",
    especialidad: "Endocrinología"
  },
  {
    id: 10,
    nombrePaciente: "Gonzalo Torres",
    fecha: "2025-08-04",
    hora: "10:30",
    especialidad: "Gastroenterología"
  },
  {
    id: 11,
    nombrePaciente: "Martina Ruiz",
    fecha: "2025-08-04",
    hora: "11:00",
    especialidad: "Psicología"
  },
  {
    id: 12,
    nombrePaciente: "Facundo Morales",
    fecha: "2025-08-04",
    hora: "11:30",
    especialidad: "Nutrición"
  },
  {
    id: 13,
    nombrePaciente: "Camila Navarro",
    fecha: "2025-08-05",
    hora: "09:00",
    especialidad: "Cardiología"
  },
  {
    id: 14,
    nombrePaciente: "Lucas Castro",
    fecha: "2025-08-05",
    hora: "09:30",
    especialidad: "Dermatología"
  },
  {
    id: 15,
    nombrePaciente: "Brenda Herrera",
    fecha: "2025-08-05",
    hora: "10:00",
    especialidad: "Pediatría"
  },
  {
    id: 16,
    nombrePaciente: "Manuel Giménez",
    fecha: "2025-08-06",
    hora: "10:30",
    especialidad: "Oftalmología"
  },
  {
    id: 17,
    nombrePaciente: "Andrea Ponce",
    fecha: "2025-08-06",
    hora: "11:00",
    especialidad: "Traumatología"
  },
  {
    id: 18,
    nombrePaciente: "Ricardo Acosta",
    fecha: "2025-08-06",
    hora: "11:30",
    especialidad: "Ginecología"
  },
  {
    id: 19,
    nombrePaciente: "Florencia Vera",
    fecha: "2025-08-07",
    hora: "09:00",
    especialidad: "Neurología"
  },
  {
    id: 20,
    nombrePaciente: "Javier Ríos",
    fecha: "2025-08-07",
    hora: "09:30",
    especialidad: "Urología"
  }
];
let modoEdicion = false;
let idTurno = 0;


// Funciones
const renderizarTabla = () => {
  const tablaTurnosMedicos = document.getElementById("tablaTurnosMedicos");
  tablaTurnosMedicos.innerHTML = "";

  // Iteración for..of, forEach o for tradicional
  for (const turno of turnosMedicos) {
      const fila = document.createElement("tr");
      
      // Opción #1 creando un elemento html y rellenando con innerHTML
      /* fila.innerHTML = `<td>${turno.id}</td>
      <td>${turno.nombrePaciente}</td>
      <td>${turno.fecha}</td>
      <td>${turno.hora}</td>
      <td>${turno.especialidad}</td>`; */

      // Opción #2 creado cada uno de los elementos html
      for (const propiedad in turno) {
          const celda = document.createElement("td");
          celda.innerHTML = turno[propiedad];
          fila.appendChild(celda);
      }

      const celda = document.createElement("td");
      celda.className = "text-end";
      const botonEditar = document.createElement("button");
      botonEditar.className = "btn btn-warning btn-sm fw-bold mx-1";
      botonEditar.innerHTML = "Editar";
      botonEditar.onclick = () => {
        editarTurno(turno.id);
      }
      celda.appendChild(botonEditar);
      const botonEliminar = document.createElement("button");
      botonEliminar.className = "btn btn-danger btn-sm fw-bold mx-1";
      botonEliminar.innerHTML = "Eliminar";
      botonEliminar.onclick = () => {
        eliminarTurno(turno.id);
      }
      celda.appendChild(botonEliminar);
      fila.appendChild(celda);

      // Agrego la fila al contenedor tbody
      tablaTurnosMedicos.appendChild(fila);
  }
}

const agregarTurno = (event) => {
  event.preventDefault();
  const form = document.getElementById("formAgregarTurno");
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const especialidad = document.getElementById("especialidad").value;

  if (modoEdicion) {
    modoEdicion = false;
    const turno = turnosMedicos.find(item => item.id == idTurno);
    turno.nombrePaciente = nombre;
    turno.fecha = fecha;
    turno.hora = hora;
    turno.especialidad = especialidad;
    console.log("Se editó el Turno #" + idTurno + "!");
  } else {
    const id = turnosMedicos.length + 1;
    const turno = {id, nombre, fecha, hora, especialidad};
    turnosMedicos.push(turno);
    console.log("Se agregó el Turno #" + id + "!");
  }

  form.reset();
  renderizarTabla();
}

const editarTurno = (id) => {
  modoEdicion = true;
  idTurno = id;
  const turno = turnosMedicos.find(item => item.id == id);
  document.getElementById("nombre").value = turno.nombrePaciente;
  document.getElementById("fecha").value = turno.fecha;
  document.getElementById("hora").value = turno.hora;
  document.getElementById("especialidad").value = turno.especialidad;
}

const eliminarTurno = (id) => {  
  const confirmar = confirm("Desea eliminar el Turno #" + id + "?");

  if (confirmar) {
    const pos = turnosMedicos.findIndex(item => item.id == id);    
    turnosMedicos.splice(pos, 1);
    renderizarTabla();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarTabla();
})