import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import PageTitle from "../layouts/PageTitle";
import { Dropdown } from "react-bootstrap";

const Producto = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Registrar" motherMenu="Shop" />

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

                    <div className="mb-3">
                      <label htmlFor="address">Cantidad</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Marca"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
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
