analizando("linea");

function analizando(linea) {
  let resultados = []; // Arreglo para almacenar los resultados del análisis léxico

  // Si el datagridview se encuentra con registros, este método los borrará, para empezar con un nuevo análisis
  if (resultados > 0) {
    resultados.clear();
  };

  // Pasando la expresión ingresada al textBox a una variable de tipo cadena

  // Inicializando algunas variables que utilizaremos luego
  let estado = 1;
  let palabra = "";
  let fila = 0;
  let mensaje = "";

  // Creando el array y llenándolo con las palabras reservadas
  let reservadas = [
    "T_si",
    "T_sino",
    "T_sinosi",
    "T_para",
    "T_mientras",
    "T_hacer",
    "t_si",
    "t_sino",
    "t_sinosi",
    "t_para",
    "t_mientras",
    "t_hacer",
  ];

  // Añadiendo al final de la cadena un espacio vacío que servirá para poder identificar que ya no habrá nada más que analizar
  linea = linea + " ";

  for (let i = 0; i < linea.length; i++) {
    // Aquí puedes colocar el código que deseas ejecutar en cada iteración

    // Analiza si el carácter es ';'
    if (linea[i] === ";") {
      resultados.push({
        lexema: ";",
        tipo: "t_fin",
        descripcion: "Es un punto y coma.",
      });
    }

    // Analiza si el carácter es '#'
    else if (linea[i] === "#") {
      // Añade la fila al datagridview
      dgvTabla.Rows.Add("#", "t_numeral", "Es un numeral.");
      // Muestra la fila en el número de registro que le corresponde [fila], con el color que representa que se trata de un símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es '{'
    else if (linea[i] === "{") {
      // Añade la fila al datagridview
      dgvTabla.Rows.Add("{", "t_abrirllave", "Es una llave de inicio.");
      // Muestra la fila en el número de registro que le corresponde [fila], con el color que representa que se trata de un símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es '}'
    else if (linea[i] === "}") {
      // Añade la fila al datagridview
      dgvTabla.Rows.Add("}", "t_cerrarllave", "Es una llave final.");
      // Muestra la fila en el número de registro que le corresponde [fila], con el color que representa que se trata de un símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es '('
    else if (linea[i] === "(") {
      // Añade la fila al datagridview
      dgvTabla.Rows.Add("(", "t_abrirparent", "Es un delimitador de inicio.");
      // Muestra la fila en el número de registro que le corresponde [fila], con el color que representa que se trata de un símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es ')'
    else if (linea[i] === ")") {
      // Añade la fila al datagridview
      dgvTabla.Rows.Add(")", "t_cerrarparent", "Es un delimitador final.");
      // Muestra la fila en el número de registro que le corresponde [fila], con el color que representa que se trata de un símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es '"'
    else if (linea[i] === 34) {
      // Convirtiendo el código ascii al caracter "
      let comillas = '"';
      // Añade la fila al datagridview
      dgvTabla.Rows.Add(comillas, "t_comillas", "Son comillas.");
      // Muestra la fila en el número de registro que le corresponde [fila], con el color que representa que se trata de un símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
      // Proceso para ver si lo que sigue es una cadena. Guardamos el valor actual de i en j
      let j = i;
      // Aumentamos el valor de i en 1
      i++;

      // Proceso que se hará hasta que se encuentre otro "
      while (linea[i] !== 34) {
        // Si se da un enter, entonces se tomará como un espacio para que se siga concatenando. Se aumenta i para que se lea el siguiente caracter
        if (linea[i] === 13) {
          i++;
          palabra = palabra + " ";
        }
        // Si no, entonces se seguirá concatenando con el caracter que sigue
        else {
          palabra = palabra + linea[i];
        }
        // Siempre se aumentará i excepto se trate del último caracter o se haya presionado enter, porque ya se habrá aumentado anteriormente
        if (i !== linea.length - 1 && linea[i] !== 13) {
          i++;
        }
        // Si se llega al último caracter, se sale del ciclo while
        else {
          break;
        }
      }
      // Luego de evaluar los siguientes caracteres, si se encontró otra comilla, entonces significa que lo que estaba dentro era una cadena
      if (linea[i] === 34) {
        if (palabra.length > 0 && palabra !== " ") {
          // Se agrega una fila
          dgvTabla.Rows.Add(palabra, "t_cadena", "Es una cadena.");
          // Se muestra la fila con el color de celdas que lo representa como un literal
          dgvTabla.rows[fila].style.backgroundColor = "#ff99ff"; // Aquí puedes ajustar el color según tus necesidades
        } else if (palabra.length === 0 || palabra === " ") {
          // Se agrega una fila
          dgvTabla.Rows.Add(palabra, "t_cadena", "Es una cadena vacía.");
          // Se muestra la fila con el color de celdas que lo representa como un literal
          dgvTabla.rows[fila].style.backgroundColor = "#ff99ff"; // Aquí puedes ajustar el color según tus necesidades
        }
        fila++;
        // la palabra volvemos a dejarla vacía
        palabra = "";
        // También se agregará otra fila por las comillas finales
        dgvTabla.Rows.Add(comillas, "t_comillas", "Son comillas.");
        // Se mostrará la fila con el color que lo identifica como símbolo
        dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
      // Si no se encontró otra comilla, entonces no era una cadena
      else if (linea[i] !== 34) {
        // Tendremos que volver a asignar a i el valor con el que inició, para que vuelva a evaluar los caracteres. Vaciamos la palabra
        i = j;
        palabra = "";
      }
    }

    // Analiza si el carácter es '
    else if (linea[i] === 39) {
      // Convirtiendo el código ascii al caracter '
      let simples = "'";
      // Añade la fila al datagridview
      dgvTabla.Rows.Add(simples, "t_simple", "Son comillas simples.");
      // Muestra la fila en el número de registro que le corresponde [fila], con el color que representa que se trata de un símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;

      // Proceso para ver si lo que sigue es una cadena. Guardamos el valor actual de i en j
      let j = i;
      // Aumentamos el valor de i en 1
      i++;
      // Proceso que se hará hasta que se encuentre otro '
      while (linea[i] !== 39) {
        // Se concatena el caracter
        palabra = palabra + linea[i];
        // Se aumenta en i el valor de i, siempre y cuando no sea el último
        if (i !== linea.length - 1) {
          i++;
        }
        // Si no, se sale del ciclo
        else {
          break;
        }
      }
      // Si se encontró otra comilla simple, y solo había un caracter, entonces es un caracter
      if (linea[i] === 39 && palabra.length === 1) {
        if (palabra === " ") {
          dgvTabla.Rows.Add(palabra, "t_caracter", "No hay un caracter.");
          // Se muestra la fila con el color que lo representa como literal
          dgvTabla.rows[fila].style.backgroundColor = "#ff99ff"; // Aquí puedes ajustar el color según tus necesidades
          fila++;
        } else {
          // Se agrega la fila
          dgvTabla.Rows.Add(palabra, "t_caracter", "Es un caracter.");
          // Se muestra la fila con el color que lo representa como literal
          dgvTabla.rows[fila].style.backgroundColor = "#ff99ff"; // Aquí puedes ajustar el color según tus necesidades
          fila++;
        }
        // Se agrega la fila para las comillas simples finales
        dgvTabla.Rows.Add(simples, "t_simples", "Son comillas simples.");
        // Se muestra con el color de símbolos
        dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        // La palabra vuelve a estar vacía
        palabra = "";
      }
      // Si habían más caracteres, entonces no era un literal caracter, e i vuelve a tener su valor inicial para que se analice nuevamente
      else {
        i = j;
        palabra = "";
      }
    }

    // Analiza si el carácter es '['
    else if (linea[i] === "[") {
      // Se agrega la fila
      dgvTabla.Rows.Add("[", "t_cor_abierto", "Es un corchete de inicio.");
      // Se muestra con el color que lo representa como símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es ']'
    else if (linea[i] === "]") {
      // Se agrega la fila
      dgvTabla.Rows.Add("]", "t_cor_cerrado", "Es un corchete final.");
      // Se muestra con el color que lo representa como símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es ':'
    else if (linea[i] === ":") {
      // Se agrega la fila
      dgvTabla.Rows.Add(":", "t_puntos", "Son dos puntos.");
      // Se muestra con el color que lo representa como símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es ','
    else if (linea[i] === ",") {
      // Se agrega la fila
      dgvTabla.Rows.Add(",", "t_coma", "Es una coma.");
      // Se muestra con el color que lo representa como símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es '¿'
    else if (linea[i] === "¿") {
      // Se agrega la fila
      dgvTabla.Rows.Add(
        "¿",
        "t_interInicio",
        "Es el símbolo de interrogación inicial."
      );
      // Se muestra con el color que lo representa como símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es '?'
    else if (linea[i] === "?") {
      // Se agrega la fila
      dgvTabla.Rows.Add(
        "?",
        "t_interFinal",
        "Es el símbolo de interrogación final."
      );
      // Se muestra con el color que lo representa como símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es '~'
    else if (linea[i] === "~") {
      // Se agrega la fila
      dgvTabla.Rows.Add(
        "~",
        "t_negación",
        "Es un operador lógico de negación."
      );
      // Se muestra con el color que lo representa como símbolo
      dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
      fila++;
    }

    // Analiza si el carácter es '/'
    else if (linea[i] === "/") {
      // Si el que le sigue es un '=', entonces es un operador aritmético de asignación para la división
      if (linea[i + 1] === "=") {
        // Se agrega la fila
        dgvTabla.Rows.Add(
          "/=",
          "t_asignación_división",
          "Es un operador aritmético de asignación para la división."
        );
        // Se muestra con el color que lo identifica como operador
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        // Se suma el valor de i, porque ya evaluamos el que seguía también
        i++;
      }
      // Puede ser que el que siga sea '/', entonces se convierte en símbolo de inicio de comentario
      else if (linea[i + 1] === "/") {
        // Se agrega la fila
        dgvTabla.Rows.Add(
          "//",
          "t_comen",
          "Son los símbolos que representan el comienzo de un comentario."
        );
        // Se muestra con el color que lo identifica como símbolo
        dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        // Se suma el valor de i, porque ya evaluamos el que seguía también
        i++;
        // Proceso para ver si lo que se encuentra es un comentario
        let j = i;
        i++;

        // Proceso hasta que se encuentre '\'
        while (linea[i] !== "\\") {
          // Si se presiona enter, entonces se pasará al siguiente caracter, pero se tomará como un espacio vacío para seguir concatenando
          if (linea[i] === "\r") {
            i++;
            palabra = palabra + " ";
          }
          // Si no, entonces se concatena con el caracter que sigue
          else {
            palabra = palabra + linea[i];
          }
          // Se aumenta el valor de i siempre y cuando no sea el último ni enter, porque ya se ha aumentado anteriormente
          if (i !== linea.length - 1 && linea[i] !== "\r") {
            i++;
          }
          // Si se llega al final de la cadena, se sale del ciclo
          else {
            break;
          }
        }
        // Si se ha encontrado el primer símbolo del comentario final, se evalúa el siguiente para ver si también está el otro '//'
        if (linea[i] === "\\" && linea[i + 1] === "\\") {
          // Si está, se agrega una fila
          dgvTabla.Rows.Add(palabra, "t_comen", "Es un comentario.");
          // Se muestra con el color que lo identifica como literal
          dgvTabla.rows[fila].style.backgroundColor = "#ff99ff"; // Aquí puedes ajustar el color según tus necesidades
          fila++;
          // Convirtiendo de código ascii a caracter
          let final = String.fromCharCode(92);
          let comenfinal = final + final;
          // También se añade otra fila para los símbolos de comentario final '//'
          dgvTabla.Rows.Add(
            comenfinal,
            "t_comenFinal",
            "Son los símbolos que representan el final de un comentario."
          );
          // Se muestra con el color que los representa como símbolos
          dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
          fila++;
          // Palabra vuelve a estar vacía, y se aumenta en 1 a i porque ya se evaluó ese caracter
          palabra = "";
          i++;
        }
        // Si no, entonces se vuelve a i a su valor inicial para volver a analizar
        else {
          i = j;
          palabra = "";
        }
      }
      // Si no se encuentra al lado uno de esos símbolos, entonces es un operador de división
      else {
        // Se añade la fila
        dgvTabla.Rows.Add(
          "/",
          "t_division",
          "Es un operador aritmético de división."
        );
        // Se muestra con el color que lo identifica como operador
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Analiza si el carácter es '\\'
    else if (linea[i] === String.fromCharCode(92)) {
      // Convirtiendo de código ascii a caracter
      let final = String.fromCharCode(92);
      let comenfinal = final + final;
      // Si el caracter que sigue también es '\', entonces se trata de los símbolos de comentario final
      if (linea[i + 1] === String.fromCharCode(92)) {
        // Se agrega la fila
        dgvTabla.Rows.Add(
          comenfinal,
          "t_comenFinal",
          "Son los símbolos que representan el final de un comentario."
        );
        // Se muestra la fila con el color que lo representa como símbolo
        dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        // Se aumenta i porque ya se evaluó el caracter siguiente
        i++;
      }
      // Si no se encuentra el otro caracter, entonces no estamos hablando de un componente léxico
      else {
        // Se agrega la fila y se muestra con el color
        dgvTabla.Rows.Add(final, "", "No es un componente léxico.");
        dgvTabla.rows[fila].style.backgroundColor = "#93cddd"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '!'
    else if (linea[i] === "!") {
      // Se evalúa si el que sigue es '=', y si el que sigue del que sigue es '!', porque sería un operador
      if (linea[i + 1] === "=" && linea[i + 2] === "!") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "!=",
          "t_diferente",
          "Es un operador de comparación."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        // Se suma a i 2 porque ya se evaluó el siguiente y el siguiente de este
        i = i + 2;
      }
      // Si no se encuentran esos caracteres siguientes, entonces es un símbolo
      else {
        // Se agrega la fila y se muestra con el color que lo identifica como un símbolo
        dgvTabla.Rows.Add("!", "t_not", "Es el símbolo de negación.");
        dgvTabla.rows[fila].style.backgroundColor = "#ffcc66"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '='
    else if (linea[i] === "=") {
      // Si el que sigue también es '=', entonces es un operador de comparación
      if (linea[i + 1] === "=") {
        // Se llena la tabla y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add("==", "t_comparar", "Es un operador de comparación.");
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no se encuentra ese '=', entonces es un operador de asignación
      else {
        // Se agrega la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add("=", "t_asignar", "Es un operador de asignación.");
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '+'
    else if (linea[i] === "+") {
      // Si el que sigue es '=', entonces se trata de un operador aritmético de asignación suma
      if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "+=",
          "t_asignación_suma",
          "Es un operador aritmético de asignación suma."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si el que sigue es un '+', entonces se trata de un operador de incremento
      else if (linea[i + 1] === "+") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "++",
          "t_incremento",
          "Es un operador aritmético de incremento."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no es ninguno de los anteriores, entonces es solo el operador de suma
      else {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add("+", "t_suma", "Es un operador aritmético de suma.");
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '-'
    else if (linea[i] === "-") {
      // Si el que sigue es '=', entonces se trata de un operador aritmético de asignación resta
      if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "-=",
          "t_asignación_resta",
          "Es un operador aritmético de asignación resta."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si el que sigue es un '-', entonces se trata de un operador de decremento
      else if (linea[i + 1] === "-") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "--",
          "t_decremento",
          "Es un operador aritmético de decremento."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no es ninguno de los anteriores, entonces es solo el operador de resta
      else {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "-",
          "t_resta",
          "Es un operador aritmético de resta."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '*'
    else if (linea[i] === "*") {
      // Si el que sigue es '=', entonces se trata de un operador aritmético de asignación de multiplicación
      if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "*=",
          "t_multiplicador",
          "Es un operador de asignación de multiplicación."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no es , entonces es solo el operador de multiplicación
      else {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "*",
          "t_produc",
          "Es un operador aritmético de multiplicación."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '%'
    else if (linea[i] === "%") {
      // Si el que sigue es '=', entonces se trata de un operador aritmetico de asignación resto
      if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "%=",
          "t_asignación_resto",
          "Es un operador de asignación resto."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no es , entonces es solo el operador de resto
      else {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "%",
          "t_modulo",
          "Es un operador aritmético de resto."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '^'
    else if (linea[i] === "^") {
      // Si el que sigue es '=', entonces se trata de un operador aritmetico de asignación potencia
      if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "^=",
          "t_asignación_potencia",
          "Es un operador aritmético de asignación potencia."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si el que sigue es ^, entonces se trata de un operador lógico
      else if (linea[i + 1] === "^") {
        dgvTabla.Rows.Add(
          "^^",
          "t_exclusivo",
          "Es un operador logico exclusivo."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no es , entonces es solo el operador de potencia
      else {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "^",
          "t_potencia",
          "Es un operador aritmético de potencia."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '&'
    else if (linea[i] === "&") {
      // Si el que sigue es '=', entonces se trata de un operador aritmetico de asignación
      if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "&=",
          "t_asignación_AND",
          "Es un operador de asignación Y."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si el que sigue es &, entonces se trata de un operador condicional
      else if (linea[i + 1] === "&") {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add(
          "&&",
          "t_condicionalY",
          "Es un operador condicional Y."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no es , entonces es solo el operador lógico
      else {
        // Se añade la fila y se muestra con el color que lo identifica como operador
        dgvTabla.Rows.Add("&", "t_lógicoY", "Es un operador lógico Y.");
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '$'
    else if (linea[i] === "$") {
      // Si el que sigue es $, se trata de un operador de raiz cuadrada
      if (linea[i + 1] === "$" && linea[i + 2] !== "$") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          "$$",
          "t_raizCua",
          "Es un operador aritmético de raíz cuadrada."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si el que sigue es $, y el que sigue de este también es $, se trata de un operador de raíz cúbica
      else if (linea[i + 1] === "$" && linea[i + 2] === "$") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          "$$$",
          "t_raizCub",
          "Es un operador aritmético de raíz cúbica."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        // Se aumenta i en 2 porque ya se evaluó el siguiente, y el siguiente de este
        i = i + 2;
      }
      // Si no se encuentra a ninguno de esos caracteres, entonces no es un componente léxico
      else {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add("$", "", "No es un componente léxico.");
        dgvTabla.rows[fila].style.backgroundColor = "#93cddd"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '|'
    else if (linea[i] === "|") {
      // Si el que sigue es |, y el que sigue de este también es |, se trata de un operador condicional
      if (linea[i + 1] === "|" && linea[i + 2] === "|") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          "|||",
          "t_condicionalO",
          "Es un operador condicional O."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        // Se aumenta i en 2 porque ya se evaluó el siguiente, y el siguiente de este
        i = i + 2;
      }
      // Si se encuentra el que sigue es |, ignorando el siguiente, porque ya se evaluó, entonces se trata de un operador lógico
      else if (linea[i + 1] === "|") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add("||", "t_lógicoO", "Es un operador logico O.");
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si el que sigue es =, entonces se trata de un operador lógico de asignación
      else if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          "|=",
          "t_Asignación_OR",
          "Es un operador logico de asignación."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      } else {
        dgvTabla.Rows.Add("|", "", "No es un componente léxico.");
        dgvTabla.rows[fila].style.backgroundColor = "#93cddd"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '>'
    else if (linea[i] === ">") {
      // Si el que sigue es >, y el que sigue a este es =, entonces es un operador de asignación de desplazamiento
      if (linea[i + 1] === ">" && linea[i + 2] === "=") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          ">>=",
          "t_Asignacion_shiftiderecha",
          "Es un operador de asignación de desplazamiento menor."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i = i + 2;
      }
      // Si el siguiente es >, entonces se trata de un operador de desplazamiento
      else if (linea[i + 1] === ">") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          ">>",
          "t_shiftderecha",
          "Es un operador de desplazamiento derecho."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si el siguiente es =, entonces se trata de un operador de compación mayor igual que
      else if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          ">=",
          "t_sigmayorigual",
          "Es un operador de comparación mayor igual que."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no se encuentra ninguno de los anteriores, entonces es el operador de comparación mayor
      else {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          ">",
          "t_sigmayor",
          "Es un operador de comparación mayor."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    }

    // Se analiza si el caracter es '<'
    else if (linea[i] === "<") {
      // Si el que sigue es <, y el que sigue a este es '=', entonces es un operador de asignación de desplazamiento
      if (linea[i + 1] === "<" && linea[i + 2] === "=") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          "<<=",
          "t_Asignacion_shiftizquierda",
          "Es un operador de asignación de desplazamiento menor."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i = i + 2;
      }
      // Si el siguiente es <, entonces se trata de un operador de desplazamiento
      else if (linea[i + 1] === "<") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          "<<",
          "t_shifizquierda",
          "Es un operador de desplazamiento izquierdo."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si el siguiente es '=', entonces se trata de un operador de comparación menor igual que
      else if (linea[i + 1] === "=") {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          "<=",
          "t_sigmenorigual",
          "Es un operador de comparación menor igual que."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
        i++;
      }
      // Si no se encuentra ninguno de los anteriores, entonces es el operador de comparación menor
      else {
        // Se añade la fila y se muestra con el color
        dgvTabla.Rows.Add(
          "<",
          "t_sigmenor",
          "Es un operador de comparación menor."
        );
        dgvTabla.rows[fila].style.backgroundColor = "#66ffff"; // Aquí puedes ajustar el color según tus necesidades
        fila++;
      }
    } else if (charIsLetter(char) || charIsDigit(char) || char === "_") {
      let k = 0;

      switch (estado) {
        case 1:
          if (
            (char === "T" || char === "t") &&
            !charIsLetter(linea[i + 1]) &&
            linea[i + 1] !== "_"
          ) {
            palabra += char;
            resultados.push({
              palabra,
              tipo: "t_identificador",
              descripcion: "Secuencia de caracteres alfabéticos.",
              color: "#CC99FF",
            });
            palabra = "";
          } else if (char === "T" || char === "t") {
            palabra += char;
            estado = 2;
          } else if (
            charIsLetter(char) &&
            (char !== "T" || char !== "t") &&
            !charIsLetter(linea[i + 1])
          ) {
            palabra += char;
            resultados.push({
              palabra,
              tipo: "t_identificador",
              descripcion: "Secuencia de caracteres alfabéticos.",
              color: "#CC99FF",
            });
            palabra = "";
          } else if (charIsLetter(char) && char !== "T" && char !== "t") {
            palabra += char;
            estado = 4;
          } else if (charIsDigit(char) && !charIsDigit(linea[i + 1])) {
            palabra += char;
            resultados.push({
              palabra,
              tipo: "t_números",
              descripcion: "Secuencia de caracteres numéricos.",
              color: "#FF99FF",
            });
            palabra = "";
          } else if (charIsDigit(char)) {
            palabra += char;
            estado = 5;
          } else if (char === "_") {
            palabra += char;
            resultados.push({
              palabra,
              tipo: "",
              descripcion: "No es un componente léxico.",
              color: "#93CDDD",
            });
            palabra = "";
          }
          break;

        case 2:
          if (
            char === "_" &&
            (linea[i + 1] === " " || !charIsLetter(linea[i + 1]))
          ) {
            resultados.push({
              palabra,
              tipo: "t_identificador",
              descripcion: "Secuencia de caracteres alfabéticos.",
              color: "#CC99FF",
            });
            resultados.push({
              palabra: "_",
              tipo: "",
              descripcion: "No es un componente léxico.",
              color: "#93CDDD",
            });
            palabra = "";
            estado = 1;
          } else if (char === "_") {
            k = i;
            palabra += char;
            estado = 3;
          } else if (charIsLetter(char) && linea[i + 1] === " ") {
            palabra += char;
            resultados.push({
              palabra,
              tipo: "identificador",
              descripcion: "Secuencia de caracteres alfabéticos.",
              color: "#CC99FF",
            });
            palabra = "";
            estado = 1;
          } else if (charIsLetter(char)) {
            palabra += char;
            estado = 4;
          }
          break;

        case 3:
          if (
            charIsLetter(char) &&
            (linea[i + 1] === " " || !charIsLetter(linea[i + 1]))
          ) {
            palabra += char;
            for (let j = 0; j < 12; j++) {
              if (palabra === reservadas[j]) {
                resultados.push({
                  palabra,
                  tipo: palabra,
                  descripcion: "Es una palabra reservada.",
                  color: "#CCFF66",
                });
                palabra = "";
                j = 12;
              }
            }
            if (palabra !== "") {
              estado = 4;
              palabra = "";
              i = k - 1;
            } else {
              estado = 1;
            }
          } else if (charIsLetter(char)) {
            palabra += char;
            estado = 3;
          }
          break;

        case 4:
          if (
            charIsLetter(char) &&
            (linea[i + 1] === " " || !charIsLetter(linea[i + 1]))
          ) {
            palabra += char;
            resultados.push({
              palabra,
              tipo: "t_identificador",
              descripcion: "Secuencia de caracteres alfabéticos.",
              color: "#CC99FF",
            });
            palabra = "";
            estado = 1;
          } else if (charIsLetter(char)) {
            palabra += char;
            estado = 4;
          }
          break;

        case 5:
          if (
            charIsDigit(char) &&
            (linea[i + 1] === " " || !charIsDigit(linea[i + 1]))
          ) {
            palabra += char;
            resultados.push({
              palabra,
              tipo: "t_números",
              descripcion: "Secuencia de caracteres numéricos.",
              color: "#FF99FF",
            });
            palabra = "";
            estado = 1;
          } else if (charIsDigit(char)) {
            estado = 5;
            palabra += char;
          } else if (!charIsDigit(char)) {
            resultados.push({
              palabra,
              tipo: "t_números",
              descripcion: "Secuencia de caracteres numéricos.",
              color: "#FF99FF",
            });
            palabra = "";
            estado = 1;
          }
          break;
      }
    }

    // Si el caracter es un espacio vacío, entonces solo entra en la sentencia
    else if (linea[i] == " ") {
      // Pero si además de ser vacío, es el último caracter, entonces se aumenta a i en 1
      if (linea[i] == " " && i == linea.length - 1) {
        i++;
      }
    }

    // Si se ha presionado enter, entonces se tiene que leer el siguiente caracter, y para eso i se aumenta en 1
    else if (linea[i] == 13) {
      i++;
    }

    // Si no se ha entrado en ninguna de las sentencias anteriores, quiere decir que dicho caracter no es un componente léxico
    else {
      palabra = palabra + linea[i];
      // Se añade la fila y se muestra con el color
      dgvTabla.Rows.Add(palabra, "", "No es un componente léxico.");
      dgvTabla.Rows[fila].DefaultCellStyle.BackColor = Color.FromArgb(
        147,
        205,
        221
      );
      fila++;
      palabra = "";
      estado = 1;
    }
    return resultados;
  }
  const resultadosLexico = analizadorLexico(codigoFuente);

  // Ejemplo de cómo mostrar los resultados en la consola
  resultadosLexico.forEach((resultado) => {
    console.log(
      `Lexema: ${resultado.lexema}, Tipo: ${resultado.tipo}, Descripción: ${resultado.descripcion}`
    );
  });
}
