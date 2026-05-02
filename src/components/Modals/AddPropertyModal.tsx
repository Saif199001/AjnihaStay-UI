import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, TextInput, Select, FileInput, HelperText } from 'flowbite-react';
import { Building2 } from 'lucide-react';
import api from '../../services/api';

interface AddPropertyModalProps {
  show: boolean;
  onClose: () => void;
}

const AddPropertyModal = ({ show, onClose, onSuccess }) => {

  // ✅ Hooks TOP LEVEL पर
  const [form, setForm] = useState({
    name: "",
    property_type: "pg",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ function में hooks नहीं
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      const res = await api.post("/api/properties/create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onSuccess(res.data);
      onClose();

    } catch (err) {
      console.error(err);
      alert("Failed to create property ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onClose={onClose} size="md" popup dismissible position="top-center">
      <div className="relative bg-white rounded-xl shadow-2xl dark:bg-gray-800 mt-20 mb-10">
        <ModalHeader className="border-b border-gray-100 p-5 dark:border-gray-700">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Add New Property</span>
            </div>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Create a new property listing to start managing units and tenants.
            </p>
          </div>
        </ModalHeader>
        <ModalBody className="px-6 py-6 max-h-[70vh] overflow-y-auto pr-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="propertyName" value="Property Name" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <TextInput
                  name="name"
                  placeholder="e.g. Skyline Residency"
                  required
                  type="text"
                  onChange={handleChange}
                  className="focus:ring-blue-500"
                />
              </div>
              
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="propertyType" value="Property Type" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <Select name="property_type" onChange={handleChange} required className="focus:ring-blue-500">
                  <option value="Hostel">hostel</option>
                  <option value="PG">pg</option>
                </Select>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="address" value="Full Address" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <TextInput
                  name="address"
                  placeholder="Address"
                  required
                  type="text"
                  onChange={handleChange} 
                  className="focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="city" value="City Name" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <TextInput
                  name="city"
                  placeholder="City"
                  required
                  type="text"
                  onChange={handleChange} 
                  className="focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="state" value="State Name" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <TextInput
                  name="state"
                  placeholder="State"
                  required
                  type="text"
                  onChange={handleChange} 
                  className="focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="pincode" value="Pin Code" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <TextInput
                  name="pincode"
                  placeholder="Pin Code"
                  required
                  type="text"
                  onChange={handleChange} 
                  className="focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="propertyImage" value="Property Photo" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <div className="flex items-center justify-center w-full">
                  <Label
                    htmlFor="propertyImage"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <FileInput id="propertyImage" onChange={(e) => setThumbnail(e.target.files ? e.target.files[0] : null)} className="hidden" />
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
              <Button color="gray" onClick={onClose} className="px-4">
                Cancel
              </Button>
              <Button type="submit" color="blue" className="px-6 bg-blue-600 hover:bg-blue-700 transition-all">
                Create Property
              </Button>
            </div>
          </form>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default AddPropertyModal;
