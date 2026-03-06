const UserDetails = () => {
  return (
    <section className="flex flex-col ">
      <div className="bg-pink-200/50 pt-10 h-50 flex text-xl font-semibold text-gray-400 justify-center items-center rounded-sm">
        <img
          src="./defaultProfile.avif"
          className="h-full aspect-square rounded-md"
        />
      </div>
      <form className="bg-pink-200/50  flex flex-col gap-5 px-5 py-10 rounded-sm">
        <div className="flex flex-col bg-white shadow rounded-sm pt-2">
          <label htmlFor="name" className="w-full pl-2">
            First Name
          </label>
          <input
            type="text"
            placeholder="Jeno"
            className="h-10 pl-2 border border-transparent rounded focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
            id="name"
          />
        </div>

        <div className="flex flex-col bg-white shadow rounded-sm pt-2">
          <label htmlFor="lastName" className="w-full pl-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Jeno"
            className="h-10 pl-2 border border-transparent rounded focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
            id="lastName"
          />
        </div>

        <div className="flex flex-col bg-white shadow rounded-sm pt-2">
          <label htmlFor="Email" className="w-full pl-2">
            Email
          </label>
          <input
            type="text"
            placeholder="Jeno"
            className="h-10 pl-2 border border-transparent rounded focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
            id="Email"
          />
        </div>

        <div className="flex flex-col bg-white shadow rounded-sm pt-2">
          <label htmlFor="contactnumber" className="w-full pl-2">
            Contact Number
          </label>
          <input
            type="text"
            placeholder="Jeno"
            className="h-10 pl-2 border border-transparent rounded focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
            id="contactnumber"
          />
        </div>

        <div className="flex flex-col bg-white shadow rounded-sm pt-2">
          <label htmlFor="address" className="w-full pl-2">
            Address
          </label>
          <input
            type="text"
            placeholder="Jeno"
            className="h-10 pl-2 border border-transparent rounded focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
            id="address"
          />
        </div>
      </form>
    </section>
  );
};

export default UserDetails;
