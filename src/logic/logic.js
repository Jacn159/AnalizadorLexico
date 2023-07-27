const analyzeCode = (linea) => {
  // Inicializando algunas variables que utilizaremos luego
  var estado = 1;
  var palabra = "";
  var fila = 0;
  var mensaje = "";

  // Variable para indicar si se está analizando una cadena
  var analizandoCadena = false;

  // Creando el array y llenándolo con las palabras reservadas
  var reservadas = [
    "p_condicionalSi",
    "p_condicionalSino",
    "p_condicionalSiSino",
    "p_buclePara",
    "p_bucleMientras",
    "p_bucleHasta",
    "p_bucleRomper",
    "p_bucleContinuar",
    "p_seleccionSwitch",
    "p_seleccionCaso",
    "p_seleccionPredeterminado",
    "p_excepcionIntentar",
    "p_excepcionCapturar",
    "p_excepcionFinalmente",
    "_agregarElementoLista",
    "p_eliminarElementoLista",
    "p_funcion",
    "p_funcionMath",
    "p_funcionSeno",
    "p_valorPi",
    "p_funcionCoseno",
    "p_funcionTangente",
    "p_operadorPotencia",
    "p_funcionRaizCuadrada",
    "p_funcionValorAbsoluto",
    "p_funcionRedondeo",
    "p_funcionSuelo",
    "p_funcionTecho",
    "p_funcionAleatoria",
    "p_funcionValorMaximo",
    "p_funcionValorMinimo",
  ];

  // Añadiendo al final de la cadena un espacio vacío que servirá para poder identificar que ya no habrá nada más que analizar
  linea = linea + " ";

  // Sentencia cíclica para analizar cada caracter de la cadena
  for (var i = 0; i < linea.length; i++) {
    // Aquí empieza a analizar si son símbolos u operadores
    // Analiza si el caracter es ';'
    if (linea[i] == ";") {
      mensaje += "Es un punto y coma" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es '#'
    else if (linea[i] == "#") {
      mensaje += "Es un numeral" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es '{'
    else if (linea[i] == "{") {
      mensaje += "Es una llave de inicio" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es '}'
    else if (linea[i] == "}") {
      mensaje += "Es una llave final" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es '('
    else if (linea[i] == "(") {
      mensaje += "Es un delimitador de inicio" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es ')'
    else if (linea[i] == ")") {
      mensaje += "Es un delimitador final" + ": " + linea[i] + "\n";
    }

    // Analiza si el caracter es '['
    else if (linea[i] == "[") {
      mensaje += "Es un corchete de inicio" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es ']'
    else if (linea[i] == "]") {
      mensaje += "Es un corchete final" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es ':'
    else if (linea[i] == ":") {
      mensaje += "Son dos puntos" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es ','
    else if (linea[i] == ",") {
      mensaje += "Es una coma" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es '¿'
    else if (linea[i] == "¿") {
      mensaje +=
        "Es el símbolo de interrogación inicial" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es '?'
    else if (linea[i] == "?") {
      mensaje +=
        "Es el símbolo de interrogación final" + ": " + linea[i] + "\n";
    }
    // Analiza si el caracter es '~'
    else if (linea[i] == "not") {
      mensaje += "Es un operador lógico de negación" + ": " + linea[i] + "\n";
    }

    // Si encuentra un comentario de una sola línea (comienza con '//')
    if (linea[i] === "/" && linea[i + 1] === "/") {
      // Buscamos el índice donde termina el comentario (fin de la línea)
      var finComentario = linea.indexOf("\n", i + 2);
      if (finComentario === -1) {
        // Si no se encuentra un salto de línea, el comentario abarca hasta el final de la cadena.
        finComentario = linea.length;
      }

      // Extraemos el comentario y lo mostramos en el resultado
      var comentario = linea.substring(i + 2, finComentario);
      mensaje += "Es un Comentario: " + comentario + "\n";

      // Actualizamos el índice 'i' para que salte al final del comentario
      i = finComentario;
    }

    //Analiza si el caracter es '/'
    else if (linea[i] == "/") {
      // Si el que le sigue es un '=', entonces es un operador aritmético de asignación para la división
      if (linea[i + 1] == "=") {
        mensaje +=
          "Es un operador aritmético de asignación para la división: " +
          "/=" +
          "\n";
        // Se suma el valor de i, porque ya evaluamos el que seguía también
        i++;
      }
      // Si no es un operador de asignación, entonces es el operador de división
      else {
        mensaje += "Es un operador de división: " + "/" + "\n";
      }
    }

    // Analiza si el caracter es '='
    else if (linea[i] == "=") {
      // Si el que sigue también es '=', entonces es un operador de comparación
      if (linea[i + 1] == "=") {
        mensaje += "Es un operador de comparación: " + "==" + "\n";
        i++; // Avanzamos un caracter adicional para omitir el segundo '='
      }
      // Si no se encuentra ese '=', entonces es un operador de asignación
      else {
        mensaje += "Es un operador de asignación: " + "=" + "\n";
      }
    }

    // Se analiza si el caracter es '+'
    else if (linea[i] == "+") {
      // Si el que sigue es '=', entonces es un operador aritmético de asignación suma
      if (linea[i + 1] == "=") {
        mensaje +=
          "Es un operador aritmético de asignación suma: " + "+" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si el que sigue es '+', entonces es un operador de incremento
      else if (linea[i + 1] == "+") {
        mensaje += "Es un operador de incremento: " + "++" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no es ninguno de los anteriores, entonces es solo el operador de suma
      else {
        mensaje += "Es un operador aritmético de suma: " + "+" + "\n";
      }
    }

    // Se analiza si el caracter es '-'
    else if (linea[i] == "-") {
      // Si el que sigue es '=', entonces es un operador aritmético de asignación resta
      if (linea[i + 1] == "=") {
        mensaje +=
          "Es un operador aritmético de asignación resta: " + "-=" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si el que sigue es '-', entonces es un operador de decremento
      else if (linea[i + 1] == "-") {
        mensaje += "Es un operador aritmético de decremento: " + "--" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no es ninguno de los anteriores, entonces es solo el operador de resta
      else {
        mensaje += "Es un operador aritmético de resta: " + "-" + "\n";
      }
    }

    // Se analiza si el caracter es '*'
    else if (linea[i] == "*") {
      // Si el que sigue es '=', entonces es un operador aritmético de asignación de multiplicación
      if (linea[i + 1] == "=") {
        mensaje +=
          "Es un operador de asignación de multiplicación: " + "*=" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no es '=', entonces es solo el operador de multiplicación
      else {
        mensaje += "Es un operador aritmético de multiplicación: " + "*" + "\n";
      }
    }

    // Se analiza si el caracter es '%'
    else if (linea[i] == "%") {
      // Si el que sigue es '=', entonces es un operador aritmético de asignación de resto
      if (linea[i + 1] == "=") {
        mensaje += "Es un operador de asignación de resto: " + "%=" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no es '=', entonces es solo el operador de resto
      else {
        mensaje += "Es un operador aritmético de resto: " + "%" + "\n";
      }
    }

    // Se analiza si el caracter es '^'
    else if (linea[i] == "^") {
      // Si el que sigue es '=', entonces es un operador aritmético de asignación de potencia
      if (linea[i + 1] == "=") {
        mensaje += "Es un operador de asignación de potencia: " + "^=" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si el que sigue es '^', entonces es un operador lógico exclusivo
      else if (linea[i + 1] == "^") {
        mensaje += "Es un operador lógico exclusivo: " + "^" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no es ninguno de los anteriores, entonces es solo el operador de potencia
      else {
        mensaje += "Es un operador aritmético de potencia: " + "^" + "\n";
      }
    }

    // Se analiza si el caracter es '&'
    else if (linea[i] == "&") {
      // Si el que sigue es '=', entonces es un operador aritmético de asignación AND
      if (linea[i + 1] == "=") {
        mensaje += "Es un operador de asignación Y: " + "&=" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si el que sigue es '&', entonces es un operador condicional Y
      else if (linea[i + 1] == "&") {
        mensaje += "Es un operador condicional Y: " + "&&" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no es ninguno de los anteriores, entonces es solo el operador lógico Y
      else {
        mensaje += "Es un operador lógico Y: " + "&" + "\n";
      }
    }

    // Se analiza si el caracter es '|'
    else if (linea[i] == "|") {
      // Si el que sigue es '|', y el siguiente de este también es '|', entonces es un operador condicional O
      if (linea[i + 1] == "|" && linea[i + 2] == "|") {
        mensaje += "Es un operador condicional O: " + "|" + "\n";
        i += 2; // Salta los siguientes dos caracteres ya que se han procesado
      }
      // Si el que sigue es '|' ignorando el siguiente (ya que se ha evaluado), entonces es un operador lógico O
      else if (linea[i + 1] == "|") {
        mensaje += "Es un operador lógico O: " + "|" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si el que sigue es '=', entonces es un operador lógico de asignación
      else if (linea[i + 1] == "=") {
        mensaje += "Es un operador lógico de asignación: " + "|=" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no se encuentra a ninguno de esos caracteres, entonces no es un componente léxico
      else {
        mensaje += "No es un componente léxico: " + "|" + "\n";
      }
    }

    // Se analiza si el caracter es '>'
    else if (linea[i] == ">") {
      // Si el que sigue es '>', y el siguiente de este es '=', entonces es un operador de asignación de desplazamiento menor.
      if (linea[i + 1] == ">" && linea[i + 2] == "=") {
        mensaje +=
          "Es un operador de asignación de desplazamiento mayor: " + ">" + "\n";
        i += 2; // Salta los siguientes dos caracteres ya que se han procesado
      }
      // Si el siguiente es '>', entonces es un operador de desplazamiento derecho
      else if (linea[i + 1] == ">") {
        mensaje += "Es un operador de desplazamiento derecho: " + ">" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si el siguiente es '=', entonces es un operador de comparación mayor igual que
      else if (linea[i + 1] == "=") {
        mensaje +=
          "Es un operador de comparación mayor igual que: " + ">=" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no se encuentra ninguno de los anteriores, entonces es el operador de comparación mayor
      else {
        mensaje += "Es un operador de comparación mayor: " + ">" + "\n";
      }
    }

    // Se analiza si el caracter es '<'
    else if (linea[i] == "<") {
      // Si el que sigue es '<', y el siguiente de este es '=', entonces es un operador de asignación de desplazamiento menor.
      if (linea[i + 1] == "<" && linea[i + 2] == "=") {
        mensaje +=
          "Es un operador de asignación de desplazamiento menor: " +
          "<<" +
          "\n";
        i += 2; // Salta los siguientes dos caracteres ya que se han procesado
      }
      // Si el siguiente es '<', entonces es un operador de desplazamiento izquierdo
      else if (linea[i + 1] == "<") {
        mensaje += "Es un operador de desplazamiento izquierdo: " + "<<" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si el siguiente es '=', entonces es un operador de comparación menor igual que
      else if (linea[i + 1] == "=") {
        mensaje +=
          "Es un operador de comparación menor igual que: " + "<=" + "\n";
        i++; // Salta el siguiente caracter ya que se ha procesado
      }
      // Si no se encuentra ninguno de los anteriores, entonces es el operador de comparación menor
      else {
        mensaje += "Es un operador de comparación menor: " + "<" + "\n";
      }
    } else if (/^\d$/.test(linea[i])) {
      var num = linea[i];
      while (/\d/.test(linea[i + 1])) {
        num += linea[i + 1];
        i++;
      }
      mensaje += "Es una secuencia numérica" + ": " + num + "\n";
    } else if (/[a-zA-Z_]/.test(linea[i])) {
      palabra = linea[i];
      while (/\w/.test(linea[i + 1])) {
        palabra += linea[i + 1];
        i++;
      }
      if (reservadas.includes(palabra)) {
        mensaje += "Es una palabra reservada" + "\n";
      } else {
        mensaje += "Es un identificador" + ": " + palabra + "\n";
      }
    }

    // Analiza si el caracter es '"'
    else if (linea[i] == '"') {
      // Si encontramos una comilla doble, buscamos la siguiente comilla doble
      var j = i + 1;
      var palabra = "";
      while (j < linea.length && linea[j] !== '"') {
        palabra += linea[j];
        j++;
      }

      // Si j < linea.length, significa que encontramos la siguiente comilla doble
      if (j < linea.length) {
        mensaje += 'Cadena: "' + palabra + '"\n';
        i = j; // Actualizamos i para que continúe después de la cadena
      } else {
        // Si no encontramos la siguiente comilla doble, entonces hay un error en la cadena
        mensaje += 'Comillas: "' + "\n";
      }

      palabra = ""; // Reiniciamos la variable palabra
    }
  }
  return mensaje;
};

export default analyzeCode;
