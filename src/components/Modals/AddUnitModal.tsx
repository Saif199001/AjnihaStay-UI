import React from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, TextInput, Select, FileInput } from 'flowbite-react';
import { Home } from 'lucide-react';

interface AddUnitModalProps {
  show: boolean;
  onClose: () => void;
}

const AddUnitModal: React.FC<AddUnitModalProps> = ({ show, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Unit Added');
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose} size="md" popup dismissible position="top-center">
      <div className="relative bg-white rounded-xl shadow-2xl dark:bg-gray-800 mt-20 mb-10">
        <ModalHeader className="border-b border-gray-100 p-5 dark:border-gray-700">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                <Home className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Add New Unit</span>
            </div>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Define a new room or apartment unit for your property.
            </p>
          </div>
        </ModalHeader>
        <ModalBody className="px-6 py-6 max-h-[70vh] overflow-y-auto pr-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="propertySelect" value="Select Property" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <Select id="propertySelect" required className="focus:ring-blue-500">
                  <option value="1">Skyline Residency</option>
                  <option value="2">Green View PG</option>
                  <option value="3">Urban Living</option>
                </Select>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="unitNumber" value="Unit Number / Name" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <TextInput
                  id="unitNumber"
                  placeholder="e.g. 101, Room A"
                  required
                  type="text"
                  className="focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="unitType" value="Unit Type" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                  </div>
                  <Select id="unitType" required className="focus:ring-blue-500">
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Triple">Triple</option>
                    <option value="Studio">Studio</option>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="basePrice" value="Monthly Rent (₹)" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                  </div>
                  <TextInput
                    id="basePrice"
                    placeholder="8500"
                    required
                    type="number"
                    className="focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="unitImages" value="Unit Photos" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <div className="flex items-center justify-center w-full">
                  <Label
                    htmlFor="unitImages"
                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-4 pb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload photos</span></p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Multiple files allowed</p>
                    </div>
                    <FileInput id="unitImages" multiple className="hidden" />
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
              <Button color="gray" onClick={onClose} className="px-4">
                Cancel
              </Button>
              <Button type="submit" color="blue" className="px-6 bg-blue-600 hover:bg-blue-700 transition-all">
                Create Unit
              </Button>
            </div>
          </form>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default AddUnitModal;
