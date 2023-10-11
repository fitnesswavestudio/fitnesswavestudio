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
import axios from 'axios';

export const Enrollform = () => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format
  const [formData, setFormData] = useState({
    "entry.891379053": '',
    "entry.1080075188": '',
    "entry.1106114092": '',
    "entry.1888004658": '',
    "entry.1615610469": currentDate,
    "entry.1351931318": '',
    "entry.810166459": '',
    "entry.352750955": ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const history = useNavigate();
  
  const sendMessageHandler = async(e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server with form data
      const response = await axios.post(`https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXxlO18FwGZ0OT6_0Y32n5O0qbxBm_m4VmrbOdG-AJY4GSdw/formResponse?entry.891379053=${formData["entry.891379053"]}&entry.1080075188=${formData["entry.1080075188"]}&entry.1106114092=${formData["entry.1106114092"]}&entry.1888004658=${formData["entry.1888004658"]}&entry.1615610469=${formData["entry.1615610469"]}&entry.1351931318=${formData["entry.1351931318"]}&entry.810166459=${formData["entry.810166459"]}&entry.352750955=${formData["entry.352750955"]}
      `);
      
      // Handle the response (success or error) here
    } catch (error) {
      // Handle errors here
    }
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
              <Input name="entry.891379053" value={formData["entry.891379053"]} required={true} type={"text"} id={"name"} changeHandler={handleChange} />
              <Label labelFor="email" labelText="Email Address"/>
              <Input name="entry.1080075188" value={formData["entry.1080075188"]} required={true} type={"email"} id={"email"} changeHandler={handleChange}/>
              <Label labelFor="phone" labelText="Phone Number"/>
              <Input name="entry.1106114092" value={formData["entry.1106114092"]} required={true} type={"tel"} id={"phone"} changeHandler={handleChange}/>
              <Label labelFor="insta" labelText="Instagram Id"/>
              <Input name="entry.1888004658" value={formData["entry.1888004658"]} type={"text"} id={"insta"} 
              changeHandler={handleChange}/>
              <Label labelFor="startdate" labelText="Start Date"/>
              <Input name="entry.1615610469" value={formData["entry.1615610469"]} required={true} 
              min={currentDate} max={currentDate} 
              changeHandler={handleChange}
              type={"date"} id={"startdate"} />
              <Label labelFor="batch" labelText="Batch Time"/>
              <select id="batch" name="entry.1351931318" value={formData["entry.1351931318"]} class="form-group__input" onChange={handleChange}>
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
              <TextArea name="entry.810166459" value={formData["entry.810166459"]} id={"medical"} changeHandler={handleChange}/>
              <Label labelFor="special" labelText="Special Needs/Ask"/>
              <TextArea name="entry.352750955" value={formData["entry.352750955"]} id={"special"} changeHandler={handleChange}/>
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
