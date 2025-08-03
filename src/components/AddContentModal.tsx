import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface AddContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "blog" | "gallery";
  onSubmit: (data: any) => void;
}

export const AddContentModal = ({ isOpen, onClose, type, onSubmit }: AddContentModalProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null as File | null,
    images: [] as File[]
  });

  const handleLogin = () => {
    const validCredentials = type === "blog" 
      ? { username: "mdsblog", password: "mdsblog1234" }
      : { username: "mdsgallery", password: "mdsgallery1234" };

    if (credentials.username === validCredentials.username && 
        credentials.password === validCredentials.password) {
      setIsAuthenticated(true);
      toast.success("Login successful!");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  const handleSubmit = () => {
    if (type === "blog") {
      if (!formData.title || !formData.description || !formData.image) {
        toast.error("Please fill all fields!");
        return;
      }
    } else {
      if (formData.images.length === 0) {
        toast.error("Please select at least one image!");
        return;
      }
    }

    onSubmit(formData);
    toast.success(`${type === "blog" ? "Blog" : "Gallery images"} published successfully!`);
    onClose();
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setFormData({ title: "", description: "", image: null, images: [] });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      if (type === "blog") {
        setFormData({ ...formData, image: files[0] });
      } else {
        setFormData({ ...formData, images: Array.from(files) });
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {type === "blog" ? "Add New Blog" : "Add Gallery Images"}
          </DialogTitle>
        </DialogHeader>

        {!isAuthenticated ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="Enter username"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Enter password"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {type === "blog" ? (
              <>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter blog title"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter blog description"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="image">Image</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </>
            ) : (
              <div>
                <Label htmlFor="images">Upload Images</Label>
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  You can select multiple images
                </p>
              </div>
            )}
            
            <div className="flex space-x-2">
              <Button onClick={handleSubmit} className="flex-1">
                Publish
              </Button>
              <Button variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};