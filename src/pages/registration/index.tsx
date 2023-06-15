import Image from "next/image"
import React, { useState, ChangeEvent } from 'react';
import imageSrc from '../../utils/Logo.png';
import styles from '../../styles/registration.module.css';
import axios from "axios";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    dob: null as Date | null,
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
    photo: "",
  });

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    const dateObject = selectedDate ? new Date(selectedDate) : null;

    setFormData((prevFormData) => ({
      ...prevFormData,
      dob: dateObject,
    }));
  };


  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "pincode" && value.length === 6) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${value}`);

        if (response.data && response.data.length > 0 && response.data[0].Status === "Success") {
          const data = response.data[0].PostOffice[0];
          setFormData({
            ...formData,
            state: data.State,
            district: data.District,
            pincode: data.pincode,
          });
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

  function handlePhotoUpload(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageTitleContainer}>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt="Registration" className={styles.image} />
        </div>
        <div className={styles.title}>
          <h2 className={styles.udaan}>UDAAN</h2>
          <h2 className={styles.responder}>First Responder</h2>
        </div>
      </div>
      <div className={styles.registrationContainer}>
        <h2 className={styles.heading2}>Join Udaan</h2>
        <h3 className={styles.heading3}>NCC First Responder</h3>
        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="firstName">First Name <span className={formData.firstName === '' ? styles.mandatory : ''}> *</span></label>
              <input className={styles.input} type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter your first name" />
            </div>

            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="middleName">Middle Name</label>
              <input className={styles.input} type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Enter your middle name" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="lastName">Last Name </label>
              <input className={styles.input} type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter your last name" />
            </div>

            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="fatherName">Father Name <span className={formData.fatherName === '' ? styles.mandatory : ''}> *</span></label>
              <input className={styles.input} type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required placeholder="Enter your father's name" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="motherName">
                Mother Name <span className={formData.motherName === '' ? styles.mandatory : ''}> *</span>
              </label>
              <input className={styles.input} type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} required placeholder="Enter your mother's name" />
            </div>


            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="dob">
                Date of Birth<span className={formData.dob !== null ? ' mandatory' : ''}> *</span>
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
                  id="dob"
                  name="dob"
                  value={formData.dob !== null ? formData.dob.toISOString().split('T')[0] : ''}
                  onChange={handleDateChange}
                  required
                />

              </div>
            </div>
          </div>


          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="gender">Select Gender <span className={formData.gender === '' ? styles.mandatory : ''}> *</span></label>
              <select className={styles.select} id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="contactNo">Contact Number <span className={formData.contactNo === '' ? styles.mandatory : ''}> *</span></label>
              <input className={styles.input} type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required placeholder="Enter your contact number" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="email">Email Address <span className={formData.email === '' ? styles.mandatory : ''}> *</span></label>
              <input className={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
            </div>

            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="aadhar">Aadhar Number <span className={formData.aadhar === '' ? styles.mandatory : ''}> *</span></label>
              <input className={styles.input} type="text" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleChange} required placeholder="Enter your Aadhar number" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="pan">PAN</label>
              <input className={styles.input} type="text" id="pan" name="pan" value={formData.pan} onChange={handleChange} placeholder="Enter your PAN number" />
            </div>

            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="address">Address <span className={formData.address === '' ? styles.mandatory : ''}> *</span></label>
              <textarea className={styles.textarea} id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="Enter your address"></textarea>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="pincode">Pincode <span className={formData.pincode === '' ? styles.mandatory : ''}> *</span></label>
              <input className={styles.input} type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required placeholder="Enter your pincode" />
            </div>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="state">State</label>
              {/* <input className={styles.input} type="text" id="state" name="state" value={formData.state} onChange={handleChange} placeholder="Enter your state" /> */}
              <select className={styles.select} id="state" name="state" value={formData.state} onChange={handleChange} required>
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

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="district">District <span className={formData.district === '' ? styles.mandatory : ''}> *</span></label>
              <input className={styles.input} type="text" id="district" name="district" value={formData.district} onChange={handleChange} required placeholder="Enter your district" />
            </div>

            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="educationQualification">Education Qualification <span className={formData.educationQualification === '' ? styles.mandatory : ''}> *</span></label>
              <select className={styles.select} id="educationQualification" name="educationQualification" value={formData.educationQualification} onChange={handleChange} required>
                <option value="">Select Qualification</option>
                <option value="MATRICULATION">MATRICULATION</option>
                <option value="INTERMEDIATE">INTERMEDIATE</option>
                <option value="GRADUATION">GRADUATION</option>
                <option value="POST GRADUATION">POST GRADUATION</option>
                <option value="OTHERS">OTHERS</option>
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="specialQualification">Special Qualification</label>
              <input className={styles.input} type="text" id="specialQualification" name="specialQualification" value={formData.specialQualification} onChange={handleChange} placeholder="Enter your special qualification" />
            </div>

            <div className={styles.formInput}>
              <label className={styles.label} htmlFor="reasonToJoin">Reason to Join <span className={formData.reasonToJoin === '' ? styles.mandatory : ''}> *</span></label>
              <textarea className={styles.textarea} id="reasonToJoin" name="reasonToJoin" value={formData.reasonToJoin} onChange={handleChange} required placeholder="Enter your reason to join"></textarea>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formInput}>
              <label className={styles.label}>
                Recent Photo
                <span className={styles.mandatory}> *</span>
              </label>
              <input
                type="file"
                className={styles.input}
                name="photo"
                required
              />
            </div>

          </div>


          <div className={styles.formRow}>
            <button type="submit" className={styles.submitButton}>Register</button>
          </div>
        </form>
      </div >
    </div >
  );
};

export default RegistrationForm;








// <div className="formRow">
//             <label className="label">Are You? <span className="req">*</span></label>
//           </div>
//           <div className="formRow">
//             <input type="radio" name="you" value="Cadet" id="cadet" className="input" />
//             <label htmlFor="cadet" className="label">Cadet</label>
//             <input type="radio" name="you" value="Ex-Cadet" id="exCadet" className="input" />
//             <label htmlFor="exCadet" className="label">Ex-Cadet</label>
//             <input type="radio" name="you" value="Belong from NCC" id="ncc" className="input" />
//             <label htmlFor="ncc" className="label">Belong from NCC</label>
//             <input type="radio" name="you" value="Civilian" id="civilian" className="input" checked />
//             <label htmlFor="civilian" className="label">Civilian</label>
//           </div>

//           <div id="vdiv" style={{ display: 'none' }}>
//             <div className="formRow">
//               <div id="cadetshow" className="formInput" style={{ display: 'none' }}>
//                 <label className="label">School / College Name <span className="req">*</span></label>
//                 <input type="text" className="input" name="school" id="school" placeholder="School / College Name..." />
//               </div>
//               <div className="formInput">
//                 <label className="label">Directorate <span className="req reqshow">*</span></label>
//                 <select id="directorate" className="select" name="directorate">
//                   <option value="">Select Directorate</option>
//                   <option value="Andhra Pradesh & Telangana">Andhra Pradesh & Telangana</option>
//                   <option value="Bihar & Jharkhand">Bihar & Jharkhand</option>
//                   {/* ... */}
//                 </select>
//               </div>
//             </div>
//             {/* More form inputs */}
//             {/* ... */}
//           </div>

//           <div className="formRow">
//             <label className="label">Why do you wish to join UDAAN?</label>
//             <textarea name="why" className="textarea" placeholder="Type your message (if any)"></textarea>
//           </div>

//           <div className="formRow">
//             <label className="label">Special Qualification</label>
//             <select name="extra" className="select">
//               <option value="">Select Special Qualification</option>
//               <option value="FORMER/EXCADETS">FORMER/EXCADETS</option>
//               <option value="SERVED IN NCC AS ANO">SERVED IN NCC AS ANO</option>
//               {/* ... */}
//             </select>
//           </div>

//           <div className="formRow">
//             <input type="checkbox" required className="input" />
//             <span className="req">*</span>
//             <span className="label">I hereby declare that the information given in this application is true and correct to the best of my knowledge and belief. In case any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.</span>
//           </div>

//           <button type="submit" name="submitbtn" className="submitButton">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Registration;
