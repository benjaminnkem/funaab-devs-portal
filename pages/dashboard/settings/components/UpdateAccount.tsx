import { useSession } from "next-auth/react";
import { UserDataProps } from "../../../types/UserData.types";
import DateFormatter from "../../../../components/DateFormatter";
import Alert from "../../../../components/ui/Alert";
import { useState } from "react";
import { UpdateUserStructure } from "../../../../types/NewUsers,types";

const UpdateAccount = ({ userData }: UserDataProps) => {
  const { status, data: session } = useSession();
  const [formStatus, setFormStatus] = useState<{ loading: boolean; success: boolean }>({
    loading: false,
    success: false,
  });

  const [formInputs, setFormInputs] = useState<UpdateUserStructure>({
    fullName: "",
    department: "",
    phoneNumber: 0,
    bio: "",
  });
  const [errors, setErrors] = useState<UpdateUserStructure>({} as UpdateUserStructure);

  if (status === "unauthenticated") return null;

  if (status === "authenticated") {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    };

    const validateInputs = () => {
      const error = {} as UpdateUserStructure;
      if (!formInputs.fullName) error.fullName = "Full Name is required";
      if (!formInputs.department) error.department = "Department is required";
      if (!formInputs.phoneNumber) {
        error.phoneNumber = "Phone Number is required" as unknown as number;
      } else if (!formInputs.phoneNumber.toString().startsWith("0") || isNaN(formInputs.phoneNumber)) {
        error.phoneNumber = "Invalid Phone Number" as unknown as number;
      }

      return error;
    };

    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const gottenErr = validateInputs();
      setErrors(gottenErr);

      setFormStatus({ ...formStatus, loading: true, success: false });

      if (Object.keys(errors).length === 0) {
        const updateData = {
          username: userData.username, // passing this to find user in the server side
          fullName: formInputs.fullName,
          department: formInputs.department,
          phoneNumber: formInputs.phoneNumber,
          bio: formInputs.bio,
        };

        const res = await fetch("/api/admin/user/update", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(updateData),
        });

        if (!res.ok) {
          setFormStatus({ ...formStatus, loading: false, success: false });
        }

        setFormStatus({ ...formStatus, loading: false, success: true });
      }
    };

    return (
      <>
        <div className="shadow-md">
          {/* <Alert text="Updated Successfully" /> */}
          <div className="p-6 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-700">
            <h1 className="mb-4 text-2xl font-semibold text-gray-600">Update Profile</h1>

            <form onSubmit={(e) => handleUpdate(e)}>
              <div className="grid grid-cols-3 gap-3">
                <div className="my-1">
                  <label htmlFor="fullName" className="font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                    name="fullName"
                    id="fullName"
                    autoComplete="off"
                    placeholder={userData.fullName && userData.fullName}
                    value={formInputs.fullName}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.fullName && <p className="text-xs font-bold text-red-500">{errors.fullName}</p>}
                </div>
                <div className="my-1">
                  <label htmlFor="username" className="font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                    name="username"
                    id="username"
                    placeholder="username"
                    value={userData.username && userData.username}
                    disabled
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="example@xyz.com"
                    value={userData.email && userData.email}
                    disabled
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="department" className="font-semibold">
                    College/Department
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                    name="department"
                    id="department"
                    placeholder={userData.department && userData.department}
                    value={formInputs.department}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.department && <p className="text-xs font-bold text-red-500">{errors.department}</p>}
                </div>
                <div className="my-1">
                  <label htmlFor="level" className="font-semibold">
                    Level
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                    name="level"
                    id="level"
                    placeholder="100 - 700"
                    value={userData.level && userData.level}
                    disabled
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="phoneNumber" className="font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="0..."
                    value={formInputs.phoneNumber}
                    onChange={(e) => handleChange(e)}
                    maxLength={11}
                  />
                  {errors.phoneNumber && <p className="text-xs font-bold text-red-500">{errors.phoneNumber}</p>}
                </div>
                <div className="my-1" style={{ gridColumn: "1 / 3" }}>
                  <label htmlFor="bio" className="font-semibold">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    rows={4}
                    className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed"
                    placeholder="A short description of yourself"
                    maxLength={1024}
                    value={formInputs.bio}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
              </div>

              <p className="float-right mt-4 text-sm font-bold">
                Date Joined: <DateFormatter dateAsString={userData.dateCreated} />
              </p>

              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 mt-4 duration-200 bg-purple-700 rounded-md text-purple-50 hover:bg-purple-600 hover:animate-pulse">
                  Update ✍
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default UpdateAccount;
