import { Container } from "../../Utilities/Container/Container";
import { Form } from "../../Utilities/Form/Form";
import { HeadingSecondary } from "../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { Section } from "../../Utilities/Section/Section";
import { Button } from "../../Utilities/Button/Button";
import { Label } from "../../Utilities/Form/Label/Label";
import { TextArea } from "../../Utilities/Form/TextArea/TextArea";
import { Input } from "../../Utilities/Form/Input/Input";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Enrollform.scss";
import { contactData } from "../../../Data/Data";

export const Enrollform = () => {
  const history = useNavigate();
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format
  const sendMessageHandler = (e) => {
    //e.preventDefault();
    console.log("SUBMITTED");
    history('/thankyou');
  };
  return (
    <Section>
      <Container>
        <div className="contact">
          <div className="contact-logo">
            <img {...contactData.logo} />
          </div>
          <div className="contact-main">
            <HeadingSecondary headingText="Enroll Now" />
            <Form submitHandler={sendMessageHandler}>
              <Label labelFor="name" labelText="Full Name"/>
              <Input required={true} type={"text"} id={"name"} />
              <Label labelFor="email" labelText="Email Address"/>
              <Input required={true} type={"email"} id={"email"} />
              <Label labelFor="phone" labelText="Phone Number"/>
              <Input required={true} type={"tel"} id={"phone"} />
              <Label labelFor="insta" labelText="Instagram Id"/>
              <Input type={"text"} id={"insta"} />
              <Label labelFor="startdate" labelText="Start Date"/>
              <Input type={"date"} id={"startdate"} value={currentDate} />
              <Label labelFor="batch" labelText="Batch Time"/>
              <select id="batch" class="form-group__input">
                <option value="">Select a Batch Timing</option>
                <option value="6 AM - 1 month - ₹1200">6 AM - 1 month - ₹1200</option>
                <option value="6 AM - 3 month - ₹2900">6 AM - 3 month - ₹2900</option>
                <option value="6 AM - 6 month - ₹5000">6 AM - 6 month - ₹5000</option>
                <option value="9:30 AM - 1 month - ₹1200">9:30 AM - 1 month - ₹1200</option>
                <option value="9:30 AM - 3 month - ₹2900">9:30 AM - 3 month - ₹2900</option>
                <option value="9:30 AM - 6 month - ₹5000">9:30 AM - 6 month - ₹5000</option>
                <option value="5 PM - 1 month - ₹1200">5 PM - 1 month - ₹1200</option>
                <option value="5 PM - 6 month - ₹5000">5 PM - 6 month - ₹5000</option>
                <option value="7:30 PM - FaceYoga - 1 month - ₹1500">7:30 PM - FaceYoga - 1 month - ₹1500</option>
                <option value="7:30 PM - FaceYoga - 3 month - ₹3000">7:30 PM - FaceYoga - 3 month - ₹3000</option>


              </select>
              <Label labelFor="medical" labelText="Medical Ailments (if any)"/>
              <TextArea id={"medical"}/>
              <Label labelFor="special" labelText="Special Needs/Ask"/>
              <TextArea id={"special"}/>
              <Button
                {...contactData.button}
                type={"submit"}
              />
            </Form>
          </div>
        </div>
      </Container>
    </Section>
  );
};
