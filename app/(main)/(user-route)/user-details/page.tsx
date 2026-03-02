const UserDetails = () => {
  return (
    <section>
      <div className="border border-black h-30 flex text-xl font-semibold text-gray-400">
        <img
          src="./defaultProfile.avif"
          className="h-full aspect-square border"
        />
      </div>
      <form>
        <label htmlFor="name" className="w-full">
          First Name
        </label>
        <input type="text" placeholder="Jeno" className="border" id="name" />
        <label htmlFor="lastName" className="w-full">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Jeno"
          className="border"
          id="lastName"
        />
        <label htmlFor="Email" className="w-full">
          Email
        </label>
        <input type="text" placeholder="Jeno" className="border" id="Email" />
        <label htmlFor="contactnumber" className="w-full">
          Contact Number
        </label>
        <input
          type="text"
          placeholder="Jeno"
          className="border"
          id="contactnumber"
        />
        <label htmlFor="address" className="w-full">
          Address
        </label>
        <input type="text" placeholder="Jeno" className="border" id="address" />
      </form>
    </section>
  );
};

export default UserDetails;
