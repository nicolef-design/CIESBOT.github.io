// ... INFORMACIÓN PRINCIPAL DE CIESBOT ... //

const CIESBOT = {

    nombre: "CIESBOT",

    creadora: "Prof. Nicole",

    institucion: "CIES Montessori",

    especialidad: "Robótica",

    creadoraDescripcion:
        "La Prof. Nicole es técnico en Desarrollo e Implementación de Aplicaciones Informáticas, estudiante de Informática Gerencial y también estudiante del ITLA y del INFOTEP."

};


// ... ELEMENTOS DE LA INTERFAZ ... //

const chat = document.getElementById("chat");

const userInput = document.getElementById("userInput");

const sendButton = document.getElementById("sendButton");

const typing = document.getElementById("typing");


// ... CONOCIMIENTOS SOBRE ROBÓTICA ... //

const roboticsKnowledge = [

    {
        keywords: [
            "que es robotica",
            "robotica",
            "sobre robotica"
        ],

        response:
            "La robótica es un área de la tecnología que combina programación, electrónica, mecánica y diseño para crear y controlar robots y sistemas automatizados."
    },

    {
        keywords: [
            "que es un robot",
            "que son los robots",
            "robot"
        ],

        response:
            "Un robot es una máquina programable capaz de realizar acciones siguiendo instrucciones. Algunos robots pueden utilizar sensores para percibir su entorno y motores o actuadores para interactuar con él."
    },

    {
        keywords: [
            "para que sirve la robotica",
            "utilidad de la robotica"
        ],

        response:
            "La robótica puede utilizarse para resolver problemas, automatizar tareas, explorar lugares peligrosos, apoyar procesos médicos e industriales y desarrollar habilidades de programación, electrónica y pensamiento lógico."
    },

    {
        keywords: [
            "tipos de robots",
            "tipo de robot",
            "clases de robots"
        ],

        response:
            "Existen muchos tipos de robots. Algunos ejemplos son los robots industriales, móviles, educativos, médicos, exploradores, colaborativos y humanoides."
    },

    {
        keywords: [
            "robot humanoide",
            "humanoide"
        ],

        response:
            "Un robot humanoide es un robot diseñado con características inspiradas en el cuerpo humano. Puede tener cabeza, brazos, piernas o movimientos similares a los de una persona."
    },

    {
        keywords: [
            "robot industrial",
            "robots industriales"
        ],

        response:
            "Los robots industriales se utilizan principalmente para realizar tareas repetitivas o precisas en fábricas, como ensamblar, transportar, soldar o manipular objetos."
    },

    {
        keywords: [
            "robot educativo",
            "robots educativos"
        ],

        response:
            "Los robots educativos están diseñados para aprender mediante la construcción, programación y experimentación. Son excelentes herramientas para desarrollar pensamiento lógico y resolución de problemas."
    }

];


// ... CONOCIMIENTOS SOBRE SENSORES ... //

const sensorKnowledge = [

    {
        keywords: [
            "que es un sensor",
            "sensor",
            "sensores"
        ],

        response:
            "Un sensor es un componente que permite detectar información del entorno. Dependiendo del sensor, puede detectar luz, distancia, temperatura, movimiento, sonido, presión o contacto."
    },

    {
        keywords: [
            "sensor ultrasonico",
            "ultrasonico"
        ],

        response:
            "Un sensor ultrasónico utiliza ondas de sonido para calcular la distancia entre el sensor y un objeto. Es muy utilizado en proyectos de robótica."
    },

    {
        keywords: [
            "sensor de luz",
            "ldr",
            "fotoresistencia"
        ],

        response:
            "Un sensor de luz permite detectar cambios en la cantidad de luz del entorno. Una fotoresistencia o LDR es un ejemplo muy común."
    },

    {
        keywords: [
            "sensor de movimiento",
            "movimiento"
        ],

        response:
            "Un sensor de movimiento permite detectar cambios o presencia de objetos o personas. Dependiendo del proyecto, pueden utilizarse diferentes tecnologías para conseguirlo."
    }

];


