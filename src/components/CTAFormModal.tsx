import React, { useState } from 'react';

const programs = [
  'MBA',
  'MCA',
  'BBA',
  'BCA',
];


const CTAFormModal: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    program: '',
    // elective removed
    state: '',
    city: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile)) errs.mobile = 'Valid 10 digit mobile is required';
    if (!form.program) errs.program = 'Select a program';
    // if (!form.elective) errs.elective = 'Select an elective'; // Removed
    if (!form.state.trim()) errs.state = 'State is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.consent) errs.consent = 'Consent is required';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      const endpoint = "https://script.google.com/macros/s/AKfycbxm2ZXJuGjDfhjAHq_as-as18q8PFR3-Tb2Wq1XXSB0R972DO_qocJgu39SIShYI4x7/exec";
      const params = new URLSearchParams({
        name: form.name,
        email: form.email,
        countryCode: form.countryCode,
        mobile: form.mobile,
        program: form.program,
        // elective removed
        state: form.state,
        city: form.city
      }).toString();
      try {
        await fetch(`${endpoint}?${params}`);
      } catch (error) {
        // Do nothing: ignore CORS error, form is still submitted
      }
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center bg-white rounded-xl shadow-lg p-0 max-w-5xl mx-auto overflow-hidden">
      {/* Left: Background Image only */}
      <div
        className="flex-1 w-full md:min-w-[320px] h-40 md:h-[420px] bg-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
        style={{
          backgroundImage: "url('/img/student-hero.jpg')",
          backgroundPosition: '6% center',
          backgroundSize: 'cover'
        }}
      ></div>
      {/* Right: Form */}
      <form className="flex-1 bg-white p-4 md:p-8 flex flex-col gap-3 md:gap-4 w-full min-w-0" onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-300 rounded px-3 md:px-4 py-2 md:py-3 w-full text-sm md:text-base"
          value={form.name}
          onChange={handleChange}
        />
        {form.name !== '' && !form.name.trim() && (
          <span className="text-red-500 text-xs">Name is required</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-3 md:px-4 py-2 md:py-3 w-full text-sm md:text-base"
          value={form.email}
          onChange={handleChange}
        />
        {form.email !== '' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) && (
          <span className="text-red-500 text-xs">Valid email is required</span>
        )}
        <div className="flex gap-2">
          <select
            name="countryCode"
            className="border border-gray-300 rounded px-3 md:px-4 py-2 md:py-3 text-sm md:text-base"
            value={form.countryCode}
            onChange={handleChange}
            style={{ maxWidth: 90 }}
          >
            <option value="+91">+91</option>
            {/* Add more country codes if needed */}
          </select>
          <input
            type="text"
            name="mobile"
            placeholder="Enter 10 Digit Mobile Number"
            className="border border-gray-300 rounded px-3 md:px-4 py-2 md:py-3 w-full text-sm md:text-base"
            value={form.mobile}
            onChange={handleChange}
            maxLength={10}
          />
        </div>
        {form.mobile && (!/^\d{10}$/.test(form.mobile)) && (
          <span className="text-red-500 text-xs">Valid 10 digit mobile is required</span>
        )}
        <select
          name="program"
          className="border border-gray-300 rounded px-3 md:px-4 py-2 md:py-3 w-full text-sm md:text-base"
          value={form.program}
          onChange={handleChange}
        >
          <option value="">Select Program</option>
          {programs.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {form.program === '' && (
          <span className="text-red-500 text-xs">Select a program</span>
        )}
        {/* Removed Elective field */}
        <input
          type="text"
          name="state"
          placeholder="State"
          className="border border-gray-300 rounded px-3 md:px-4 py-2 md:py-3 w-full text-sm md:text-base"
          value={form.state}
          onChange={handleChange}
        />
        {form.state !== '' && !form.state.trim() && (
          <span className="text-red-500 text-xs">State is required</span>
        )}
        <input
          type="text"
          name="city"
          placeholder="City"
          className="border border-gray-300 rounded px-3 md:px-4 py-2 md:py-3 w-full text-sm md:text-base"
          value={form.city}
          onChange={handleChange}
        />
        {form.city !== '' && !form.city.trim() && (
          <span className="text-red-500 text-xs">City is required</span>
        )}
        <div className="flex items-start gap-2 mt-2">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className="mt-1"
          />
          <span className="text-xs text-gray-700">
            I authorize university and its associates to contact me with updates & notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
          </span>
        </div>
        {errors.consent && <span className="text-red-500 text-xs">{errors.consent}</span>}
        <button
          type="submit"
          className="w-full bg-[#CA2526] text-white font-bold rounded-full py-2 md:py-3 text-base mt-2 uppercase disabled:opacity-60"
          disabled={Object.keys(validate()).length > 0}
        >
          Submit
        </button>
        {submitted && <div className="text-green-600 text-center font-semibold mt-2">Form submitted successfully!</div>}
      </form>
    </div>
  );
};

export default CTAFormModal; 