import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { useFormik } from "formik";
import * as Yup from "yup";

const ContactModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      text: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "Must be 15 characters or less*").required("Name Required*"),
      lastName: Yup.string().max(20, "Must be 20 characters or less*").required("Last Name Needed*"),
      email: Yup.string().email("Invalid email address*").required("Please enter a valid email*"),
      phone: Yup.string().matches(phoneRegExp, "Phone number is not valid*"),
      text: Yup.string().min(10, "Must be 10 characters or more*").required("Enter Your Comments Above*"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        <Button type="submit" onClick={handleShow} className="btn btn-lg btn-outline-secondary contactModalBtn">
          Contact
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="contactHeader" closeButton>
          <Modal.Title className="contactTitle">Your Feedback is appreciated</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="contactLabel">Leave your Comments Below</Form.Label>
                <Form.Control
                  as="textarea"
                  size="md"
                  rows="6"
                  id="text"
                  name="text"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.text}
                  placeholder=""
                />
                {formik.touched.text && formik.errors.text ? (
                  <div className="validatedText">{formik.errors.text}</div>
                ) : null}
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="validationFormik01">
                <Form.Label className="contactLabel" htmlFor="firstName">
                  First Name
                </Form.Label>
                <Form.Control
                  size="lg"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="Holden"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="validatedText">{formik.errors.firstName}</div>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="validationFormik01">
                <Form.Label className="contactLabel" htmlFor="lastName">
                  Last Name
                </Form.Label>
                <Form.Control
                  size="lg"
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  placeholder="Hitcher"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="validatedText">{formik.errors.lastName}</div>
                ) : null}
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="validationFormik02">
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
              <Form.Group controlId="validationFormik02">
                <Form.Label className="contactLabel" htmlFor="phone">
                  Phone Number
                </Form.Label>
                <Form.Control
                  size="lg"
                  id="phone"
                  name="phone"
                  type="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder="xxx-XXX-XXXX"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="validatedText">{formik.errors.phone}</div>
                ) : null}
              </Form.Group>
            </Col>
          </Form.Row>
        </Modal.Body>

        <Modal.Footer className="contactFooter">
          <Button
            className="submitButton btn btn-lg"
            type="submit"
            variant="warning"
            onClick={handleClose}
            onSubmit={formik.handleSubmit}
          >
            Send <i className="fa fa-paper-plane" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ContactModal;
