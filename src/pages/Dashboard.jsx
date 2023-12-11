import { Link } from "react-router-dom";
import { useState } from "react";
import FormInput from "../components/FormInput";
import { supabase } from "../database/supabase";
import { customerData } from "../data";

const Dashboard = () => {
  const [formData, setFormData] = useState(customerData);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert data into the Supabase table
      const { data, error } = await supabase.from("customers").upsert([
        { ...formData },
      ]);

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
        alert("Data successfully stored");
        setFormData(customerData);

      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="sm:mt-[1500px] md:mt-[20px] lg:mt-[400px]">
      <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[390px] mb-4 text-white bg-purple-600 px-5 py-4 rounded-xl text-2xl font-semibold">
        Create Customer
      </div>
      <form className="w-full max-w-[1200px]">
        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Enter BVN"
            id="bvn"
            type="number"
            placeholder="Enter BVN Here"
            value={formData.bvn}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="First Name"
            id="firstName"
            type="text"
            placeholder="Enter your firstname"
            value={formData.firstName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Last Name"
            id="lastName"
            type="text"
            placeholder="Enter your lastname"
            value={formData.lastName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
        </div>

        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Middle Name"
            id="middleName"
            type="text"
            placeholder="Enter your Middle"
            value={formData.middleName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
          <FormInput
            label="Client Type"
            id="clientType"
            type="select"
            options={[
              { label: "Individual", value: "individual" },
              { label: "Partner", value: "partner" },
            ]}
            value={formData.clientType}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
          <FormInput
            label="Working info"
            id="workingInfo"
            type="select"
            options={[
              { label: "Self Employed", value: "selfEmployed" },
              { label: "Student", value: "student" },
              { label: "Business worker", value: "businessWorker" },
              { label: "Government worker", value: "governmentWorker" },
            ]}
            value={formData.workingInfo}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
        </div>

        <div className="flex  flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
          <FormInput
            label="Tel"
            id="tel1"
            type="tel"
            placeholder="Enter tel here"
            value={formData.tel1}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
          <FormInput
            label="Gender"
            id="gender"
            type="select"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            value={formData.gender}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
        </div>

        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Nationality"
            id="nationality"
            type="select"
            options={[
              { label: "Nigeria", value: "nigeria" },
              { label: "Canada", value: "canada" },
              { label: "United State", value: "USA" },
            ]}
            value={formData.nationality}
            onChange={handleChange}
            columnWidth="w-full md:w-1/4"
          />

          <FormInput
            label="State"
            id="state"
            type="select"
            options={[
              { label: "Lagos", value: "lagos" },
              { label: "Abuja", value: "abuja" },
            ]}
            value={formData.state}
            onChange={handleChange}
            columnWidth="w-full md:w-1/4"
          />

          <FormInput
            label="D.O.B"
            id="dob"
            type="date"
            placeholder="Enter your date of birth"
            value={formData.dob}
            onChange={handleChange}
            columnWidth="w-full md:w-1/4"
          />

          <FormInput
            label="Acct Officer"
            id="acctOfficer"
            type="select"
            options={[
              { label: "Mr Emmanuel", value: "mr emmanuel" },
              { label: "Tola", value: "tola" },
            ]}
            value={formData.acctOfficer}
            onChange={handleChange}
            columnWidth="w-full md:w-1/4"
          />
        </div>

        <div className="flex  flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Home Address"
            id="homeAddress"
            type="text"
            placeholder="Enter Address Here"
            value={formData.homeAddress}
            onChange={handleChange}
            columnWidth="w-full md:w-1/2"
          />
          <FormInput
            label="Land Mark/Nearest Bus/stop"
            id="landMark"
            type="text"
            placeholder="Enter Landmark here"
            value={formData.landMark}
            onChange={handleChange}
            columnWidth="w-full md:w-1/2"
          />
        </div>
      </form>

      <div className="flex flex-wrap sm:-mx-3 md:-mx-3 mb-4 lg:-mx-[390px] text-white bg-[#4e9ab1] px-5 py-4 rounded-xl text-2xl font-semibold">
        Bank Details
      </div>

      <form className="w-full max-w-[1200px]">
        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Bank Name"
            id="bankName"
            type="select"
            options={[
              { label: "UBA", value: "UBA" },
              { label: "First Bank", value: "firstbank" },
            ]}
            value={formData.bankName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Account Number"
            id="accountNumber"
            type="text"
            placeholder="Enter your account number"
            value={formData.accountNumber}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Account Name"
            id="accountName"
            type="text"
            placeholder="Enter your account name"
            value={formData.accountName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
        </div>
      </form>

      <div className="flex flex-wrap sm:-mx-3 md:-mx-3 mb-4 lg:-mx-[390px] text-white bg-[#4e9ab1] px-5 py-4 rounded-xl text-2xl font-semibold">
        Next of Kin Information
      </div>

      <form className="w-full max-w-[1200px]">
        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Full Name"
            id="fullName"
            type="text"
            placeholder="Enter the full name"
            value={formData.fullName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Tel"
            id="tel2"
            type="tel"
            placeholder="Enter phone number"
            value={formData.tel2}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Relationship"
            id="relationship"
            type="text"
            placeholder="Enter relationship"
            value={FormData.relationship}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
        </div>
      </form>

      <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3"
        >
          Submit
        </button>
        <Link to="/dashboard2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">
          Next Page
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
