// Websocket
const socket = new WebSocket("https://echo.websocket.org/");
//console.log(socket);

// Abrimos conexión
socket.addEventListener('open', () => {
    console.log('Conexión establecida');
});

// Escuchamos el canal "message"
socket.addEventListener('message', (event) => {
    console.log('Mensaje recibido:', event.data);
});

// Ponemos un listener en caso de error
socket.addEventListener('error', (error) => {
    console.error('Error en WebSocket:', error);
});

// Ponemos un listener en caso de que se cierre la conexión
socket.addEventListener('close', (error) => {
    console.log('Conexión cerrada');
});

// Enviar datos
//socket.send('Hola desde el cliente'); // Enviar un String
/* const mensaje = { tipo: 'saludo', contenido: '¡Hola!' };
socket.send(JSON.stringify(mensaje)); */

// Enviamos datos y capturamos el evento de envío de datos
socket.onopen = () => {
    socket.send(JSON.stringify({ usuario: 'Ana', mensaje: 'Hola!' }));
};
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(`${data.usuario}: ${data.mensaje}`);
};

// Cierro la conexión
//socket.close();
socket.close(1000, 'Normal closure');