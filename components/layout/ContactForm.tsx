import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";

import sender from "../action/SendData";
import { useTranslation } from "../context/TranslateState";

export function ContactForm() {
  const { locale } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      firstname: e.currentTarget.firstname.value,
      lastname: e.currentTarget.lastname.value,
      email: e.currentTarget.email.value,
      text: e.currentTarget.textarea.value,
      number: e.currentTarget.number.value,
    };

    await sender(formData as any);
  };

  const renderFormField = (
    label: string,
    placeholder: string,
    id: string,
    type: string
  ) => {
    return (
      <LabelInputContainer className="mb-4">
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} placeholder={placeholder} type={type} />
      </LabelInputContainer>
    );
  };

  return (
    <div className="max-w-md w-full mx-auto md:rounded-2xl p-4 md:p-8 shadow-input rounded-md bg-white dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          {renderFormField(
            locale === "en" ? "First name" : "სახელი",
            locale === "en" ? "Tyler" : "შოთა",
            "firstname",
            "text"
          )}
          {renderFormField(
            locale === "en" ? "Last name" : "გვარი",
            locale === "en" ? "Durden" : "რუსთაველი",
            "lastname",
            "text"
          )}
        </div>
        {renderFormField(
          locale === "en" ? "Email Address" : "ელფოსტის მისამართი",
          "projectmayhem@fc.com",
          "email",
          "email"
        )}
        {renderFormField(
          locale === "en" ? "Text" : "შეტყობინება",
          locale === "en" ? "Hello ,I want to ..." : "გამარჯობა ,მსურს..",
          "textarea",
          "text"
        )}
        {renderFormField(
          locale === "en" ? "Number" : "ტელეფონის ნომერი",
          "+995555555",
          "number",
          "number"
        )}
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {locale === "en" ? "SEND &rarr;" : "გაგზავნა"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
