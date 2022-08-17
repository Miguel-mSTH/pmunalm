import React from "react";

const Editable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <>
      <tr>
        <td></td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Ingrese nombre ..."
            name="nombre"
            value={editFormData.nombre}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a department ..."
            name="department"
            value={editFormData.descripcion}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a gender ..."
            name="gender"
            value={editFormData.marca}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a education"
            name="education"
            value={editFormData.categoria["nombre"]}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <div className="d-flex">
            <button
              className="btn btn-warning shadow btn-xs sharp me-1"
              type="submit"
            >
              <i className="las la-check-circle scale5"></i>
            </button>
            <button
              className="btn btn-danger shadow btn-xs sharp "
              type="button"
              onClick={handleCancelClick}
            >
              <i className="las la-times-circle scale5"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
export default Editable;
