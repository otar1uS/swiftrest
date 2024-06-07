import { useTranslation } from "../context/TranslateState";
import RotatingBox from "./RotatingBox";

export function HomeText() {
  const { locale } = useTranslation();
  return (
    <div className="sm:w-1/3 flex-col flex justify-center gap-20 items-center">
      <h1 className="font-bold text-[16px] sm:text-[20px] text-white">
        {locale === "en" ? (
          <>
            At SWIFTSPACE we take care and elevate your digital footprint and
            create digital excellence. Our group of professionals specialize in
            web design, web development, UI/UX design as well as any other web
            or digital service you may need. Our mission is to provide the
            desired service in a swift time with excellence and cost efficiency.
          </>
        ) : (
          <>
            SWIFTSPACE-ში ჩვენ ვზრუნავთ და ვზრდით თქვენს ციფრულ კვალს და ვქმნით
            ციფრულ სრულყოფილებას. ჩვენი პროფესიონალთა ჯგუფი სპეციალიზირებულია
            ვებ დიზაინში, ვებ დეველოპმენტში, UI/UX დიზაინში, ისევე როგორც
            ნებისმიერ სხვა ვებ ან ციფრულ სერვისში, რომელიც შეიძლება დაგჭირდეთ.
            ჩვენი მისიაა უმოკლეს დროში მივაწოდოთ მომხმარებელს სასურველი სერვისი
            ბრწყინვალებით და ეფექტური ხარჯით.
          </>
        )}
      </h1>
      <RotatingBox />
    </div>
  );
}
