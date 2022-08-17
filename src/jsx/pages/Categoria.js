import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { nanoid } from "nanoid";
import swal from "sweetalert";
import PageTitle from "../layouts/PageTitle";
//import pic1 from "./../../images/profile/small/pic1.jpg";
import CategoriaEditable from "./CategoriaEditable";
import axios from "axios";

const Categoria = () => {
  const [categorias, setCategoria] = useState([]);
  //const [contents, setContents] = useState(tableList);
  const [form, setForm] = useState({
    nombreCategoria: "",
    descripcionCategoria: "",
  });
  //Add data
  const [addFormData, setAddFormData] = useState({
    nombreCategoria: "",
    descripcionCategoria: "",
  });
  // edit  data
  const [editFormData, setEditFormData] = useState({
    nombreCategoria: "",
    descripcionCategoria: "",
  });

  function getCategoria() {
    axios
      .get("https://unalmpm.herokuapp.com/categorias")
      .then((response) => {
        setCategoria(response.data);
      })
      .catch((e) => {});
  }
  function saveCategoria(categoria) {
    axios
      .post("https://unalmpm.herokuapp.com/categorias", categoria)
      .then((response) => {
        swal("Good job!", "Successfully Added", "success");
      })
      .catch(() => {
        swal("Oops", "Failed", "error");
      });
  }

  useEffect(() => {
    //e.preventDefault();
    getCategoria();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    saveCategoria(form);
    setForm({
      nombreCategoria: form.nombreCategoria,
      descripcionCategoria: form.descripcionCategoria,
    });
    setAddCard(false);
    form.nombreCategoria = form.descripcionCategoria = "";
  }

  // delete data
  const handleDeleteClick = (contentId) => {
    const newCategorias = [...categorias];
    const index = categorias.findIndex(
      (categoria) => categoria.id === contentId
    );
    newCategorias.splice(index, 1);
    setCategoria(newCategorias);
  };

  //Modal box
  const [addCard, setAddCard] = useState(false);

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
    if (addFormData.nombreCategoria === "") {
      error = true;
      errorMsg = "Please fill  name";
    } else if (addFormData.descripcionCategoria === "") {
      error = true;
      errorMsg = "Please fill department.";
    }
    if (!error) {
      const newContent = {
        id: nanoid(),
        nombreCategoria: addFormData.nombreCategoria,
        descripcionCategoria: addFormData.descripcionCategoria,
      };

      const newCategorias = [...categorias, newContent];
      setCategoria(newCategorias);
      setAddCard(false);
      swal("Good job!", "Successfully Added", "success");
      addFormData.nombre = addFormData.descripcion = "";
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  //Edit start
  //const [editModal, setEditModal] = useState(false);
  // Edit function editable page loop
  const [editContentId, setEditContentId] = useState(null);

  // Edit function button click to edit
  const handleEditClick = (event, categoria) => {
    event.preventDefault();
    setEditContentId(categoria.id);
    const formValues = {
      nombreCategoria: categoria.nombreCategoria,
      descripcionCategoria: categoria.descripcionCategoria,
    };
    setForm(formValues);
    //setEditModal(true);
  };

  //update data function
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("nombre");
    const fieldValue = event.target.value;
    const newFormData = { ...form };
    newFormData[fieldName] = fieldValue;
    setForm(newFormData);
  };

  // edit form data submit
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContent = {
      id: editContentId,
      nombreCategoria: form.nombreCategoria,
      descripcionCategoria: form.descripcionCategoria,
    };
    const newCategorias = [...categorias];
    const index = categorias.findIndex(
      (categoria) => categoria.id === editContentId
    );
    newCategorias[index] = editedContent;
    setCategoria(newCategorias);
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
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h4 className="modal-title fs-20">Add Categoria</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setAddCard(false)}
                    //onClick={handleClick}
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
                        <label className="text-black font-w500">Nombre</label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autocomplete="off"
                            name="name"
                            required="required"
                            value={form.nombreCategoria}
                            onChange={(e) =>
                              setForm((state) => ({
                                ...state,
                                nombreCategoria: e.target.value,
                              }))
                            }
                            placeholder="nombre"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">
                          Descripcion
                        </label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autocomplete="off"
                            name="descripcion"
                            required="required"
                            value={form.descripcionCategoria}
                            onChange={(e) =>
                              setForm((state) => ({
                                ...state,
                                descripcionCategoria: e.target.value,
                              }))
                            }
                            placeholder="descripcion"
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
                    //onClick={handleAddFormSubmit}
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
            <h4 className="card-title">Lista de Categorias</h4>
          </div>
          <div className="card-body">
            <div className="w-100 table-responsive">
              <div id="example_wrapper" className="dataTables_wrapper">
                <form onSubmit={handleEditFormSubmit}>
                  <table id="example" className="display w-100 dataTable">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categorias.map((categoria) => (
                        <>
                          {editContentId === categoria.id ? (
                            <CategoriaEditable
                              editFormData={editFormData}
                              handleEditFormChange={handleEditFormChange}
                              handleCancelClick={handleCancelClick}
                            />
                          ) : (
                            <tr>
                              <td>
                                <strong>{categoria.nombreCategoria}</strong>
                              </td>
                              <td>{categoria.descripcionCategoria}</td>
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
                                      handleEditClick(event, categoria)
                                    }
                                  >
                                    <i className="fas fa-pen"></i>
                                  </Link>
                                  <Link
                                    className="btn btn-danger shadow btn-xs sharp"
                                    onClick={() =>
                                      handleDeleteClick(categoria.id)
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
export default Categoria;
