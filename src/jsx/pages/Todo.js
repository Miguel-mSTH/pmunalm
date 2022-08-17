import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { nanoid } from "nanoid";
import swal from "sweetalert";
import PageTitle from "../layouts/PageTitle";
//import pic1 from "./../../images/profile/small/pic1.jpg";
import Editable from "./Editable";
import axios from "axios";

/* const tableList = [
  {
    id: "1",
    name: "Tiger Nixon",
    department: "Architect",
    gender: "Male",
    education: "M.COM., M.B.A",
    mobile: "12345 67890",
    email: "info1@example.com",
  },
  {
    id: "2",
    name: "Gloria Little",
    department: " Administrator",
    gender: "Male",
    education: "BTech, MTech",
    mobile: "09876 54321",
    email: "info2@example.com",
  },
  {
    id: "3",
    name: "Bradley Greer",
    department: "Software Engineer",
    gender: "Male",
    education: "B.CA M.CA",
    mobile: "98765 67890",
    email: "info3@example.com",
  },
  {
    id: "4",
    name: "Gloria Little",
    department: " Administrator",
    gender: "Male",
    education: "BTech, MTech",
    mobile: "09876 54321",
    email: "info4@example.com",
  },
  {
    id: "5",
    name: "Tiger Nixon",
    department: "Architect",
    gender: "Male",
    education: "M.COM., M.B.A",
    mobile: "12345 67890",
    email: "info5@example.com",
  },
  {
    id: "6",
    name: "Bradley Greer",
    department: "Software Engineer",
    gender: "Male",
    education: "B.CA M.CA",
    mobile: "98765 67890",
    email: "info6@example.com",
  },
]; */

const Todo = () => {
  const [productos, setProducto] = useState([]);
  //const [contents, setContents] = useState(tableList);

  function getProducto() {
    axios
      .get("https://unalmpm.herokuapp.com/productos")
      .then((response) => {
        setProducto(response.data);
      })
      .catch((e) => {});
  }

  useEffect(() => {
    getProducto();
  }, []);

  // delete data
  const handleDeleteClick = (contentId) => {
    const newProductos = [...productos];
    const index = productos.findIndex(
      (producto) => producto.idProducto === contentId
    );
    newProductos.splice(index, 1);
    setProducto(newProductos);
  };

  //Modal box
  const [addCard, setAddCard] = useState(false);
  //Add data
  const [addFormData, setAddFormData] = useState({
    nombre: "",
    descripcion: "",
    marca: "",
    categoria: "",
  });

  // Add contact function
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("nombre");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  //Add Submit data
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    var error = false;
    var errorMsg = "";
    if (addFormData.nombre === "") {
      error = true;
      errorMsg = "Please fill  name";
    } else if (addFormData.descripcion === "") {
      error = true;
      errorMsg = "Please fill department.";
    } else if (addFormData.marca === "") {
      error = true;
      errorMsg = "please fill gender";
    }
    if (!error) {
      const newContent = {
        idProducto: nanoid(),
        nombre: addFormData.nombre,
        descripcion: addFormData.descripcion,
        marca: addFormData.marca,
        categoria: addFormData.categoria,
      };

      const newProductos = [...productos, newContent];
      setProducto(newProductos);
      setAddCard(false);
      swal("Good job!", "Successfully Added", "success");
      addFormData.nombre =
        addFormData.descripcion =
        addFormData.marca =
        addFormData.categoria =
          "";
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  //Edit start
  //const [editModal, setEditModal] = useState(false);
  // Edit function editable page loop
  const [editContentId, setEditContentId] = useState(null);

  // Edit function button click to edit
  const handleEditClick = (event, producto) => {
    event.preventDefault();
    setEditContentId(producto.idProducto);
    const formValues = {
      imagen: producto.imagen,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      marca: producto.marca,
      categoria: producto.categoria,
    };
    setEditFormData(formValues);
    //setEditModal(true);
  };

  // edit  data
  const [editFormData, setEditFormData] = useState({
    nombre: "",
    descripcion: "",
    marca: "",
    categoria: "",
  });

  //update data function
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("nombre");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  // edit form data submit
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContent = {
      idProducto: editContentId,
      nombre: editFormData.nombre,
      descripcion: editFormData.descripcion,
      marca: editFormData.marca,
      categoria: editFormData.categoria,
    };
    const newProductos = [...productos];
    const index = productos.findIndex(
      (producto) => producto.idProducto === editContentId
    );
    newProductos[index] = editedContent;
    setProducto(newProductos);
    setEditContentId(null);
    // setEditModal(false);
  };
  //Cencel button to same data
  const handleCancelClick = () => {
    setEditContentId(null);
  };

  return (
    <>
      <PageTitle activeMenu="Table" motherMenu="Post" />
      <div className="col-12">
        <Modal className="modal fade" show={addCard} onHide={setAddCard}>
          <div className="" role="document">
            <div className="">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title fs-20">Add Contact</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setAddCard(false)}
                    data-dismiss="modal"
                  >
                    <span></span>
                  </button>
                </div>
                <div className="modal-body">
                  <i
                    className="flaticon-cancel-12 close"
                    data-dismiss="modal"
                  ></i>
                  <div className="add-contact-box">
                    <div className="add-contact-content">
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Name</label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autocomplete="off"
                            name="name"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="name"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">
                          Department
                        </label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autocomplete="off"
                            name="department"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="department"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Gender</label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autocomplete="off"
                            name="gender"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="gender"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">
                          Education
                        </label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autocomplete="off"
                            name="education"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="education"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Mobile</label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autocomplete="off"
                            name="mobile"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="mobile"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Email</label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autocomplete="off"
                            name="email"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="email"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleAddFormSubmit}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddCard(false)}
                    className="btn btn-danger"
                  >
                    {" "}
                    <i className="flaticon-delete-1"></i> Discard
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Profile Datatable</h4>
          </div>
          <div className="card-body">
            <div className="w-100 table-responsive">
              <div id="example_wrapper" className="dataTables_wrapper">
                <form onSubmit={handleEditFormSubmit}>
                  <table id="example" className="display w-100 dataTable">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Marca</th>
                        <th>Categoria</th>
                        <th>Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productos.map((producto) => (
                        <>
                          {editContentId === producto.idProducto ? (
                            <Editable
                              editFormData={editFormData}
                              handleEditFormChange={handleEditFormChange}
                              handleCancelClick={handleCancelClick}
                            />
                          ) : (
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width="35"
                                  src={producto.imagen} //pic1
                                  alt=""
                                />
                              </td>
                              <td>
                                <strong>{producto.nombre}</strong>
                              </td>
                              <td>{producto.descripcion}</td>
                              <td>{producto.marca}</td>
                              <td>{producto.categoria["nombre"]}</td>
                              <td>
                                <div className="d-flex">
                                  <Link
                                    className="btn btn-primary shadow btn-xs sharp me-2"
                                    onClick={() => setAddCard(true)}
                                  >
                                    <i className="fa fa-plus"></i>
                                  </Link>
                                  <Link
                                    className="btn btn-secondary shadow btn-xs sharp me-2"
                                    onClick={(event) =>
                                      handleEditClick(event, producto)
                                    }
                                  >
                                    <i className="fas fa-pen"></i>
                                  </Link>
                                  <Link
                                    className="btn btn-danger shadow btn-xs sharp"
                                    onClick={() =>
                                      handleDeleteClick(producto.idProducto)
                                    }
                                  >
                                    <i className="fa fa-trash"></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
