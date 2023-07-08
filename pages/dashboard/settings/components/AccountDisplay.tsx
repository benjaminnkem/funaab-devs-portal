const AccountDisplay = () => {
  return (
    <>
      <div className="bg-white shadow-md border">
        <div className="bg-white p-6 border">
          <h1 className="text-2xl text-gray-600 mb-4 font-semibold">Account Settings</h1>

          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="my-1">
                <label htmlFor="fullName" className="font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                  name="fullName"
                  id="fullName"
                />
              </div>
              <div className="my-1">
                <label htmlFor="username" className="font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                  name="username"
                  id="username"
                />
              </div>
              <div className="my-1">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                  name="email"
                  id="email"
                />
              </div>
              <div className="my-1">
                <label htmlFor="department" className="font-semibold">
                  College/Department
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                  name="department"
                  id="department"
                  disabled
                />
              </div>
              <div className="my-1">
                <label htmlFor="level" className="font-semibold">
                  Level
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                  name="level"
                  id="level"
                />
              </div>
              <div className="my-1">
                <label htmlFor="phoneNumber" className="font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                  name="phoneNumber"
                  id="phoneNumber"
                />
              </div>
            </div>

            <p className="font-mono float-right text-sm font-bold mt-4">Date Joined: {new Date().toLocaleString()}</p>

            <button className="bg-purple-700 text-purple-50 px-4 py-2 rounded-md mt-4 hover:bg-purple-600 duration-200 hover:animate-pulse">
              Update ✍
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountDisplay;
