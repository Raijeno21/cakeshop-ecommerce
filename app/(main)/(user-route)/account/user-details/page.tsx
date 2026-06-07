import { icon } from "@/src/svgIcons";

const UserDetails = () => {
  const user = [
    { id: 1, label: "Email", value: "jenopogi", icon: icon.email },
    { id: 2, label: "Contact Number", value: "09234567890", icon: icon.phone },
    { id: 3, label: "Address", value: "Cebu City", icon: icon.location },
  ];
  return (
    <section className="flex flex-col gap-5 px-3">
      <div className="bg-pink-200/50 p-5 flex flex-col gap-5  text-xl font-semibold text-gray-400 justify-center items-center rounded-sm">
        <img
          src="../defaultProfile.avif"
          className="h-40 aspect-square rounded-full "
        />
        <div className="flex gap-3">
          <p>Jeno</p>
          <p>M.</p>
          <p>Carisma</p>
        </div>
      </div>
      <form className="bg-pink-200/50  flex flex-col gap-5 px-5 py-10 rounded-sm">
        {user.map((details) => (
          <div
            className="flex bg-white w-full shadow rounded-sm"
            key={details.id}
          >
            <div className="w-15 aspect-square px-3 flex items-center justify-center">
              {details.icon}
            </div>
            <div className="flex flex-col gap-1 w-4/5 border-l border-gray-300">
              <label htmlFor={details.label} className="w-full pl-2 pt-2">
                {details.label}
              </label>
              <input
                type="text"
                placeholder={details.value}
                className="h-10 pl-2 border border-transparent rounded focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
                id={details.label}
              />
            </div>
          </div>
        ))}
      </form>
    </section>
  );
};

export default UserDetails;
