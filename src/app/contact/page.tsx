import "./style.css"

export default function Contact() {
  return (
    <div className="wds-container page">
      <h1>Contact</h1>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" name="first-name" required />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" name="last-name" required />
          </div>
          <div className="col-span-2">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="col-span-2">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" minLength={15} rows={6} />
          </div>
        </div>
      </form>
    </div>
  )
}
