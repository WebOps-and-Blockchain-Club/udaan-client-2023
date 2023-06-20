import Image from "next/image";
import React, { useState, ChangeEvent } from 'react';
import imageSrc from '../../utils/Logo.png';
import styles from '../../styles/registration.module.css';
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    password: 'hdfh',
    gender: '',
    contactNo: '',
    email: '',
    aadhar: '',
    pan: '',
    address: '',
    state: '',
    district: '',
    pincode: '',
    educationQualification: '',
    specialQualification: '',
    reasonToJoin: '',
    photo: "gmh",
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      dateOfBirth: selectedDate,
    }));
  };

  const handleContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // Using regex to check if the input value contains only digits
    if (/^\d*$/.test(value)) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "pincode" && value.length === 6) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${value}`);

        if (response.data && response.data.length > 0 && response.data[0].Status === "Success") {
          const data = response.data[0].PostOffice[0];
          setFormData((prevFormData) => ({
            ...prevFormData,
            state: data.State,
            district: data.District,
            // pincode: data.pincode,
          }));
        } else {
          console.log("Invalid pincode");
          // Clear state and district values if pincode is invalid
          setFormData({
            ...formData,
            state: "",
            district: "",
            pincode: "",
          });
        }
      } catch (error) {
        console.error("Error fetching pincode details:", error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle registration logic here");
  };

  const hangleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fetch("http://localhost:8000/registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.userInserted) {
          alert("Try again");
          window.location.reload();
          return;
        }
        if (res?.result) {
          alert("User Already exist, please login");
          return;
        }
        localStorage.setItem("token", res.auth);
        alert("User registered");
      })
      .catch((e) => {
        console.log(e);
      });
  };


  return (
    <>
      <Navbar />
      <div className={styles.RegistrationPage}>
        <div className={styles.container}>
          <div className={styles.Logo_Container}>
            <Image src={imageSrc} alt="Registration" className={styles.Logo} />
            <div className={styles.Logo_title}>
              <h2>UDAAN</h2>
              <h2>First Responder</h2>
            </div>
          </div>

          <div className={styles.registration_section}>

            <h2 className={styles.registration_title1}>Join Udaan</h2>
            <h3 className={styles.registration_title}>NCC First Responder</h3>

            <form onSubmit={handleSubmit} className={styles.form}>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="firstName">First Name <span className={formData.firstName === '' ? styles.mandatory : ''}> *</span></label>
                  <input className={styles.input} type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter your first name" />
                </div>

                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="middleName">Middle Name</label>
                  <input className={styles.input} type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Enter your middle name" />
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="lastName">Last Name </label>
                  <input className={styles.input} type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter your last name" />
                </div>

                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="fatherName">Father Name <span className={formData.fatherName === '' ? styles.mandatory : ''}> *</span></label>
                  <input className={styles.input} type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required placeholder="Enter your father's name" />
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="motherName">
                    Mother Name <span className={formData.motherName === '' ? styles.mandatory : ''}> *</span>
                  </label>
                  <input className={styles.input} type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} required placeholder="Enter your mother's name" />
                </div>


                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="dateOfBirth">
                    Date of Birth<span className={formData.dateOfBirth !== null ? ' mandatory' : ''}> *</span>
                  </label>
                  <div className={styles.input}>
                    <input
                      style={{
                        border: 'none',
                        width: '100%',
                        color: '#000',
                        outline: 'none'
                      }}
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth !== null ? formData.dateOfBirth.split('T')[0] : ''}
                      onChange={handleDateChange}
                      required
                    />

                  </div>
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="gender">Select Gender <span className={formData.gender === '' ? styles.mandatory : ''}> *</span></label>
                  <select className={styles.selectInput} id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="contactNo">
                    Contact Number
                    <span className={formData.contactNo === '' ? styles.mandatory : ''}> *</span>
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleContact}
                    required
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="email">Email Address <span className={formData.email === '' ? styles.mandatory : ''}> *</span></label>
                  <input className={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
                </div>

                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="aadhar">Aadhar Number <span className={formData.aadhar === '' ? styles.mandatory : ''}> *</span></label>
                  <input className={styles.input} type="text" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleChange} required placeholder="Enter your Aadhar number" />
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="pan">PAN</label>
                  <input className={styles.input} type="text" id="pan" name="pan" value={formData.pan} onChange={handleChange} placeholder="Enter your PAN number" />
                </div>

                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="address">Address <span className={formData.address === '' ? styles.mandatory : ''}> *</span></label>
                  <textarea className={styles.textarea} id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="Enter your address"></textarea>
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="pincode">Pincode <span className={formData.pincode === '' ? styles.mandatory : ''}> *</span></label>
                  <input className={styles.input} type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required placeholder="Enter your pincode" />
                </div>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="state">State</label>
                  {/* <input className={styles.input} type="text" id="state" name="state" value={formData.state} onChange={handleChange} placeholder="Enter your state" /> */}
                  <select className={styles.selectInput} id="state" name="state" value={formData.state} onChange={handleChange} required>
                    <option value="" disabled selected>Choose State</option>
                    <option value="Andaman Nicobar">Andaman Nicobar</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra Nagar Haveli">Dadra Nagar Haveli</option>
                    <option value="Daman Diu">Daman Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu Kashmir">Jammu Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="district">District <span className={formData.district === '' ? styles.mandatory : ''}> *</span></label>
                  <input className={styles.input} type="text" id="district" name="district" value={formData.district} onChange={handleChange} required placeholder="Enter your district" />
                </div>

                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="educationQualification">Education Qualification <span className={formData.educationQualification === '' ? styles.mandatory : ''}> *</span></label>
                  <select className={styles.selectInput} id="educationQualification" name="educationQualification" value={formData.educationQualification} onChange={handleChange} required>
                    <option value="">Select Qualification</option>
                    <option value="MATRICULATION">MATRICULATION</option>
                    <option value="INTERMEDIATE">INTERMEDIATE</option>
                    <option value="GRADUATION">GRADUATION</option>
                    <option value="POST GRADUATION">POST GRADUATION</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="specialQualification">Special Qualification</label>
                  <input className={styles.input} type="text" id="specialQualification" name="specialQualification" value={formData.specialQualification} onChange={handleChange} placeholder="Enter your special qualification" />
                </div>

                <div className={styles.Input_box}>
                  <label className={styles.input_title} htmlFor="reasonToJoin">Reason to Join <span className={formData.reasonToJoin === '' ? styles.mandatory : ''}> *</span></label>
                  <textarea className={styles.textarea} id="reasonToJoin" name="reasonToJoin" value={formData.reasonToJoin} onChange={handleChange} required placeholder="Enter your reason to join"></textarea>
                </div>
              </div>

              <div className={styles.row_of_two_Input}>
                <div className={styles.Input_box}>
                  <label className={styles.input_title}>
                    Recent Photo
                    <span className={formData.reasonToJoin === '' ? styles.mandatory : ''}> *</span>
                  </label>
                  <input
                    type="file"
                    className={styles.input}
                    name="photo"
                    required
                  />
                </div>

              </div>

              <div className={styles.row_of_two_Input}>
                <button type="submit" className={styles.Registration_btn} onClick={hangleSignUp}>Register</button>
              </div>
            </form>

          </div >

        </div >

        {/* <div>
        <Footer/>
      </div> */}

      </div>
    </>

  );
};

export default RegistrationForm; 