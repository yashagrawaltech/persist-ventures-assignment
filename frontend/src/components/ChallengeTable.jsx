import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

const DialogBtn = ({ children, id }) => {
  const [statusSelect, setStatusSelect] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSelectChange = (value) => {
    setStatusSelect(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(statusSelect.trim() === "" || statusSelect.trim() === null) return;

    setLoading(true);
    await fetch(
      `${import.meta.env.VITE_FRONTEND_URL}/admin/change-challenge-status/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({ status: statusSelect }), // Convert the body to JSON
      }
    );
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-8">Update Status</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Select
                className="w-full"
                value={statusSelect}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">active</SelectItem>
                  <SelectItem value="inactive">inactive</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit">{loading ? <Loader /> : "Submit"}</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const ChallengeTable = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_FRONTEND_URL}/admin/get-challenges`
      );
      const data = await response.json();
      return data;
    };

    fetchData().then((data) => setChallenges(data.challenges));
  }, []);

  return (
    <div>
      <Table>
        <TableCaption>A list of your challenges.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Funding</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead className="w-72">Description</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {challenges.map((c, idx) => {
            idx += 1;
            return (
              <TableRow key={c._id}>
                <TableCell className="font-medium">{idx}</TableCell>
                <TableCell>{c.title}</TableCell>
                <TableCell>{c.initialFundingOffered}</TableCell>
                <TableCell>{c.deadline}</TableCell>
                <TableCell>{c.description}</TableCell>
                <TableCell>
                  <DialogBtn id={c._id}>
                    <span
                      className="w-full h-full px-4 py-2 rounded-md text-black"
                      style={{
                        backgroundColor:
                          c.status === "active" ? "#86efac" : "#fca5a5",
                      }}
                    >
                      {c.status}
                    </span>
                  </DialogBtn>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ChallengeTable;
