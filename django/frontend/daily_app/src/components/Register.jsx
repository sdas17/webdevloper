import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("signup/", formData);
      toast.success(response.data.message || "Registered successfully 🎉");

      setFormData({
        full_name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error || "Something went wrong");
      } else {
        toast.error("Server error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>
          <i className="fas fa-user-plus"></i> Create Account
        </h2>
        <p className="subtitle">Sign up to manage your expenses</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <i className="fas fa-user"></i> Full Name
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter your name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-envelope"></i> Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>
                <i className="fas fa-user-check"></i> Register
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
