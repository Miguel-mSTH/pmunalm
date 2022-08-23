import React, { Fragment, useEffect, useState } from "react";

import { Form, Modal } from "react-bootstrap";
import PageTitle from "../layouts/PageTitle";
import { Button, Dropdown } from "react-bootstrap";

const Producto = () => {
  const [productos, setProducto] = useState();
  const [addCard, setAddCard] = useState(false);
  const [form, setForm] = useState({
    nombreCategoria: "",
    descripcionCategoria: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    // saveCategoria(form);

    // setForm({
    //   nombreCategoria: "",
    //   descripcionCategoria: "",
    // });
    // setAddCard(false);
  }
  return (
    <Fragment>
      <PageTitle activeMenu="Registrar" motherMenu="Shop" />
      <Modal className="modal fade" show={addCard} onHide={setAddCard}>
        <div className="" role="document">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title fs-20">Ingresar Inventario</h4>
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
                    {/* add loop for cantidad */}
                    <div className="form-group mb-3">
                      <div className="contact-name">
                        <input
                          type="text"
                          className="form-control"
                          autocomplete="off"
                          name="numero"
                          required="required"
                          onChange={(e) =>
                            setForm((state) => ({
                              ...state,
                              nombreCategoria: e.target.value,
                            }))
                          }
                          placeholder="numero inventario"
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

      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 order-md-1">
                  <h4 className="mb-3">Registrar Producto</h4>
                  <form className="needs-validation" noValidate="">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          placeholder="Ingrese nombre del producto"
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Descripcion</label>
                        <input
                          type="text"
                          className="form-control"
                          id="descripcion"
                          placeholder="Ingrese descripcion del producto"
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">Marca</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          placeholder="Ingrese marca del producto"
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Modelo</label>
                        <input
                          type="text"
                          className="form-control"
                          id="descripcion"
                          placeholder="Ingrese modelo del producto"
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="username">Imagen</label>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Upload</span>

                        <div className="form-file">
                          <input
                            type="file"
                            className="form-file-input form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email">Precio</label>
                      <div className="input-group mb-3">
                        <span className="input-group-text">S/.</span>

                        <input type="text" className="form-control" />

                        <span className="input-group-text">.00</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="address">Cantidad</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Cantidad"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
                      <div className="col-md-6 mb-3 d-flex align-items-center">
                        <Button
                          className="me-2 btn btn-default"
                          variant="secondary btn-rounded"
                          onClick={() => setAddCard(true)}
                        >
                          <span className="btn-icon-start text-secondary">
                            <i className="fa fa-plus color-info" />
                          </span>
                          Add
                        </Button>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address2">Codigo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Ingrese el codigo"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="state">Categoria</label>
                        {/* <Form.Control as="select">
                          <option style={{ color: "blue" }}>Choose...</option>
                          <option>United States</option>
                        </Form.Control> */}
                        <Dropdown>
                          <Dropdown.Toggle variant="white">
                            Dropdown button
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <h5 className="dropdown-header">Dropdown header</h5>
                            <Dropdown.Item href="#">Link 1</Dropdown.Item>
                            <Dropdown.Item href="#">Link 2</Dropdown.Item>
                            <Dropdown.Item href="#">Link 3</Dropdown.Item>
                            <h5 className="dropdown-header">Dropdown header</h5>
                            <Dropdown.Item href="#">Another link</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="state">Presentacion</label>
                        <Form.Control as="select">
                          <option>Choose...</option>
                          <option>California</option>
                        </Form.Control>

                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Guardar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Producto;
