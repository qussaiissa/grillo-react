
import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  function submit(e) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    const subject = `GRILLO website inquiry from ${fd.get("name")}`;

    const body = `Name: ${fd.get("name")}
Email: ${fd.get("email")}

${fd.get("message")}`;

    setStatus("Your email app will open. No message has been sent yet.");

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="wrap">
      <h1 className="page-title">Contact GRILLO</h1>

      <div className="contact-grid">
        <div>
          <p>We would love to hear from you.</p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+96181544786">+961 81 544 786</a>
          </p>

          <p>
            <strong>Address:</strong>{" "}
            صيدا القديمة – مدخل السوق – شارع حمام جديد
          </p>

          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/grillo.lb/"
              target="_blank"
              rel="noreferrer"
            >
              @grillo.lb
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>
            Your name
            <input className="field" name="name" required />
          </label>

          <label>
            Your email
            <input
              className="field"
              name="email"
              type="email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              className="field"
              name="message"
              rows="6"
              required
            />
          </label>

          <button className="btn" type="submit">
            Prepare Email
          </button>

          {status && <p className="notice">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact ;