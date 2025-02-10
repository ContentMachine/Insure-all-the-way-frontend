"use client";

import FileUploadInput from "@/components/FileUploadInput/FileUploadInput";
import React, { useState } from "react";

const EnhancedThirdPartyMotorInsuranceForm2 = () => {
  // States
  const [proofOfOwnership, setProofOfOwnership] = useState<File[]>([]);
  const [id, setId] = useState<File[]>([]);

  return (
    <form>
      <FileUploadInput
        files={proofOfOwnership}
        setFiles={setProofOfOwnership}
        title="Upload Proof of Ownership"
      />
      <FileUploadInput
        files={id}
        setFiles={setId}
        title="Upload Valid Means of ID"
      />
    </form>
  );
};

export default EnhancedThirdPartyMotorInsuranceForm2;