// ... CONOCIMIENTOS SOBRE MOTORES Y ACTUADORES ... //

const motorKnowledge = [

    {
        keywords: [
            "motor",
            "motores"
        ],

        response:
            "Un motor es un dispositivo que transforma energía eléctrica en movimiento. En robótica puede utilizarse para mover ruedas, brazos, hélices y diferentes mecanismos."
    },

    {
        keywords: [
            "actuador",
            "actuadores"
        ],

        response:
            "Un actuador es un componente que produce una acción física. Los motores, servomotores y otros mecanismos pueden funcionar como actuadores."
    },

    {
        keywords: [
            "servomotor",
            "servo"
        ],

        response:
            "Un servomotor permite controlar con bastante precisión la posición de un eje. Se utiliza mucho en brazos robóticos y mecanismos donde se necesita controlar el movimiento."
    }

];


// ... CONOCIMIENTOS SOBRE ARDUINO ... //

const arduinoKnowledge = [

    {
        keywords: [
            "arduino",
            "que es arduino"
        ],

        response:
            "Arduino es una plataforma de hardware y software muy utilizada para aprender electrónica y programación. Una placa Arduino puede recibir información de sensores y controlar componentes como luces, motores y servomotores."
    },

    {
        keywords: [
            "placa arduino",
            "tarjeta arduino"
        ],

        response:
            "Una placa Arduino contiene un microcontrolador y diferentes conexiones que permiten conectar sensores, actuadores y otros componentes electrónicos."
    }

];


// ... CONOCIMIENTOS SOBRE TINKERCAD ... //

const tinkercadKnowledge = [

    {
        keywords: [
            "tinkercad",
            "tinker cad"
        ],

        response:
            "Tinkercad es una plataforma en línea que permite crear diseños 3D y realizar simulaciones de circuitos electrónicos. Es muy útil para comenzar a experimentar con electrónica y robótica de forma virtual."
    },

    {
        keywords: [
            "circuito en tinkercad",
            "simulacion en tinkercad",
            "simular circuito"
        ],

        response:
            "En Tinkercad puedes construir circuitos virtuales conectando componentes como baterías, resistencias, LEDs, interruptores, sensores, motores y placas Arduino. Después puedes simular su funcionamiento."
    }

];


// ... CONOCIMIENTOS SOBRE PROGRAMACIÓN ... //

const programmingKnowledge = [

    {
        keywords: [
            "programacion",
            "programar"
        ],

        response:
            "Programar significa crear instrucciones que una computadora o dispositivo puede interpretar para realizar una tarea. En robótica, la programación permite controlar cómo debe comportarse un robot."
    },

    {
        keywords: [
            "codigo",
            "código"
        ],

        response:
            "El código es el conjunto de instrucciones que escribimos utilizando un lenguaje de programación. Esas instrucciones permiten que un programa realice diferentes acciones."
    },

    {
        keywords: [
            "javascript"
        ],

        response:
            "JavaScript es un lenguaje de programación muy utilizado en la web. También puede utilizarse para crear aplicaciones y desarrollar la lógica de proyectos interactivos, como CIESBOT."
    },

    {
        keywords: [
            "html"
        ],

        response:
            "HTML es el lenguaje que utilizamos para estructurar el contenido de una página web. En CIESBOT, HTML define elementos como el chat, los botones y el campo donde escribes tus preguntas."
    },

    {
        keywords: [
            "css"
        ],

        response:
            "CSS se utiliza para diseñar y dar estilo a las páginas web. Con CSS podemos controlar colores, tamaños, espacios, animaciones y la apariencia de CIESBOT."
    }

];


// ... CONOCIMIENTOS SOBRE ELECTRÓNICA ... //

