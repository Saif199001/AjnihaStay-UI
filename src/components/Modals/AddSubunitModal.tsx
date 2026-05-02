import React from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, TextInput, Select } from 'flowbite-react';
import { Bed } from 'lucide-react';

interface AddSubunitModalProps {
  show: boolean;
  onClose: () => void;
  unitId?: string | number;
}

const AddSubunitModal: React.FC<AddSubunitModalProps> = ({ show, onClose, unitId }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subunit Added to Unit:', unitId);
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose} size="sm" popup dismissible position="top-center">
      <div className="relative bg-white rounded-xl shadow-2xl dark:bg-gray-800 mt-20 mb-10">
        <ModalHeader className="border-b border-gray-100 p-5 dark:border-gray-700">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                <Bed className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Add Subunit</span>
            </div>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Add a specific bed or slot to this unit.
            </p>
          </div>
        </ModalHeader>
        <ModalBody className="px-6 py-6 max-h-[70vh] overflow-y-auto pr-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="subunitName" value="Subunit Name / ID" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <TextInput
                  id="subunitName"
                  placeholder="e.g. Bed 1, 101A"
                  required
                  type="text"
                  className="focus:ring-blue-500"
                />
              </div>
              
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="subunitStatus" value="Initial Status" className="text-sm font-semibold text-gray-700 dark:text-gray-300" />
                </div>
                <Select id="subunitStatus" required className="focus:ring-blue-500">
                  <option value="Vacant">Vacant</option>
                  <option value="Maintenance">Under Maintenance</option>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
              <Button color="gray" onClick={onClose} className="px-4">
                Cancel
              </Button>
              <Button type="submit" color="blue" className="px-6 bg-blue-600 hover:bg-blue-700 transition-all">
                Add Subunit
              </Button>
            </div>
          </form>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default AddSubunitModal;
