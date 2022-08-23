import React from "react";

const ProductoEditable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Ingrese nombre ..."
            name="nombreCategoria"
            value={editFormData.nombreCategoria}
            onChange={handleEditFormChange}
            // onChange={(e) =>
            //   setCategoria((state) => ({ ...state, nombre: e.target.value }))
            // }
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a department ..."
            name="descripcionCategoria"
            value={editFormData.descripcionCategoria}
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
export default ProductoEditable;