const electronicsKnowledge = [

    {
        keywords: [
            "que es electronica",
            "electronica"
        ],

        response:
            "La electrónica estudia y utiliza componentes y circuitos para controlar señales y energía eléctrica. Es una parte importante de muchos proyectos de robótica."
    },

    {
        keywords: [
            "circuito",
            "circuitos"
        ],

        response:
            "Un circuito eléctrico es un camino cerrado que permite el movimiento de corriente eléctrica. En robótica podemos utilizar circuitos para conectar fuentes de energía, sensores, luces, motores y controladores."
    },

    {
        keywords: [
            "led",
            "luces led"
        ],

        response:
            "Un LED es un componente electrónico que emite luz cuando circula corriente eléctrica de manera adecuada. Es uno de los componentes más utilizados en proyectos iniciales de electrónica."
    },

    {
        keywords: [
            "resistencia",
            "resistor"
        ],

        response:
            "Una resistencia es un componente que limita o controla el paso de corriente eléctrica dentro de un circuito."
    },

    {
        keywords: [
            "bateria",
            "pila",
            "pilas"
        ],

        response:
            "Una batería o pila puede proporcionar energía eléctrica a un circuito. La fuente de energía debe ser adecuada para los componentes utilizados."
    }

];


// ... INFORMACIÓN SOBRE CIES MONTESSORI ... //

const schoolKnowledge = [

    {
        keywords: [
            "cies montessori",
            "colegio cies",
            "colegio cies montessori",
            "cies"
        ],

        response:
            "El CIES Montessori es una institución educativa de Santo Domingo, República Dominicana. Cuenta con niveles de educación inicial, primaria y secundaria y desarrolla una propuesta educativa inclusiva, individualizada y práctica."
    },

    {
        keywords: [
            "donde esta cies",
            "ubicacion del cies"
        ],

        response:
            "El CIES Montessori está ubicado en la calle Lorenzo Despradel #19, La Castellana, Santo Domingo, República Dominicana."
    },

    {
        keywords: [
            "que hay en cies",
            "que se hace en cies"
        ],

        response:
            "En el CIES Montessori se desarrollan experiencias educativas en diferentes áreas. La institución cuenta con espacios relacionados con Matemáticas, MiniMarket, Banco Nacional, Cocina, Música, Informática, Ciencias, Bellas Artes, Artes Plásticas y Robótica."
    },

    {
        keywords: [
            "montessori",
            "metodo montessori",
            "metodologia montessori"
        ],

        response:
            "El enfoque Montessori busca favorecer la autonomía, la exploración, la independencia y el aprendizaje activo, respetando las necesidades y ritmos de cada estudiante."
    },

    {
        keywords: [
            "robotica en cies",
            "robótica en cies",
            "robotica en el colegio"
        ],

        response:
            "La robótica forma parte de los espacios y experiencias tecnológicas del CIES Montessori. Aquí puedes explorar conceptos de programación, electrónica, circuitos y construcción de proyectos."
    }

];


// ... INFORMACIÓN SOBRE LA CREADORA ... //

const creatorKnowledge = [

    {
        keywords: [
            "quien te creo",
            "quien te creo",
            "creadora",
            "creado por",
            "quien hizo"
        ],

        response:
            "Fui creado por la Prof. Nicole, docente del CIES Montessori."
    },

    {
        keywords: [
            "quien es nicole",
            "profe nicole",
            "profesora nicole"
        ],

        response:
            "La Prof. Nicole es la creadora de CIESBOT. Es técnico en Desarrollo e Implementación de Aplicaciones Informáticas, estudiante de Informática Gerencial y también estudiante del ITLA y del INFOTEP."
    },

    {
        keywords: [
            "que estudia nicole",
            "estudios de nicole"
        ],

        response:
            "La Prof. Nicole es estudiante de Informática Gerencial y también realiza estudios y formación en el ITLA y el INFOTEP."
    },

    {
        keywords: [
            "que hace nicole",
            "trabajo de nicole"
        ],

        response:
            "La Prof. Nicole trabaja en educación y tecnología. Entre sus intereses están la programación, la robótica, la tecnología y el desarrollo de experiencias educativas."
    },

    {
        keywords: [
            "que carrera estudio nicole",
            "carrera de nicole",
            "profesion de nicole"
        ],

        response:
            "La Prof. Nicole es técnico en Desarrollo e Implementación de Aplicaciones Informáticas y actualmente estudia Informática Gerencial."
    }

];


