import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Card, Table, Badge, Dropdown } from "react-bootstrap";
//import loadable from "@loadable/component";
//import pMinDelay from "p-min-delay";

//Import
import { ThemeContext } from "../../../context/ThemeContext";
import {
  JuiceIcon,
  DollerIcon,
  UserIcon,
} from "../Lezato/Home/SvgIcons/SvgIcons";
import DonutChart from "../Lezato/Home/DonutChart";
//import DailyTrending from "../Lezato/Home/DailyTrending";
import TrandingBlog from "../Lezato/Home/TrandingBlog";
//import CustomerMap from "../Lezato/Home/CustomerMap";
//import CustomersBlog from "../Lezato/Home/CustomersBlog";
//import DeliveryMaps from "../Lezato/Home/DeliveryMaps";

/* const RevenuChart = loadable(() =>
  pMinDelay(import("../Lezato/Home/RevenuChart"), 1000)
); */

const cardBlog = [
  {
    title: "Total Menus",
    Numbers: "459",
    Chartvalue: 60,
    Icons: <JuiceIcon />,
  },
  {
    title: "Total Revenue",
    Numbers: "$87,561",
    Chartvalue: 80,
    Icons: <DollerIcon />,
  },
  {
    title: "Total Oders",
    Numbers: "247",
    Chartvalue: 60,
    Icons: <DollerIcon />,
  },
  {
    title: "Total Customers",
    Numbers: "872",
    Chartvalue: 70,
    Icons: <UserIcon />,
  },
];

const Home = () => {
  const { changeBackground, background } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);
  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
  return (
    <>
      <div className="mb-sm-4 d-flex flex-wrap align-items-center text-head">
        <h2 className="mb-3 me-auto">Dashboard</h2>
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to={"#"}>Dashboard</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"#"}>Dashboard</Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-xxl-6">
          <div className="row">
            {cardBlog.map((data, index) => (
              <div className="col-xl-6 col-sm-6" key={index}>
                <div className="card">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="menu">
                      <span className="font-w500 fs-16 d-block mb-2">
                        {data.title}
                      </span>
                      <h2>{data.Numbers}</h2>
                    </div>
                    <div className="d-inline-block position-relative donut-chart-sale">
                      {/* <span className="donut1" data-peity='{ "fill": ["rgb(98, 79, 209,1)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/8</span> */}
                      <DonutChart
                        value={data.Chartvalue}
                        backgroundColor="rgba(98, 79, 209,1)"
                        backgroundColor2="rgba(247, 245, 255)"
                      />
                      <small className="text-black">{data.Icons}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-xl-6 col-xxl-6">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0">
                  <div>
                    <h4 className="fs-20 mb-1">Trending Keyword</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                </div>
                <TrandingBlog />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Productos recien añadidos</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="width80">
                      <strong>#</strong>
                    </th>
                    <th>
                      <strong>PRODUCTO</strong>
                    </th>
                    <th>
                      <strong>MARCA</strong>
                    </th>
                    <th>
                      <strong>CATEGORIA</strong>
                    </th>
                    <th>
                      <strong>ESTATUS</strong>
                    </th>
                    <th>
                      <strong>CANTIDAD</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>01</strong>
                    </td>
                    <td>Mr. Bobby</td>
                    <td>Dr. Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      <Badge variant="success light">Successful</Badge>
                    </td>
                    <td>$21.56</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Edit</Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>02</strong>
                    </td>
                    <td>Mr. Bobby</td>
                    <td>Dr. Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      <Badge variant="danger light">Canceled</Badge>
                    </td>
                    <td>$21.56</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="danger"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Edit</Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>03</strong>
                    </td>
                    <td>Mr. Bobby</td>
                    <td>Dr. Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      <Badge variant="warning light">Pending</Badge>
                    </td>
                    <td>$21.56</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="warning"
                          className="light sharp i-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Edit</Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};
export default Home;
