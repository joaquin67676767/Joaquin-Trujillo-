const clave_favoritos = "techstore_favoritos";

export function obtenerFavoritos() {
    const textoGuardado = localStorage.getItem(clave_favoritos);

    if (textoGuardado === null) {
        return [];
    }

    try {
        const favoritos = JSON.parse(textoGuardado);
        return favoritos;
    } catch (error) {
        return [];
    }
}

export function esProductoFavorito(id) {
    const favoritos = obtenerFavoritos();
    return favoritos.includes(id);
}

export function alternarFavorito(id) {
    const favoritos = obtenerFavoritos();
    let nuevosFavoritos;

    if (favoritos.includes(id)) {
        nuevosFavoritos = favoritos.filter(function (favId) {
            return favId !== id;
        });
    } else {
        nuevosFavoritos = favoritos;
        nuevosFavoritos.push(id);
    }

    const textoParaGuardar = JSON.stringify(nuevosFavoritos);
    localStorage.setItem(clave_favoritos, textoParaGuardar);
}
