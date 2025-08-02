import VehiclePlate from "@/components/shared/display/VehiclePlate";
import InfoRow from "@/components/shared/display/InfoRow";
import { rowInfos } from "@/containers/insurance-result/config";
import { FC } from "react";

const VehicleInfo: FC = () => {
  return (
    <section className="mt-[2rem] max-w-[400px]">
      <VehiclePlate left="64" letter="ک" center="988" right="60" />
      <div className="mt-[1rem]">
        {rowInfos.map((item) => (
          <InfoRow key={item.id} label={item.label} value={item.value} />
        ))}
      </div>
    </section>
  );
};

export default VehicleInfo;