// ... RESPUESTAS GENERALES ... //

const generalKnowledge = [

    {
        keywords: [
            "hola",
            "holaa",
            "holaaa",
            "buenas",
            "saludos",
            "hey"
        ],

        response:
            "¡Hola! Soy CIESBOT. Estoy listo para conversar contigo. Puedes preguntarme sobre robótica, programación, tecnología, CIES Montessori o sobre mi creadora."
    },

    {
        keywords: [
            "buenos dias",
            "buenos días"
        ],

        response:
            "¡Buenos días! Soy CIESBOT. ¿Qué quieres descubrir hoy?"
    },

    {
        keywords: [
            "buenas tardes"
        ],

        response:
            "¡Buenas tardes! CIESBOT está listo. Puedes comenzar con cualquier pregunta."
    },

    {
        keywords: [
            "buenas noches"
        ],

        response:
            "¡Buenas noches! Aunque ya sea tarde, todavía podemos hablar de tecnología y robótica."
    },

    {
        keywords: [
            "que puedes hacer",
            "que sabes hacer"
        ],

        response:
            "Puedo conversar contigo y responder preguntas sobre robótica, electrónica, programación, Arduino, Tinkercad, tecnología, CIES Montessori y mi creadora. También puedo proponerte retos."
    },

    {
        keywords: [
            "quien eres",
            "que eres"
        ],

        response:
            `Soy <strong>${CIESBOT.nombre}</strong>, un chatbot creado por la ${CIESBOT.creadora} en el ${CIESBOT.institucion}. Mi especialidad es la ${CIESBOT.especialidad}.`
    },

    {
        keywords: [
            "eres un robot",
            "eres robot"
        ],

        response:
            "No soy un robot físico. Soy un chatbot: un programa diseñado para interactuar contigo mediante texto. Aunque, siendo sincero, ¡me encantaría tener un cuerpo robótico algún día!"
    },

    {
        keywords: [
            "eres inteligencia artificial",
            "eres una inteligencia artificial",
            "eres ia",
            "eres una ia"
        ],

        response:
            "Esta versión de CIESBOT funciona principalmente mediante programación y una base de conocimientos creada por mi desarrolladora. Todavía no estoy conectado a un modelo de inteligencia artificial generativa."
    },

    {
        keywords: [
            "te gusta la robotica"
        ],

        response:
            "No tengo emociones como una persona, pero fui diseñado precisamente para conversar sobre robótica. Así que podemos decir que es mi tema favorito."
    },

    {
        keywords: [
            "gracias",
            "muchas gracias"
        ],

        response:
            "¡De nada! Pero todavía puedes intentar hacerme una pregunta que no espere."
    },

    {
        keywords: [
            "adios",
            "chao",
            "bye"
        ],

        response:
            "¡Nos vemos! Sigue explorando, haciendo preguntas y creando."
    }

];


// ... RETOS DE ROBÓTICA ... //

const roboticsChallenges = [

    "Imagina que construyes un robot que debe seguir una línea negra. ¿Qué tipo de sensor necesitarías para detectar la línea?",

    "Un robot necesita saber qué tan cerca está de una pared. ¿Qué sensor podría utilizar?",

    "Necesitas mover las ruedas de un robot. ¿Qué componente utilizarías para producir el movimiento?",

    "Un robot recibe información de un sensor y después decide qué hacer. ¿Qué papel cumple la programación?",

    "Imagina que tienes que construir un robot para ayudar en tu colegio. ¿Qué problema resolvería?",

    "Un robot debe encender una luz cuando detecte oscuridad. ¿Qué sensor y qué componente de salida podrías utilizar?",

    "Si un robot tiene sensores pero no tiene un programa que interprete la información, ¿qué problema podría tener?",

    "Diseña mentalmente un robot que pueda ayudar a un estudiante. ¿Qué tarea realizaría?"
];


