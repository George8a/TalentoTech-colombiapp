import React from 'react';

function Select() {
    return (
        <div>
            <select class="form-select form-select-lg " >
                <option selected="">Buscar por</option>
                <option value="1">Regiones</option>
                <option value="2">Cuidades</option>
                <option value="3">Departamentos</option>
                <option value="4">Area Natural</option>
                <option value="5">comunidades nativas</option>

            </select>

        </div>
    );
}

export default Select;