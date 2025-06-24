"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarPlus, X } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import useAxios from "@/Hooks/useAxios";
import { useRouter } from "next/navigation";

export function AddAgencyForm() {
  const axiosInstance = useAxios();

  const [emails, setEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const addEmail = () => {
    if (newEmail.trim()) {
      setEmails([...emails, newEmail.trim()]);
      setNewEmail("");
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const payload = {
        name,
        location,
        emails,
      };
      const res = await axiosInstance.post("/agents/create", payload);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Agency added successfully!");
      router.push("/dashboard/add-agency");
      setName("");
      setLocation("");
      setEmails([]);
    },
    onError: () => {
      toast.error("Failed to add agency");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !location.trim() || emails.length === 0) {
      toast.error("Please fill all fields before submitting.");
      return;
    }
    mutate();
  };

  return (
    <div>
      <div className="flex items-center space-x-2 mb-6 w-full bg-dashsecoundary p-4 rounded-lg">
        <div>
          <span className="text-dashprimary text-sm">
            <CalendarPlus />
          </span>
        </div>
        <h1 className="text-2xl text-dashprimary font-bold">Add Agency</h1>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="bg-dashsecoundary p-4 rounded-lg">
          <Label
            htmlFor="location"
            className="text-sm font-medium text-gray-700"
          >
            Agency Location
          </Label>
          <Input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1"
            placeholder="Enter location"
          />
        </div>

        <div className="bg-dashsecoundary p-4 rounded-lg">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name of the Agency
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1"
            placeholder="Enter agency name"
          />
        </div>

        <div className="bg-dashsecoundary p-4 rounded-lg">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Add mail
          </Label>
          <div className="mt-1 flex space-x-2">
            <Input
              id="email"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter email"
              className="flex-1"
            />
            <Button
              type="button"
              onClick={addEmail}
              className="bg-dashprimary hover:bg-dashprimary w-[100px]"
            >
              Add
            </Button>
          </div>
        </div>

        <div className="bg-dashsecoundary p-4 rounded-lg">
          <Label className="text-sm font-medium text-gray-700">Emails</Label>
          <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
            {emails.length > 0 ? (
              emails.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-2 rounded-md shadow-sm"
                >
                  <span className="text-sm text-gray-800">{email}</span>
                  <Button
                    type="button"
                    onClick={() => removeEmail(index)}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No emails added yet.</p>
            )}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            className="bg-dashprimary hover:bg-dashprimary px-8"
            disabled={isPending}
          >
            {isPending ? "Adding..." : "Add Agency"}
          </Button>
        </div>
      </form>
    </div>
  );
}
