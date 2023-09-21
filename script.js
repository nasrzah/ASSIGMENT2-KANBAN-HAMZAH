function tugas(){
    const list = document.getElementById("list");
    const newTugas = document.getElementById("tugas").value;
    if (!newTugas) {
        console.log("Input kosong");
    } else {
        list.innerHTML += `
        <div class="tugas" id="${newTugas.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
            <span>${newTugas}</span>
            <button onclick="move('${newTugas}')">&#8594;</button>
        </div>
        `
    }
}
function move(id) {
    const list = document.getElementById('list');
    const proses = document.getElementById('proses');
    const selesai = document.getElementById('selesai');
    const tugas = document.getElementById(id);

    if (tugas.parentNode.id === 'list') {
        list.removeChild(tugas);
        proses.appendChild(tugas); // Memindahkan tugas dari List ke Proses
    } else if (tugas.parentNode.id === 'proses') {
        proses.removeChild(tugas);
        selesai.appendChild(tugas); // Memindahkan tugas dari Proses ke Selesai
    } else if (tugas.parentNode.id === 'selesai') {
        selesai.removeChild(tugas);
        list.appendChild(tugas); // Memindahkan tugas dari Selesai kembali ke List
    }
}


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}