export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "74d098ef-0412-420f-b3f2-9c9537bedc83");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="text" name="name" />
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}
