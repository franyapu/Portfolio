const estudios = [
    {
        titulo: 'Ingeniería en Sistemas de Información',
        descripcion: 'Universidad Tecnológica Nacional - 2023 - Actualidad',
        imagen: 'Img/UTN.jpg'
    },
    {
        titulo: 'Periodismo Especializado en Deportes',
        descripcion: 'Tea & Deportea - 2020 - 2022',
        imagen: 'Img/TeaDeportea.jpg'
    },
    {
        titulo: 'Bachiller en Ciencias Economicas',
        descripcion: 'Instituto Santa Maria - 2015 - 2019',
        imagen: 'Img/SantaMaria.jpeg'
    }
    // Agregar más estudios aquí
];

let indiceEstudio = 0;

function cambiarEstudio(direccion) {
    indiceEstudio += direccion;
    if (indiceEstudio < 0) {
        indiceEstudio = estudios.length - 1;
    } else if (indiceEstudio >= estudios.length) {
        indiceEstudio = 0;
    }
    document.getElementById('estudio-imagen').src = estudios[indiceEstudio].imagen;
    document.getElementById('estudio-titulo').innerText = estudios[indiceEstudio].titulo;
    document.getElementById('estudio-descripcion').innerText = estudios[indiceEstudio].descripcion;
}