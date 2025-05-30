
'use client';
import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
  dob: string;
  country: string;
}

interface UserFormModalProps {
  onClose: () => void;
  onAddUser: (user: User) => void;
  editingUser?: User | null;
}

const AddNewUser: React.FC<UserFormModalProps> = ({ onClose, onAddUser, editingUser }) => {
  const [formData, setFormData] = useState<User>({
    name: editingUser?.name || '',
    email: editingUser?.email || '',
    phone: editingUser?.phone || '',
    dob: editingUser?.dob || '',
    country: editingUser?.country || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20 bg-[#fdf4f4] rounded-2xl p-6 w-[443px] max-w-md shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500 text-[30px] font-bold cursor-pointer"
        >
          &times;
        </button>

        <form className="space-y-5 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold text-[18px] mb-1 text-[#4F4C4C]">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-3 rounded-[10px] text-[18px] bg-[#D9D9D9] text-[#7B7A7A] font-bold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-[18px] mb-1 text-[#4F4C4C]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-3 rounded-[10px] text-[18px] bg-[#D9D9D9] text-[#7B7A7A] font-bold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-[18px] mb-1 text-[#4F4C4C]">
              Phone No <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Enter your phone no"
              className="w-full px-3 py-3 rounded-[10px] text-[18px] bg-[#D9D9D9] text-[#7B7A7A] font-bold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-[18px] mb-1 text-[#4F4C4C]">
              Date of Birth
            </label>
            <input
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              type="date"
              className="w-full px-3 py-3 rounded-[10px] text-[18px] bg-[#D9D9D9] text-[#7B7A7A] font-bold appearance-none focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-[18px] mb-1 text-[#4F4C4C]">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-[10px] text-[18px] bg-[#D9D9D9] text-[#7B7A7A] font-bold focus:outline-none"
              required
            >
              <option value="">Select country</option>
              <option>UAE</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="flex pt-2">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#0e2766] font-bold py-2 px-6 rounded-[10px] text-[20px]"
            >
              {editingUser ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;

