var jsonText = '{"estudiantes":['+'{"Codigo": "001", "Nombre": "Carlos Vasquez",  "Nota": 3.8},  '+
                                  '{"Codigo": "010", "Nombre": "Hugo Arrieta",    "Nota": 4.8},  '+
                                  '{"Codigo": "011", "Nombre": "Pedro Tovar",     "Nota": 2.5},  '+
                                  '{"Codigo": "100", "Nombre": "Arturo Medina",   "Nota": 3.4},  '+
                                  '{"Codigo": "101", "Nombre": "Santiago Megia",  "Nota": 3.6},  '+
                                  '{"Codigo": "110", "Nombre": "Nicolas Piñeros", "Nota": 4.5},  '+
                                  '{"Codigo": "111", "Nombre": "Cesar Rincon",    "Nota": 4.3},  '+
                                  '{"Codigo": "002", "Nombre": "Brayan Quintero", "Nota": 1.5},  '+
                                  '{"Codigo": "020", "Nombre": "Johanna Prieto",  "Nota": 2.2},  '+
                                  '{"Codigo": "022", "Nombre": "Oswaldo Pecha",   "Nota": 4.4}   '+']}';
var jsObj = JSON.parse(jsonText);

function leerDatosJSON(json)
{
    var out = "--------------------Datos de Estudiantes-------------------<br>";
    for (var i = 0; i < json.estudiantes.length; i++)
    {
      out += "Codigo: " + json.estudiantes[i].Codigo + " - " + "Nota:  " + json.estudiantes[i].Nota
      +  " - " + "Nombre: " + " - " + json.estudiantes[i].Nombre + "<br>";
    }
    document.getElementById("estudiante").innerHTML = out;
}
function mostrar()
{
leerDatosJSON(jsObj);
}

function promedio(json)
{
    var suma = 0;
    var cont = 0;
    for (var i = 0; i < json.estudiantes.length; i++)
    {
      suma = suma + json.estudiantes[i].Nota;
      cont++;
    }
    document.getElementById("promedio").innerHTML = "El promedio de las notas de todos los estudiantes es: " + suma / cont;

}

function mostrarPromedio()
{
promedio(jsObj);
}

function notaMayor(json)
{
  var out = "-------------------------Mejor Nota----------------------<br>";
  var num = 0;
  var pos = 0;
  for (var i = 0; i < json.estudiantes.length; i++)
  {
    if (json.estudiantes[i].Nota > num)
    {
      num = json.estudiantes[i].Nota;
      pos = i;
    }
  }
  out += "Codigo: " + json.estudiantes[pos].Codigo + " - " + "Nota:  " + json.estudiantes[pos].Nota +  " - "
  + "Nombre: " + " - " + json.estudiantes[pos].Nombre + "<br>";
  document.getElementById("mejor").innerHTML = out;
}

function mostrarMejorEstudiante()
{
notaMayor(jsObj);
}

function notaMenor(json)
{
  var out = "----------------------------Peor Nota------------------------<br>";
  var num = 5;
  var pos = 0;
  for (var i = 0; i < json.estudiantes.length; i++)
  {
    if (json.estudiantes[i].Nota < num)
    {
      num = json.estudiantes[i].Nota;
      pos = i;
    }
  }
  out += "Codigo: " + json.estudiantes[pos].Codigo + " - " + "Nota:  " + json.estudiantes[pos].Nota +  " - "
  + "Nombre: " + " - " + json.estudiantes[pos].Nombre + "<br>";
  document.getElementById("peor").innerHTML = out;
}

function mostrarPeorEstudiante()
{
notaMenor(jsObj);
}

function aprobados(json)
{
  var out = "-------------------------Promovidos------------------------<br>";
  var nota = 3.0;
  for (var i = 0; i < json.estudiantes.length; i++)
  {
    if (json.estudiantes[i].Nota >= nota)
    {
      out += "Codigo: " + json.estudiantes[i].Codigo + " - " + "Nota:  " + json.estudiantes[i].Nota +  " - "
      + "Nombre: " + " - " + json.estudiantes[i].Nombre + "<br>";
    }
  }
  document.getElementById("aprobados").innerHTML = out;
}

function mostrarAprobados()
{
aprobados(jsObj);
}
