window.onload = () => {
    const infoButton = document.getElementById("show-info");
    const closeButton = document.getElementById("close-info");
    const infoPanel = document.getElementById("info-panel");

    // Evento para mostrar la información de la propiedad
    infoButton.addEventListener("click", showInfoPanel);

    // Evento para cerrar el panel
    closeButton.addEventListener("click", hideInfoPanel);

    // Datos de los modelos 3D y su información
    const modelos = {
        comprar: {
            modelo: "./assets/house/scene.gltf",
            informacion: {
                titulo: "Casa en Venta",
                direccion: "Calle Falsa 123",
                color: "Blanco con detalles en azul",
                pisos: "2",
                estado: "En Venta",
                precio: "$2,500,000 MXN"
            },
            posicion: "0 0 -6", // Posición específica para la casa
            rotacion: "0 270 0", // Rotación específica para la casa
            escala: "0.5 0.5 0.5" // Escala específica para la casa
        },
        alquiler: {
            modelo: "./assets/depa/scene.gltf",
            informacion: {
                titulo: "Departamento en Alquiler",
                direccion: "Avenida Siempre Viva 742",
                color: "Gris con detalles en blanco",
                pisos: "1",
                estado: "En Alquiler",
                precio: "$15,000 MXN/mes"
            },
            posicion: "0 0 -6", // Posición específica para el departamento
            rotacion: "0 90 0", // Rotación específica para el departamento
            escala: "0.35 0.35 0.35" // Escala reducida para el departamento
        },
        analizar: {
            modelo: "./assets/analisis/scene.gltf",
            informacion: {
                titulo: "Análisis de la Propiedad",
                direccion: "Calle Desconocida 404",
                color: "Transparente",
                pisos: "N/A",
                estado: "En Análisis",
                precio: "Consultar"
            },
            posicion: "0 0 -6", // Posición específica para el análisis
            rotacion: "0 0 0", // Rotación específica para el análisis
            escala: "0.5 0.5 0.5" // Escala específica para el análisis
        }
    };

    // Función para cambiar el modelo 3D y la información
    function cambiarModeloYInformacion(modeloKey) {
        const modeloData = modelos[modeloKey];

        // Obtener la entidad del modelo actual
        const modeloActual = document.getElementById("modelo-3d");

        if (modeloActual) {
            // Actualizar los atributos del modelo existente
            modeloActual.setAttribute("gltf-model", modeloData.modelo);
            modeloActual.setAttribute("scale", modeloData.escala);
            modeloActual.setAttribute("rotation", modeloData.rotacion);
            modeloActual.setAttribute("position", modeloData.posicion);
        } else {
            // Si no existe, crear una nueva entidad
            const scene = document.querySelector("a-scene");
            const nuevoModelo = document.createElement("a-entity");
            nuevoModelo.setAttribute("id", "modelo-3d");
            nuevoModelo.setAttribute("gltf-model", modeloData.modelo);
            nuevoModelo.setAttribute("gps-entity-place", "latitude: 19.4412213460755; longitude: -99.33543031912545;");
            nuevoModelo.setAttribute("scale", modeloData.escala);
            nuevoModelo.setAttribute("rotation", modeloData.rotacion);
            nuevoModelo.setAttribute("position", modeloData.posicion);
            nuevoModelo.setAttribute("look-at", "[gps-camera]");
            nuevoModelo.setAttribute("animation-mixer", "");

            scene.appendChild(nuevoModelo);
        }

        // Actualizar la información del panel
        document.getElementById("info-titulo").textContent = modeloData.informacion.titulo;
        document.getElementById("info-direccion").textContent = modeloData.informacion.direccion;
        document.getElementById("info-color").textContent = modeloData.informacion.color;
        document.getElementById("info-pisos").textContent = modeloData.informacion.pisos;
        document.getElementById("info-estado").textContent = modeloData.informacion.estado;
        document.getElementById("info-precio").textContent = modeloData.informacion.precio;
    }

    // Eventos para los botones del header
    document.getElementById("btn-comprar").addEventListener("click", () => {
        cambiarModeloYInformacion("comprar");
    });

    document.getElementById("btn-alquiler").addEventListener("click", () => {
        cambiarModeloYInformacion("alquiler");
    });

    document.getElementById("btn-analizar").addEventListener("click", () => {
        cambiarModeloYInformacion("analizar");
    });

    // Cargar el modelo inicial (casa) al cargar la página
    cambiarModeloYInformacion("comprar");
};

function showInfoPanel() {
    const infoPanel = document.getElementById("info-panel");
    infoPanel.style.bottom = "0";
    infoPanel.setAttribute("aria-hidden", "false");
}

function hideInfoPanel() {
    const infoPanel = document.getElementById("info-panel");
    infoPanel.style.bottom = "-100%";
    infoPanel.setAttribute("aria-hidden", "true");
}
