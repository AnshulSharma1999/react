const Contact = () => {
  return (
    <div>
      <h1 className="text-lg font-bold m-4 p-4"> Contact Us </h1>
      <form>
        <input
          className="border border-black m-2 p-2 rounded-lg"
          type="text"
          placeholder="name"
        ></input>
        <input
          className="border border-black m-2 p-2 rounded-lg"
          type="text"
          placeholder="message"
        ></input>
        <button className="border border-black m-2 p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