// ... SELECCIONAR RETO ALEATORIO ... //

function getRoboticsChallenge() {

    const randomIndex =
        Math.floor(
            Math.random() * roboticsChallenges.length
        );

    return `
        <strong>🤖 RETO DE ROBÓTICA</strong>
        <br><br>
        ${roboticsChallenges[randomIndex]}
    `;
}


// ... NORMALIZAR TEXTO ... //

function normalizeText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


// ... BUSCAR EN UNA BASE DE CONOCIMIENTOS ... //

function searchKnowledge(message, knowledgeBase) {

    const normalizedMessage =
        normalizeText(message);


    for (const item of knowledgeBase) {

        for (const keyword of item.keywords) {

            const normalizedKeyword =
                normalizeText(keyword);


            if (
                normalizedMessage.includes(
                    normalizedKeyword
                )
            ) {

                return item.response;

            }

        }

    }


    return null;

}


// ... GENERAR RESPUESTA DE CIESBOT ... //

function getBotResponse(message) {

    const normalizedMessage =
        normalizeText(message);


    // ... DETECTAR RETOS ... //

    if (
        normalizedMessage.includes("reto") &&
        (
            normalizedMessage.includes("robot") ||
            normalizedMessage.includes("robotica")
        )
    ) {

        return getRoboticsChallenge();

    }


    // ... BUSCAR RESPUESTA GENERAL ... //

    const generalResponse =
        searchKnowledge(
            message,
            generalKnowledge
        );


    if (generalResponse) {

        return generalResponse;

    }


    // ... BUSCAR INFORMACIÓN DE LA CREADORA ... //

    const creatorResponse =
        searchKnowledge(
            message,
            creatorKnowledge
        );


    if (creatorResponse) {

        return creatorResponse;

    }


    // ... BUSCAR INFORMACIÓN DEL CIES ... //

    const schoolResponse =
        searchKnowledge(
            message,
            schoolKnowledge
        );


    if (schoolResponse) {

        return schoolResponse;

    }


    // ... BUSCAR INFORMACIÓN SOBRE ROBÓTICA ... //

    const roboticsResponse =
        searchKnowledge(
            message,
            roboticsKnowledge
        );


    if (roboticsResponse) {

        return roboticsResponse;

    }


    // ... BUSCAR INFORMACIÓN SOBRE SENSORES ... //

    const sensorResponse =
        searchKnowledge(
            message,
            sensorKnowledge
        );


    if (sensorResponse) {

        return sensorResponse;

    }


    // ... BUSCAR INFORMACIÓN SOBRE MOTORES ... //

    const motorResponse =
        searchKnowledge(
            message,
            motorKnowledge
        );


    if (motorResponse) {

        return motorResponse;

    }


    // ... BUSCAR INFORMACIÓN SOBRE ARDUINO ... //

    const arduinoResponse =
        searchKnowledge(
            message,
            arduinoKnowledge
        );


    if (arduinoResponse) {

        return arduinoResponse;

    }


    // ... BUSCAR INFORMACIÓN SOBRE TINKERCAD ... //

    const tinkercadResponse =
        searchKnowledge(
            message,
            tinkercadKnowledge
        );


    if (tinkercadResponse) {

        return tinkercadResponse;

    }


    // ... BUSCAR INFORMACIÓN SOBRE PROGRAMACIÓN ... //

    const programmingResponse =
        searchKnowledge(
            message,
            programmingKnowledge
        );


    if (programmingResponse) {

        return programmingResponse;

    }


    // ... BUSCAR INFORMACIÓN SOBRE ELECTRÓNICA ... //

    const electronicsResponse =
        searchKnowledge(
            message,
            electronicsKnowledge
        );


    if (electronicsResponse) {

        return electronicsResponse;

    }


    // ... SI NO ENCUENTRA RESPUESTA ... //

    return getUnknownResponse();

}


