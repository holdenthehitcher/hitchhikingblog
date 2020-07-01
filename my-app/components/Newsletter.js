import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { useFormik } from "formik";
import * as Yup from "yup";

const Newsletter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, "Must be 20 characters or less*").required("Name required*"),
      email: Yup.string().email("Invalid email address*").required("Email required*"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        <Button type="submit" onClick={handleShow} className="btn btn-success letterModalBtn">
          Sign-up
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="newsletterHeader" closeButton>
          <Modal.Title className="newsletterTitle">Get the latest updates in your email</Modal.Title>
        </Modal.Header>
        <Modal.Body className="newsletterBody">
          <div className="row justify-content-center centered">
            <div className="col background-text textScrim">
              <h2>Join Holden the Hitcher</h2>
            </div>
          </div>
        </Modal.Body>
        <Modal.FooterNav>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label className="contactLabel" htmlFor="name">
                  Name
                </Form.Label>
                <Form.Control
                  size="lg"
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Your Name Here:"
                />

                {formik.touched.name && formik.errors.name ? (
                  <div className="validatedText">{formik.errors.name}</div>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="contactLabel" htmlFor="email">
                  E-mail
                </Form.Label>
                <Form.Control
                  size="lg"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="ex: hth@gmail.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="validatedText">{formik.errors.email}</div>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Button
                className="submitButton mt-5 ml-3 btn btn-lg"
                type="submit"
                variant="success"
                onClick={handleClose}
                onSubmit={formik.handleSubmit}
              >
                Register
              </Button>
            </Col>
          </Form.Row>
        </Modal.FooterNav>
      </Modal>
    </>
  );
};
export default Newsletter;
