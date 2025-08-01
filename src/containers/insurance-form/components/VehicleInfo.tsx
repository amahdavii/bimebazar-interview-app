import { FC } from "react";
import InfoRow from "@/components/shared/display/InfoRow";
import VehiclePlate from "@/components/shared/display/VehiclePlate";
import { rowInfos } from "@/containers/insurance-form/config";

const VehicleInfo: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[17.5rem] py-[1.5rem]">
        <VehiclePlate right="60" letter="ک" center="988" left="64" />
        <div className="mt-[1.5rem]">
          {rowInfos.map((item) => (
            <InfoRow key={item.id} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
