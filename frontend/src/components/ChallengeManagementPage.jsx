import ButtonLocal from "./Button";
import { Button } from "@/components/ui/button";
import ChallengeTable from "./ChallengeTable";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import { Loader } from "lucide-react";
import { useState } from "react";

const DialogBtn = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    image: null,
    deadline: "",
    description: "",
    initialFundingOffered: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    // Use a single setFormData call to avoid overwriting
    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value, // Check if the input is for the image
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.deadline ||
      !formData.description ||
      !formData.image ||
      !formData.initialFundingOffered ||
      !formData.status ||
      !formData.title
    )
      return setError("all fields are required!");

    setLoading(true);
    try {
      const data = new FormData();

      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const response = await fetch(
        `${import.meta.env.VITE_FRONTEND_URL}/admin/create-challenge/`,
        {
          method: "POST",
          body: data, // Send FormData directly
        }
      );

      if(response.status > 400) return await response.json().then((data) => setError(data.message))
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <span className="w-full text-red-500">
            {error && error.length > 0 ? error : null}
          </span>

          <DialogTitle className="mb-8">Add Challenge</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-black" htmlFor="image">
                  Image
                </label>
                <Input
                  type="file"
                  className="mt-2"
                  name="image"
                  id="image"
                  placeholder="Enter Image"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="text-black" htmlFor="title">
                  Title
                </label>
                <Input
                  className="mt-2"
                  name="title"
                  id="title"
                  placeholder="Enter Title"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex items-end justify-between gap-4">
                <div className="w-full">
                  <label className="text-black" htmlFor="initialFundingOffered">
                    Initial Funding Offered
                  </label>
                  <Input
                    className="mt-2"
                    type="number"
                    name="initialFundingOffered"
                    id="initialFundingOffered"
                    placeholder="10000"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="w-full">
                  <label className="text-black" htmlFor="deadline">
                    Deadline
                  </label>
                  <Input
                    className="mt-2"
                    type="date"
                    name="deadline"
                    id="deadline"
                    placeholder="Deadline"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div>
                <label className="text-black" htmlFor="description">
                  Description
                </label>
                <Textarea
                  className="mt-2"
                  name="description"
                  id="description"
                  placeholder="Enter Description"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="text-black" htmlFor="status">
                  Status
                </label>
                <Select
                  className="w-full"
                  value={formData.status}
                  onValueChange={(v) => setFormData({ ...formData, status: v })}
                >
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="active" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">active</SelectItem>
                    <SelectItem value="inactive">inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">{loading ? <Loader /> : "Submit"}</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const ChallengeManagementPage = () => {
  return (
    <div className="p-4 text-white w-full h-full overflow-hidden flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Challenge Management</h1>{" "}
        <ButtonLocal>
          <DialogBtn>Add Challenge</DialogBtn>
        </ButtonLocal>
      </div>
      <div className="w-full h-full overflow-y-auto">
        <ChallengeTable />
      </div>
    </div>
  );
};

export default ChallengeManagementPage;
