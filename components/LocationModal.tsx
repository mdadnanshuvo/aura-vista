"use client";

import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useState } from "react";

const countriesData = [
  { key: "argentina", label: "Argentina", currency: "ARS", flag: "https://flagcdn.com/ar.svg" },
  { key: "venezuela", label: "Venezuela", currency: "VES", flag: "https://flagcdn.com/ve.svg" },
  { key: "brazil", label: "Brazil", currency: "BRL", flag: "https://flagcdn.com/br.svg" },
  { key: "switzerland", label: "Switzerland", currency: "CHF", flag: "https://flagcdn.com/ch.svg" },
  { key: "germany", label: "Germany", currency: "EUR", flag: "https://flagcdn.com/de.svg" },
  { key: "spain", label: "Spain", currency: "EUR", flag: "https://flagcdn.com/es.svg" },
  { key: "france", label: "France", currency: "EUR", flag: "https://flagcdn.com/fr.svg" },
  { key: "italy", label: "Italy", currency: "EUR", flag: "https://flagcdn.com/it.svg" },
  { key: "mexico", label: "Mexico", currency: "MXN", flag: "https://flagcdn.com/mx.svg" },
];

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCountrySelect: (country: { key: string; label: string; currency: string; flag: string }) => void;
}

export default function LocationModal({
  isOpen,
  onClose,
  onCountrySelect,
}: LocationModalProps) {
  const handleSelect = (countryKey: string) => {
    const country = countriesData.find((item) => item.key === countryKey);
    if (country) {
      onCountrySelect(country);
    }
    onClose(); // Close the modal after selection
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-lg">
      <ModalHeader>
        <h2 className="text-xl font-bold">Select a Country</h2>
      </ModalHeader>
      <ModalBody>
        <Autocomplete
          label="Country"
          className="max-w-full"
          placeholder="Search for a country"
          onSelectionChange={(key) => handleSelect("" + key)}
        >
          {countriesData.map((country) => (
            <AutocompleteItem
              key={country.key}
              startContent={
                <Avatar alt={country.label} className="w-6 h-6" src={country.flag} />
              }
            >
              {country.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
