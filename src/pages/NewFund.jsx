// Import necessary dependencies
import { useState } from "react";
import FormInput from "../components/FormInput";
import { supabase } from "../database";
import { newFundsData } from "../data";

/**
 * NewFund component represents a form for capturing new fund deposit details.
 * It includes sections for transaction details, ledger info, and comments.
 */
const NewFund = () => {
  // State to manage form data
  const [formData, setFormData] = useState(newFundsData);

  // Event handler for handling form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Event handler for form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert data into the Supabase table
      const { data, error } = await supabase
        .from("newfunds")
        .upsert([{ ...formData }]);

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
        alert("Data successfully stored");
        setFormData(newFundsData);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // JSX structure for the NewFund component
  return (
    <div className="mt-[1800px] md:mt-[450px] lg:mt-[400px]">
      {/* Header section for New Fund Deposit */}
      <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[490px] mb-4 text-white bg-purple-600 px-[100px] py-4 rounded-xl text-2xl font-semibold">
        New Fund Deposit
      </div>

      {/* Transaction Details section */}
      <div className="flex flex-wrap sm:-mx-3 md:-mx-3 mb-4 lg:-mx-[390px] text-white bg-[#4e9ab1] px-5 py-4 rounded-xl text-2xl font-semibold">
        Transaction Details
      </div>

      {/* Form for capturing transaction details */}
      <form className="w-full max-w-[1200px]">
        {/* Input fields for Fund MID, Client ID, and Client Name */}
        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Fund MID"
            id="fundMID"
            type="text"
            value={formData.fundMID}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Client ID"
            id="clientID"
            type="select"
            options={[
              { label: "Client ID 1", value: "Client ID 1" },
              { label: "Client ID 2", value: "Client ID 2" },
              { label: "Client ID 3", value: "Client ID 3" },
            ]}
            value={formData.clientID}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Client Name"
            id="clientName"
            type="text"
            value={formData.clientName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
        </div>

        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Effective Date"
            id="effectiveDate"
            type="date"
            value={formData.effectiveDate}
            onChange={handleChange}
            columnWidth="w-full md:w-1/5"
          />
          <FormInput
            label="Tenure[days]"
            id="tenure"
            type="text"
            value={formData.tenure}
            onChange={handleChange}
            columnWidth="w-full md:w-1/5"
          />
          <FormInput
            label="Amount"
            id="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            columnWidth="w-full md:w-1/5"
          />
          <FormInput
            label="Rate"
            id="rate"
            type="number"
            value={formData.rate}
            placeholder="0.0"
            onChange={handleChange}
            columnWidth="w-full md:w-1/5"
          />
          <FormInput
            label="Maturity Date"
            id="maturityDate"
            type="date"
            value={formData.maturityDate}
            onChange={handleChange}
            columnWidth="w-full md:w-1/5"
          />
        </div>

        <div className="flex  flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Amount at Maturity"
            id="amountAtMaturity"
            type="number"
            placeholder="00.000"
            value={formData.amountAtMaturity}
            onChange={handleChange}
            columnWidth="w-full md:w-1/4"
          />
          <FormInput
            label="Interest Amount"
            id="interestAmount"
            type="number"
            value={formData.interestAmount}
            onChange={handleChange}
            columnWidth="w-full md:w-1/4"
          />
          <FormInput
            label="WHT(%)"
            id="wht"
            type="number"
            value={formData.wht}
            placeholder="0.00"
            onChange={handleChange}
            columnWidth="w-full md:w-1/4"
          />
          <FormInput
            label="Fund Products"
            id="fundProducts"
            type="select"
            options={[
              { label: "Product 1", value: "Product 2" },
              { label: "Product 2", value: "Product 2" },
            ]}
            value={formData.fundProducts}
            onChange={handleChange}
            columnWidth="w-full md:w-1/4"
          />
        </div>

        <div className="flex  flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            id="interestValue"
            type="checkbox"
            options={[
              { label: "Upfront Interest", value: "Upfront Interest" },
              { label: "Monthly Interest", value: "Monthly Interest" },
              { label: "Quarterly Interest", value: "Quarterly Interest" },
              { label: "BackEnd Interest", value: "BankEnd Interest" },
              { label: "Automatic Rollover", value: "Automatic Rollover" },
            ]}
            value={formData.interestValue}
            onChange={(e) =>
              setFormData({ ...formData, interestValue: e.target.value })
            }
          />
        </div>
      </form>

      {/* Ledger Info Details section */}
      <div className="flex flex-wrap sm:-mx-3 md:-mx-3 mb-4 lg:-mx-[390px] text-white bg-[#4e9ab1] px-5 py-4 rounded-xl text-2xl font-semibold">
        Ledger Info
      </div>

      {/* Form for capturing ledger info details */}
      <form className="w-full max-w-[1200px]">
        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="suspense MID"
            id="suspenseMID"
            type="text"
            value={formData.suspenseMID}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
           label="suspense SID"
           id="suspenseSID"
           type="text"
           value={formData.suspenseSID}
           onChange={handleChange}
           columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Name"
            id="suspenseName"
            type="text"
            value={formData.suspenseName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
        </div>
        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            label="Profile & Loss MID"
            id="profitOfLossMID"
            type="text"
            value={formData.profitOfLossMID}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Profile & Loss MID"
            id="profitOfLossSID"
           type="text"
           value={formData.profitOfLossSID}
           onChange={handleChange}
           columnWidth="w-full md:w-1/3"
          />

          <FormInput
            label="Name"
            id="profitOfLossName"
            type="text"
            value={formData.profitOfLossName}
            onChange={handleChange}
            columnWidth="w-full md:w-1/3"
          />
        </div>
      </form>

      {/* Comment section */}
      <div className="flex flex-wrap sm:-mx-3 md:-mx-3 mb-4 lg:-mx-[390px] text-white bg-[#4e9ab1] px-5 py-4 rounded-xl text-2xl font-semibold">
        Comments
      </div>

      <form className="w-full max-w-[1200px]">
        <div className="flex flex-wrap sm:-mx-3 md:-mx-3 lg:-mx-[400px] mb-6">
          <FormInput
            id="comments"
            type="text"
            value={formData.comments}
            onChange={handleChange}
            columnWidth="w-full md:w-1/1"
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
      </div>
    </div>
  );
};
export default NewFund;
