import VehiclePlate from "@/components/shared/display/VehiclePlate";
import Button from "@/components/shared/ui/Button";
import TextField from "@/components/shared/ui/TextField";

export default function Home() {
  return (
    <>
      <div className="p-8 bg-background min-h-screen flex flex-col items-center gap-8">
        <VehiclePlate right="60" letter="ک" center="988" left="64" />

        <Button variant="default">انتخاب از آدرس‌های من</Button>

        <Button variant="primary"> عنوان</Button>
        <Button variant="primary" disabled>
          عنوان
        </Button>
        <Button variant="primary" loading>
          عنوان
        </Button>

        <Button variant="secondary"> عنوان</Button>
        <Button variant="secondary" disabled>
          عنوان
        </Button>
        <Button variant="secondary" loading>
          سلام
        </Button>

        <TextField placeholder="کد ملی" />
      </div>
    </>
  );
}
