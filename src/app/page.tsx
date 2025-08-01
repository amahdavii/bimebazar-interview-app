import Button from "@/components/shared/ui/Button";

export default function Home() {
  return (
    <>
      <div className="p-8 bg-background min-h-screen flex flex-col items-center gap-8">
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
      </div>
    </>
  );
}
