// AgencyListsTable.tsx
"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import useAxios from "@/Hooks/useAxios";

interface Agency {
  _id: string;
  name: string;
  location: string;
  createdAt: string;
  emails?: string[];
}

export function AgencyListsTable() {
  const axiosInstance = useAxios();
  const queryClient = useQueryClient();

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<Agency | null>(null);

  const [form, setForm] = useState({ name: "", location: "" });

  const { data: agencies = [], isLoading } = useQuery({
    queryKey: ["agencies"],
    queryFn: async () => {
      const res = await axiosInstance.get("/agents");
      return res.data.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await axiosInstance.delete(`/agents/${id}`),
    onSuccess: () => {
      toast.success("Agency deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["agencies"] });
    },
    onError: () => toast.error("Failed to delete agency"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Agency> }) => {
      return await axiosInstance.patch(`/agents/${id}`, data);
    },
    onSuccess: () => {
      toast.success("Agency updated successfully");
      queryClient.invalidateQueries({ queryKey: ["agencies"] });
      setOpenModal(false);
    },
    onError: () => toast.error("Failed to update agency"),
  });

  const handleEdit = (agency: Agency) => {
    setEditData(agency);
    setForm({ name: agency.name, location: agency.location });
    setOpenModal(true);
  };

  const handleUpdate = () => {
    if (!editData?._id) return;
    updateMutation.mutate({ id: editData._id, data: form });
  };

  return (
    <div className="rounded-lg shadow-sm">
      <div className="flex items-center justify-between p-6 rounded-lg bg-dashsecoundary">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-dashprimary rounded flex items-center justify-center">
            <span className="text-white text-sm">📋</span>
          </div>
          <h1 className="text-2xl text-dashprimary font-bold">Agency Lists</h1>
        </div>
        <Link href="/dashboard/add-agency/agency-lists">
          <button className="bg-dashprimary w-[120px] py-2 rounded-lg text-white">Add +</button>
        </Link>
      </div>

      <div className="p-6 rounded-lg bg-dashsecoundary mt-5">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search by Email" className="pl-10" />
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto bg-[#effdff] mt-5 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-center">Name of the Agency</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-center">Added Date</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-center">Total Agent Emails</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-center">Location</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="text-center py-6">Loading...</td>
              </tr>
            ) : agencies.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6">No agencies found.</td>
              </tr>
            ) : (
              agencies.map((agency: Agency) => (
                <tr key={agency._id}>
                  <td className="px-6 py-4 text-sm text-gray-900 text-center">{agency.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {new Date(agency.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    {agency.emails?.length || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{agency.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2 justify-center">
                      <button
                        onClick={() => handleEdit(agency)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteMutation.mutate(agency._id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Agency</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button onClick={handleUpdate} className="bg-dashprimary hover:bg-dashprimary">
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}