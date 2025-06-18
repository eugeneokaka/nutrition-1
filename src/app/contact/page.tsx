"use client";
function Page() {
  return (
    <div>
      <h1>Contact Page</h1>
      <button
        onClick={async () => {
          await fetch("/api/emails", {
            method: "POST",
            body: JSON.stringify({
              email: "eugine790@gmail.com",
              Firstname: "Eugine",
              Lastname: "Okaka",
            }),
          });
        }}
      >
        Send email
      </button>
    </div>
  );
}

export default Page;