// ... RESPUESTAS CUANDO CIESBOT NO SABE ALGO ... //

function getUnknownResponse() {

    const responses = [

        "Interesante pregunta. Todavía no tengo una respuesta programada para eso.",

        "Hmm... esa pregunta está fuera de mi conocimiento actual. Puedes intentar preguntarme sobre robótica, tecnología o CIES Montessori.",

        "No conozco esa respuesta todavía. Tal vez acabas de encontrar algo que mi creadora todavía no me enseñó.",

        "Esa pregunta me hizo pensar. Prueba con algo sobre robots, sensores, motores, Arduino, Tinkercad o programación.",

        "No tengo esa respuesta en mi base de conocimientos. Y descubrir los límites de un chatbot también forma parte del experimento.",

        "Todavía no sé responder eso. ¿Puedes intentar preguntarme algo diferente?",

        "¡Buena pregunta! Pero todavía no me han programado para responder eso."
    ];


    const randomIndex =
        Math.floor(
            Math.random() * responses.length
        );


    return responses[randomIndex];

}


// ... MOSTRAR MENSAJE DEL ESTUDIANTE ... //

function addUserMessage(message) {

    const messageElement =
        document.createElement("div");


    messageElement.className =
        "message user-message";


    messageElement.innerHTML = `

        <div class="message-avatar">
            👩‍🎓
        </div>

        <div class="message-content">

            <div class="message-name">
                TÚ
            </div>

            <div class="bubble">
                ${escapeHTML(message)}
            </div>

        </div>

    `;


    chat.appendChild(
        messageElement
    );


    scrollChat();

}


// ... MOSTRAR RESPUESTA DE CIESBOT ... //

function addBotMessage(message) {

    const messageElement =
        document.createElement("div");


    messageElement.className =
        "message bot-message";


    messageElement.innerHTML = `

        <div class="message-avatar">
            🤖
        </div>

        <div class="message-content">

            <div class="message-name">
                CIESBOT
            </div>

            <div class="bubble">
                ${message}
            </div>

        </div>

    `;


    chat.appendChild(
        messageElement
    );


    scrollChat();

}


// ... ENVIAR MENSAJE ... //

function sendMessage() {

    const message =
        userInput.value.trim();


    if (message === "") {

        return;

    }


    addUserMessage(
        message
    );


    userInput.value = "";


    typing.classList.remove(
        "hidden"
    );


    const response =
        getBotResponse(message);


    const delay =
        Math.min(
            1400,
            Math.max(
                500,
                response.length * 8
            )
        );


    setTimeout(() => {

        typing.classList.add(
            "hidden"
        );


        addBotMessage(
            response
        );


    }, delay);

}


// ... ENVIAR UNA SUGERENCIA ... //

function sendSuggestion(message) {

    userInput.value =
        message;

    sendMessage();

}


// ... DESPLAZAR EL CHAT HACIA ABAJO ... //

function scrollChat() {

    const container =
        document.getElementById(
            "chatContainer"
        );


    setTimeout(() => {

        container.scrollTop =
            container.scrollHeight;

    }, 50);

}


// ... PROTEGER EL CONTENIDO ESCRITO POR EL USUARIO ... //

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


// ... EVENTO DEL BOTÓN ENVIAR ... //

sendButton.addEventListener(
    "click",
    sendMessage
);


// ... ENVIAR CON LA TECLA ENTER ... //

userInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);


// ... MENSAJES DE PRUEBA EN LA CONSOLA ... //

console.log(
    "CIESBOT iniciado correctamente."
);

console.log(
    "Creado por la Prof. Nicole."
);

console.log(
    "Institución: CIES Montessori."
);

console.log(
    "Especialidad: Robótica."
);