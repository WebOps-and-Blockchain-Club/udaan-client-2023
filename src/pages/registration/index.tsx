import React, { useState } from 'react';
import styles from '../../styles/registration.module.css';

const RegistrationPage = () => {
  const [fullName, set_full_name] = useState('');
  const [gender, set_gender] = useState('');
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [aadhar, set_aadhar] = useState('');
  const [address, set_address] = useState('');
  const [dateOfBirth, set_date_of_birth] = useState('');
  const [state, set_state] = useState('');
  const [district, set_district] = useState('');
  const [pincode, set_pincode] = useState('');
  const [recentPhoto, set_recent_photo] = useState('');
  const [educationQualification, set_education_qualification] = useState('');

  const handleRegistration = () => {
    console.log('Registering user:', fullName, gender, email, password, aadhar, address, dateOfBirth, state, district, pincode, recentPhoto, educationQualification);
  };

  const handleRecentPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const imageUrl = file ? URL.createObjectURL(file) : '';
    set_recent_photo(imageUrl);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftpanel}>
        <h2 className={styles.title}>Udaan</h2>
        <p className={styles.subtitle}>First Responder</p>
      </div>
      <div className={styles.rightpanel}>
        <h2 className={styles.heading}>Registration For First Responder</h2>
        <div className={styles.formgrid}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => set_full_name(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => set_gender(e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email/Phone Number"
            value={email}
            onChange={(e) => set_email(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => set_password(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Aadhar"
            value={aadhar}
            onChange={(e) => set_aadhar(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => set_address(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => set_date_of_birth(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => set_state(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="District"
            value={district}
            onChange={(e) => set_district(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => set_pincode(e.target.value)}
            className={styles.input}
          />
          <div className={styles.photocontainer}>
            <input type="file" accept="image/*" onChange={handleRecentPhotoChange} className={styles.photoinput} />
            <img src={recentPhoto} alt="Recent Photo" className={styles.recentphoto} />
            <span className={styles.photolabel}>Upload Recent Photo</span>
          </div>
          <input
            type="text"
            placeholder="Education Qualification"
            value={educationQualification}
            onChange={(e) => set_education_qualification(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleRegistration} className={styles.registerbutton}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;


// import React, { useState } from 'react';

// const RegistrationPage = () => {
//   const [fullName, set_full_name] = useState('');
//   const [gender, set_gender] = useState('');
//   const [email, set_email] = useState('');
//   const [password, set_password] = useState('');
//   const [aadhar, set_aadhar] = useState('');
//   const [address, set_address] = useState('');
//   const [dateOfBirth, set_date_of_birth] = useState('');
//   const [state, set_state] = useState('');
//   const [district, set_district] = useState('');
//   const [pincode, set_pincode] = useState('');
//   const [recentPhoto, set_recent_photo] = useState('');
//   const [educationQualification, set_education_qualification] = useState('');

//   const handleRegistration = () => {
//     // Handle registration logic
//     console.log('Registering user:', fullName, gender, email, password, aadhar, address, dateOfBirth, state, district, pincode, recentPhoto, educationQualification);
//   };

//   const handleRecentPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     const imageUrl = file ? URL.createObjectURL(file) : '';
//     set_recent_photo(imageUrl);
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh', margin: '0' }}>
//       <div style={{ flex: '1', backgroundColor: '#305399', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//         {/* <h2 style={{ color: '#fff', fontSize: '50px', fontWeight: 400, letterSpacing: '0em', textAlign: 'center' }}>Udaan</h2> */}
//         {/* <p style={{ color: '#fff', fontSize: '50px' }}>First Responder</p> */}
//       </div>
//       <div style={{ position: 'relative', flex: '2', padding: '20px', margin: '0%', backgroundColor: '#FFF', borderRadius: '10px' }}>
//         <h2 style={{ fontSize: '24px', marginBottom: '60px', marginTop: '40px', textAlign: 'center', color: '#305399' }}>Registration For First Responder</h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => set_full_name(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Gender"
//             value={gender}
//             onChange={(e) => set_gender(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="email"
//             placeholder="Email/Phone Number"
//             value={email}
//             onChange={(e) => set_email(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => set_password(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Aadhar"
//             value={aadhar}
//             onChange={(e) => set_aadhar(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Address"
//             value={address}
//             onChange={(e) => set_address(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Date of Birth"
//             value={dateOfBirth}
//             onChange={(e) => set_date_of_birth(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="text"
//             placeholder="State"
//             value={state}
//             onChange={(e) => set_state(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="text"
//             placeholder="District"
//             value={district}
//             onChange={(e) => set_district(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Pincode"
//             value={pincode}
//             onChange={(e) => set_pincode(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//           <div>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <input
//                 type="text"
//                 placeholder="Upaload Recent Photo"
//                 value={recentPhoto ? recentPhoto : ''}
//                 readOnly
//                 style={{
//                   flex: '1',
//                   padding: '10px',
//                   borderRadius: '10px',
//                   border: '1px solid #000',
//                   backgroundColor: '#fff',
//                   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                   marginRight: '10px',
//                 }}
//               />
//               <input
//                 type="file"
//                 id="recentPhoto"
//                 accept="image/*"
//                 onChange={handleRecentPhotoChange}
//                 style={{ display: 'none' }}
//               />
//               <label htmlFor="recentPhoto" style={{ padding: '8px 12px', borderRadius: '10px', backgroundColor: '#305399', color: '#fff', cursor: 'pointer' }}>
//                 Browse
//               </label>
//             </div>
//           </div>
//           <input
//             type="text"
//             placeholder="Highest Education Qualification"
//             value={educationQualification}
//             onChange={(e) => set_education_qualification(e.target.value)}
//             style={{
//               padding: '10px',
//               borderRadius: '10px',
//               backgroundColor: '#fff',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               border: '1px solid #000'
//             }}
//           />
//         </div>
//         <div style={{ textAlign: 'center' }}>
//           <button
//             onClick={handleRegistration}
//             style={{ marginTop: '60px', width: '30vw', padding: '10px 20px', backgroundColor: '#305399', color: '#fff', border: '1px solid #000', cursor: 'pointer' }}
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;