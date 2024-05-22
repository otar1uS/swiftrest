"use server";

export default async function sender(formData: { formData: any }) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Failed to submit the form");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
