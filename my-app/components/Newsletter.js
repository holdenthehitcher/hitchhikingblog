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
      name: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        <Button type="submit" onClick={handleShow} className="btn btn-outline-success letterModalBtn">
          Sign-up
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Get Email Updates</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>

        <Modal.Footer>
          <Form.Row>
            <Col>
              <Form.Group controlId="validationFormik01">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  size="lg"
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Your Name Here"
                />

                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="validationFormik02">
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Control
                  size="lg"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="ex: holdenthehitcher@gmail.com"
                />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </Form.Group>
              <Button className="submitButton" type="submit" variant="primary" onClick={handleClose} onSubmit={formik.handleSubmit}>
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Newsletter;
