"use client";

import FileUploadInput from "@/components/FileUploadInput/FileUploadInput";
import { enhancedThirdPartyInsuranceFormTypes } from "@/utilities/types";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type EnhancedThordPartyMortrInsuranceForm2Types = {
  data: enhancedThirdPartyInsuranceFormTypes;
  setData: Dispatch<SetStateAction<enhancedThirdPartyInsuranceFormTypes>>;
};

const EnhancedThirdPartyMotorInsuranceForm2 = ({
  data,
  setData,
}: EnhancedThordPartyMortrInsuranceForm2Types) => {
  // States
  const [proofOfOwnership, setProofOfOwnership] = useState<File[]>([]);
  const [id, setId] = useState<File[]>([]);

  // Effects
  useEffect(() => {
    if (proofOfOwnership?.length > 0) {
      setData((prevState) => {
        return { ...prevState, proofOfOwnership: proofOfOwnership[0] };
      });
    }

    if (id?.length > 0) {
      setData((prevState) => {
        return { ...prevState, id: id[0] };
      });
    }
  }, [proofOfOwnership, id]);

  return (
    <form>
      <div>
        <FileUploadInput
          files={proofOfOwnership}
          setFiles={setProofOfOwnership}
          title="Upload Proof of Ownership"
          id="proofOfOwnerShip"
          accept=".pdf,.doc,.docx,image/*"
        />
      </div>
      <div>
        <FileUploadInput
          files={id}
          setFiles={setId}
          title="Upload Valid Means of ID"
          id="id"
          accept=".pdf,.doc,.docx,image/*"
        />
      </div>
    </form>
  );
};

export default EnhancedThirdPartyMotorInsuranceForm2;
