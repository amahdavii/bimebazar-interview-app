import VehicleInfo from "@/containers/insurance-form/components/VehicleInfo";
import CarOwnerInfo from "@/containers/insurance-form/components/CarOwnerInfo";
import BottomSheetManager from "./components/BottomSheets";

const InsuranceForm = () => {
  return (
    <>
      <main>
        <VehicleInfo />
        <CarOwnerInfo />
      </main>

      <BottomSheetManager />
    </>
  );
};

export default InsuranceForm;
